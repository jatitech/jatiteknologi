import { readFileSync } from "node:fs";

import { describe, expect, it } from "vite-plus/test";

import { DARK_MODE, LIGHT_MODE, PALETTE } from "./palette";
import { RADIUS, RADIUS_PRIMITIVES, SPACING, SPACING_PRIMITIVES } from "./scale";
import { designPreflight, designTheme } from "./theme";
import { TYPOGRAPHY } from "./typography";

const TOKEN_FILE = new URL("../../../design/tokens.penpot.json", import.meta.url);

interface PenpotTypography {
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
}

interface PenpotScalar {
  type: "color" | "spacing" | "borderRadius" | "fontSizes";
  value: string;
}

type PenpotToken = { type: "typography"; value: PenpotTypography } | PenpotScalar;

type PenpotSet = Readonly<Record<string, PenpotToken>>;

interface PenpotFile {
  sets: Readonly<Record<"primitives" | "semantic" | "modes/light" | "modes/dark", PenpotSet>>;
}

interface ValueCase {
  set: string;
  name: string;
  expected: string;
  actual: string | undefined;
}

// SAFETY: the file is the Penpot export this repo commits; the cases below fail if its shape changes.
const file = JSON.parse(readFileSync(TOKEN_FILE, "utf8")) as PenpotFile;

const referenced = new Map([
  ...Object.entries(file.sets.primitives),
  ...Object.entries(file.sets.semantic),
]);

/** Follows `{token}` references in a Penpot value down to the literal it names. */
function literal(value: string): string {
  const match = /^\{(.+)\}$/.exec(value);

  if (match === null) return value;
  const target = referenced.get(match[1]);

  if (target === undefined || target.type === "typography") {
    throw new Error(`Unresolved reference ${value}`);
  }

  return literal(target.value);
}

/** Scalar tokens of one set and type, in file order. */
function scalarsOf(set: PenpotSet, type: PenpotScalar["type"]) {
  return Object.entries(set).flatMap(([name, token]) =>
    token.type === type ? [{ name, value: token.value }] : [],
  );
}

/** Each scalar token of one set and type, paired with the code value that should match it. */
function valueCases(
  set: string,
  tokens: PenpotSet,
  type: PenpotScalar["type"],
  code: ReadonlyMap<string, string>,
  unit: string,
): ValueCase[] {
  return scalarsOf(tokens, type).map(({ name, value }) => ({
    set,
    name,
    expected: `${literal(value)}${unit}`,
    actual: code.get(name),
  }));
}

const colourCases = [
  ...valueCases("primitives", file.sets.primitives, "color", new Map(Object.entries(PALETTE)), ""),
  ...valueCases(
    "modes/light",
    file.sets["modes/light"],
    "color",
    new Map(Object.entries(LIGHT_MODE)),
    "",
  ),
  ...valueCases(
    "modes/dark",
    file.sets["modes/dark"],
    "color",
    new Map(Object.entries(DARK_MODE)),
    "",
  ),
];

const spacingCodes = new Map([...Object.entries(SPACING_PRIMITIVES), ...Object.entries(SPACING)]);
const radiusCodes = new Map([...Object.entries(RADIUS_PRIMITIVES), ...Object.entries(RADIUS)]);

const lengthCases = [
  ...valueCases("primitives", file.sets.primitives, "spacing", spacingCodes, "px"),
  ...valueCases("semantic", file.sets.semantic, "spacing", spacingCodes, "px"),
  ...valueCases("primitives", file.sets.primitives, "borderRadius", radiusCodes, "px"),
  ...valueCases("semantic", file.sets.semantic, "borderRadius", radiusCodes, "px"),
];

const typographyCodes = new Map(Object.entries(TYPOGRAPHY));

const typographyCases = Object.entries(file.sets.semantic).flatMap(([name, token]) =>
  token.type === "typography"
    ? [
        {
          name,
          expected: {
            fontSize: `${literal(token.value.fontSize)}px`,
            lineHeight: literal(token.value.lineHeight),
            letterSpacing: `${literal(token.value.letterSpacing)}px`,
          },
          actual: typographyCodes.get(name),
        },
      ]
    : [],
);

describe("Penpot colour tokens", () => {
  it.for(colourCases)("$set $name matches the code value", ({ expected, actual }) => {
    expect(actual).toBe(expected);
  });
});

describe("Penpot spacing and radius tokens", () => {
  it.for(lengthCases)("$set $name matches the code value", ({ expected, actual }) => {
    expect(actual).toBe(expected);
  });
});

describe("Penpot typography tokens", () => {
  it.for(typographyCases)("$name matches the code style", ({ expected, actual }) => {
    expect(actual).toEqual(expected);
  });
});

describe("code token names", () => {
  it.for([
    ["colour primitives", Object.keys(PALETTE), scalarsOf(file.sets.primitives, "color")],
    ["light mode", Object.keys(LIGHT_MODE), scalarsOf(file.sets["modes/light"], "color")],
    ["dark mode", Object.keys(DARK_MODE), scalarsOf(file.sets["modes/dark"], "color")],
    [
      "spacing",
      [...spacingCodes.keys()],
      [...scalarsOf(file.sets.primitives, "spacing"), ...scalarsOf(file.sets.semantic, "spacing")],
    ],
    [
      "radius",
      [...radiusCodes.keys()],
      [
        ...scalarsOf(file.sets.primitives, "borderRadius"),
        ...scalarsOf(file.sets.semantic, "borderRadius"),
      ],
    ],
    ["typography", [...typographyCodes.keys()], typographyCases],
  ] as const)("%s has exactly the names in the Penpot file", ([, code, penpot]) => {
    const penpotNames = penpot.map((item) => item.name);
    expect([...code].sort()).toEqual([...penpotNames].sort());
  });
});

describe("theme colours", () => {
  const themeColours = new Map(Object.entries(designTheme.colors ?? {}));

  it.for(Object.keys(LIGHT_MODE).map((token) => token.replace("color.", "")))(
    "%s points at a variable declared for both schemes",
    (role) => {
      expect(themeColours.get(role)).toBe(`var(--color-${role})`);
      expect(designPreflight.split(`--color-${role}:`).length - 1).toBe(2);
    },
  );
});
