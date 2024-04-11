import { test, expect } from "@playwright/test";

test("Nested iFrames", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/frames");

  await expect(
    page.locator("li").filter({ hasText: "Nested Frames" })
  ).toBeVisible();
  await expect(page.locator("li").filter({ hasText: "iFrame" })).toBeVisible();
  await expect(page.getByRole("list")).toContainText("Nested Frames");
  await expect(page.getByRole("list")).toContainText("iFrame");
  await page.getByRole("link", { name: "Nested Frames" }).click();

  const topFrame = await page.frameLocator('frame[name="frame-top"]');

  await topFrame //Parent frame locator
    .frameLocator('frame[name="frame-left"]') //Child frame locator
    .getByText("LEFT")
    .click();
  await topFrame
    .frameLocator('frame[name="frame-middle"]')
    .locator("body")
    .click();
  await topFrame
    .frameLocator('frame[name="frame-right"]')
    .getByText("RIGHT")
    .click();
  await page
    .frameLocator('frame[name="frame-bottom"]')
    .getByText("BOTTOM")
    .click();
});
