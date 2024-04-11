import { test, expect } from "@playwright/test";

test("Select date range from calenders", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );

  // //Based on the geolocation you might need to allow for consent
  await page.getByRole("button", { name: "Allow all" }).click();

  // //Single date
  // await page.getByLabel("Birthday:").fill("2024-06-06");

  // //Date range
  // await page.getByPlaceholder("Start date").click();
  // await page.getByRole("cell", { name: "»" }).click();
  // await page.getByRole("cell", { name: "3", exact: true }).first().click();
  // await page.getByPlaceholder("End date").click();
  // await page.getByRole("cell", { name: "»" }).click();
  // await page.getByRole("cell", { name: "»" }).click();
  // await page.getByPlaceholder("End date").click();
  // await page.getByRole("cell", { name: "31" }).click();

  //Dynamic month assertion and date selection
  //Make the next arrow click operation dynamic
  const monthIndex = 12;

  await page.getByPlaceholder("Start date").click();
  while (monthIndex <= 12) {
    await page.getByRole("cell", { name: "»" }).click();
    const textContant = await page
      .locator("[class='datepicker-switch']")
      .first()
      .textContent();

    if (textContant.includes("August")) {
      await page.getByRole("cell", { name: "29" }).nth(1).click();
      break;
    }
  }
});

test("Select a single date", async ({ page }) => {
  await page.goto("https://practice-automation.com/calendars/");
  await page.getByLabel("Select or enter a date (YYYY-").click();
  await page.getByTitle("Next").click();
  await page.getByLabel("Select or enter a date (YYYY-").dblclick();
  await page.getByTitle("Next").click();
  await page.getByRole("link", { name: "21" }).click();
});
