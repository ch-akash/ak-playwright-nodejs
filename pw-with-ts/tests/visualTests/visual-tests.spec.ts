import { expect, test } from "playwright/test";

test("Visual Testing with PW", async ({ page }) => {
  await page.goto("https://bookcart.azurewebsites.net/");

  //Visual comparison - screenshot comparison
  //We are expecting this page to have a screenshot which is
  //compared against the baseline image.

  //For the first time this method will log an error and create
  //a new baseline image.

  await expect(page).toHaveScreenshot();
});

test("Visual Testing for a static page", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");

  //Visual comparison - screenshot comparison
  //We are expecting this page to have a screenshot which is
  //compared against the baseline image.

  //For the first time this method will log an error and create
  //a new baseline image.

  await expect(page).toHaveScreenshot();
});

test("Visual Testing - Mask a particular element", async ({ page }) => {
  await page.goto("https://bookcart.azurewebsites.net/");

  //To mask an element, use the mask option with the locator of the element.
  await expect(page).toHaveScreenshot({ mask: [page.locator("mat-nav-list")] });
});

test("Visual Testing - Use custom masking colour", async ({ page }) => {
  await page.goto("https://bookcart.azurewebsites.net/");

  //To mask an element, use the mask option with the locator of the element.
  await expect(page).toHaveScreenshot({
    mask: [page.locator("mat-nav-list")],
    maskColor: "#ff1100",
  });
});

test("Visual Testing - Omit Backgroud", async ({ page }) => {
  await page.goto("https://bookcart.azurewebsites.net/");

  //To mask an element, use the mask option with the locator of the element.
  await expect(page).toHaveScreenshot({
    mask: [page.locator("mat-nav-list")],
    maskColor: "#ff1100",
    omitBackground: true,
  });
});

test("Visual Testing - Focus on element or capture a particular element", async ({
  page,
}) => {
  await page.goto("https://bookcart.azurewebsites.net/");

  //To mask an element, use the mask option with the locator of the element.
  await expect(page.locator("mat-nav-list")).toHaveScreenshot();
});

test("Visual Testing - Define Max diff pixel", async ({ page }) => {
  await page.goto("https://bookcart.azurewebsites.net/");

  //To mask an element, use the mask option with the locator of the element.
  await expect(page.locator("mat-nav-list")).toHaveScreenshot({
    maxDiffPixels: 50,
  });
});
