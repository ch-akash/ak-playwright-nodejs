import { test, expect } from "@playwright/test";

test("Simple Frame", async ({ page }) => {
  await page.goto("https://webdriveruniversity.com/IFrame/index.html");

  const frame = await page.frameLocator("#frame"); //This is the way to locate and store the frame locator.

  await frame.getByRole("link", { name: "Our Products" }).click();
  await frame.getByRole("link", { name: "New Laptops" }).click();
  await frame.getByRole("button", { name: "Proceed" }).click();
  await expect(frame.getByRole("link", { name: "Used Laptops" })).toBeVisible();
  await frame.getByRole("link", { name: "Used Laptops" }).click();
  await frame.getByRole("button", { name: "Close" }).click();
  await frame.getByRole("link", { name: "Cameras" }).click();
  await frame.getByRole("button", { name: "Proceed" }).click();
});
