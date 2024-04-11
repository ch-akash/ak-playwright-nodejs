import { test } from "playwright/test";

//This test will already be authorised
test("Use storage state for login - Global setup", async ({ page }) => {
  await page.goto("https://bookcart.azurewebsites.net/");
});
