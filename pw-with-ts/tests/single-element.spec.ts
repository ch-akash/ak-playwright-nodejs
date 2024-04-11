import { Locator, test } from "@playwright/test";

test("Click single element by ID", async ({ page }) => {
  await page.goto(
    "https://ultimateqa.com/simple-html-elements-for-automation/"
  );

  const clickButton = await page.locator("idExample");
  //CSS Locator and your xPath
});
