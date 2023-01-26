import { test, expect } from "@playwright/test";

test.use({
  colorScheme: "dark",
});
test("create a new github issue", async ({ page }) => {
  await page.goto("https://github.com/microsoft/TypeScript");
  await page.screenshot({ path: "landingPage.png" });
  await page.getByRole("link", { name: "Issues" }).click();
  await page.getByRole("button", { name: "New issue" }).click();

  await page.waitForLoadState("networkidle");
  await page
    .getByRole("dialog", { name: "Sign up for GitHub" })
    .getByRole("link", { name: "Sign in" })
    .click();
  await page.waitForLoadState("networkidle");
  await page.screenshot({ path: "dialogPage.png" });
});
