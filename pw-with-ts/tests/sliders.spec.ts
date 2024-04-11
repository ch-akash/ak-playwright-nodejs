import { test, expect } from "@playwright/test";

test("Simple Slider on a page", async ({ page }) => {
  await page.goto("https://practice-automation.com/slider/");
  const slider = await page.getByRole("slider");
  const value = page.locator("#value");
  await slider.fill("0");
  await expect(value).toContainText("0");
  await slider.fill("100");
  await expect(value).toContainText("100");
});

test("Page with multiple sliders", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/drag-drop-range-sliders-demo"
  );
  //Geolocation based handling for cookies. comment this based on your location
  await page.getByRole("button", { name: "Allow all" }).click();

  //Where to call getByRole('slider') -- It has to be the input attribute
  await expect(page.locator("#range")).toContainText("5");

  //Inpute attribute locator CSS directly usedy
  await page.locator("[id='slider1'] input").fill("32");
  await expect(page.locator("#range")).toContainText("32");

  //Playwright is locating the parent slider element which holds the input as a child
  //Then the getByRole('slider') has been called on this child
  await page.locator("#slider2").getByRole("slider").fill("64");
  await expect(page.locator("#rangePrimary")).toContainText("64");
  await page.locator("#slider8").getByRole("slider").fill("1");
  await page.locator("#slider8").getByRole("slider").press("ArrowLeft");
  await expect(page.locator("#slider8")).toContainText("1");
});
