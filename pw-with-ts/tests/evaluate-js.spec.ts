import { test } from "playwright/test";

test("Evaluate JavaScript inside browser", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");

  await page.evaluate(() => {
    let i = 10;
    let j = 30;
    console.log(i + j);
  });

  console.log(await page.evaluate(() => document.readyState));
  await page.evaluate(() => window.prompt("This is a sample prompt"));
});
