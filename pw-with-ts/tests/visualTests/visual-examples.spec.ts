import { expect, test } from "playwright/test";

test("Test with TestInfo param", async ({ page }, testInfo) => {
  await page.goto("https://practice-automation.com/tables/");
  await expect(page).toHaveScreenshot({
    fullPage: true,
    maxDiffPixelRatio: 0.5,
  });
});

test("Static Web Tables - Focus on Table 1", async ({ page }) => {
  await page.goto("https://practice-automation.com/tables/");
  await expect(page.locator("[class='wp-block-table']")).toHaveScreenshot();
});

test("[Category Romance]: Book store slider with lowest price should not have any books", async ({
  page,
}) => {
  await page.goto("https://bookcart.azurewebsites.net/");
  await page.locator("mat-list-item").filter({ hasText: "Romance" }).click();
  await page.getByRole("slider").fill("111");
  await expect(page).toHaveScreenshot({ fullPage: true });
});

test("Check Background Color of an element", async ({ page }) => {
  await page.goto("https://gh-users-search.netlify.app/");

  await expect(page.getByText("search", { exact: true })).toHaveCSS(
    "background-color",
    "rgb(44, 174, 186)"
  );
});

test("Check Color of an element", async ({ page }) => {
  await page.goto("https://gh-users-search.netlify.app/");

  await expect(page.getByText("search", { exact: true })).toHaveCSS(
    "color",
    "rgb(255, 255, 255)"
  );
});

test("Check Display Property", async ({ page }) => {
  await page.goto("https://gh-users-search.netlify.app/");
  await expect(page.locator("[class='purple']")).toHaveCSS("display", "grid");
});
