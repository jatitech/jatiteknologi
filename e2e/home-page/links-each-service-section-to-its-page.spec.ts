import { expect, test } from "../fixtures";

test.describe("Home page", () => {
  const LINKS = [
    { path: "/", name: "Pelajari layanan: Implementasi ERPNext", href: "/layanan/frappe-erpnext" },
    { path: "/", name: "Pelajari layanan: Pengembangan perangkat lunak", href: "#cara-kerja" },
    { path: "/", name: "Pelajari layanan: Pendampingan TI", href: "#cara-kerja" },
    {
      path: "/en",
      name: "Learn more: ERPNext implementation",
      href: "/en/services/frappe-erpnext",
    },
    { path: "/en", name: "Learn more: Software development", href: "#how-we-work" },
    { path: "/en", name: "Learn more: Long-term IT care", href: "#how-we-work" },
  ] as const;

  test("Links each service section to its platform page or to the process section", async ({
    page,
  }) => {
    for (const { path, name, href } of LINKS) {
      await page.goto(path);

      const link = page.getByRole("link", { name, exact: true });
      await expect(link).toHaveAttribute("href", href);
    }

    // Following the ERPNext link opens its page.
    await page.goto("/");
    await page
      .getByRole("link", { name: "Pelajari layanan: Implementasi ERPNext", exact: true })
      .click();
    await expect(page).toHaveURL(/\/layanan\/frappe-erpnext$/);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
});
