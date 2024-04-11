import { expect, test } from "playwright/test";

test("Webtable with Locator Filters", async ({ page }) => {
  await page.goto("https://letcode.in/advancedtable");

  //For student locations where consent pop-up will not appear, this code will be
  //handled by try-catch block.
  try {
    await page.getByLabel("Consent", { exact: true }).click();
  } catch (e) {}

  await page.getByLabel("S.NO: activate to sort column").click();

  //Step 1 - Fetch the row and treat it like a list of cells
  const row = await page.getByRole("row");

  //Step 2 - We use a filter to find a cell with text 47 inside this row
  //We can chain the filters to validate multiple cells of the SAME row
  await expect(
    row.filter({ has: page.getByRole("cell", { name: "47" }) }).filter({
      has: page.getByRole("cell", { name: "University of Sheffield" }),
    })
  ).toBeVisible();

  //New step - Sort by Uni name
  await page.getByLabel("UNIVERSITY NAME: activate to").click();
  const rowForUniSorting = await page.getByRole("row").nth(1);

  //Step to validate that top Uni is correctly sorted
  await expect(
    rowForUniSorting.filter({
      has: page.getByRole("cell", { name: "Aga Khan University	" }),
    })
  ).toBeVisible();
});

test("Multiple tables on same page", async ({ page }) => {
  await page.goto("https://practice-automation.com/tables/");

  //Sort the table on a page with rank of countries
  await page.getByLabel("Rank: activate to sort column").dblclick();

  //First we have to locate the table under testing
  const table = await page.locator("#tablepress-1");

  //Fetch the first row of the above table
  const row = await table.getByRole("row").nth(1);

  await expect(
    row
      .filter({ has: page.getByRole("cell", { name: "25", exact: true }) })
      .filter({
        has: page.getByRole("cell", { name: "South Africa", exact: true }),
      })
      .filter({
        has: page.getByRole("cell", { name: "59.3", exact: true }),
      })
  ).toBeVisible();

  //Sort the table on a page with conutry name
  await page.getByLabel("Country: activate to sort").click();
});

test("Webtables using xPath", async ({ page }) => {
  const rowNumber = 26;

  await page.goto("https://practice-automation.com/tables/");

  //Sort the table on a page with rank of countries
  await page.getByLabel("Rank: activate to sort column").dblclick();

  //xpath for the first row or to say nth row
  const xpathForNthRow = `//*[contains(@class,'row-${rowNumber}')]//*[contains(@class,'column-2')]`;

  //xpath appender string for following and preceding siblings of central column
  const xpathAppenderForPopulation = "/following-sibling::*";
  const xpathAppenderForRank = "/preceding-sibling::*";

  const centralCell = await page.locator(xpathForNthRow);
  await expect(centralCell).toHaveText("South Africa");

  const populationCell = await page.locator(
    xpathForNthRow + xpathAppenderForPopulation
  );
  const rankCell = await page.locator(xpathForNthRow + xpathAppenderForRank);
  await expect(populationCell).toHaveText("59.3");
  await expect(rankCell).toHaveText("25");
});
