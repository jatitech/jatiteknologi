/**
 * @schema 2.10
 * @input cols: number = 44
 * @input rows: number = 20
 */

const W = pencil.width;
const H = pencil.height;
const cols = Math.max(20, Math.floor(pencil.input.cols));
const rows = Math.max(10, Math.floor(pencil.input.rows));

const nodes = [];

const mix = (a, b, t) => a + (b - a) * t;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

function hexLerp(c1, c2, t) {
  const p = (h) => [
    parseInt(h.slice(1, 3), 16),
    parseInt(h.slice(3, 5), 16),
    parseInt(h.slice(5, 7), 16),
  ];
  const [r1, g1, b1] = p(c1);
  const [r2, g2, b2] = p(c2);
  const toHex = (n) =>
    Math.round(clamp(n, 0, 255))
      .toString(16)
      .padStart(2, "0");
  return (
    "#" + toHex(mix(r1, r2, t)) + toHex(mix(g1, g2, t)) + toHex(mix(b1, b2, t))
  );
}

const edgeCool = "#0b1744";
const midBlue = "#2d4bb8";
const glowBlue = "#7fa8ff";
const highlight = "#e6f0ff";

for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const nx = c / (cols - 1);
    const ny = r / (rows - 1);

    const perspective = Math.pow(1 - ny, 1.6);
    const rowY = 0.08 + ny * 0.75;
    const curveLift =
      Math.pow(Math.abs(nx - 0.5) * 2, 2.3) * 0.18 * (1 - ny * 0.4);
    const finalYNorm = rowY - curveLift;
    const py = finalYNorm * H;

    if (py < -5 || py > H - 10) continue;

    const spreadX = 0.5 + (nx - 0.5) * (0.4 + perspective * 0.6);
    const px = spreadX * W;

    if (px < -10 || px > W + 10) continue;

    const distFromCenterX = Math.abs(nx - 0.5) * 2;
    const centerGlow = Math.pow(1 - distFromCenterX, 1.8);
    const glow = clamp(centerGlow * 0.55 + (1 - ny) * 0.45, 0, 1);

    let color;
    if (glow > 0.82) color = hexLerp(glowBlue, highlight, (glow - 0.82) / 0.18);
    else if (glow > 0.45)
      color = hexLerp(midBlue, glowBlue, (glow - 0.45) / 0.37);
    else color = hexLerp(edgeCool, midBlue, glow / 0.45);

    const size = clamp(1.1 + glow * 2.5 + perspective * 1.2, 1, 4.2);
    const opacity = clamp(0.3 + glow * 0.7, 0.25, 1);

    nodes.push({
      type: "ellipse",
      x: px - size / 2,
      y: py - size / 2,
      width: size,
      height: size,
      fill: color,
      opacity,
    });
  }
}

return nodes;
