import test, { expect } from "@playwright/test";

//Locate a list using CSS selection and click 3rd element
test("Select nth from list of elements", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  await page.locator("[id='content'] ul li a").nth(2).click();
});

test("Select nth from list of elements with a text", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  await page.getByText("Dynamic").nth(2).click();
});

