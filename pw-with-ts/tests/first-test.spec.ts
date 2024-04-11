import test from "@playwright/test";

test("Our First Test", async ({ page }) => {
  await page.goto("https://www.google.com");
});
