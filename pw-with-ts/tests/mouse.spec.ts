import { test, chromium } from "@playwright/test";

test("Double Click", async ({ page, browser }) => {
  await page.goto("http://webdriveruniversity.com/Actions/index.html");
  await page.getByRole("heading", { name: "Double Click Me!" }).dblclick();
});

test("Mouse Hover", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/hovers");
  await page.locator("[alt='User Avatar']").first().hover(); //Mouse Hover
  await page.getByRole("heading", { name: "name: user2" });
  await page.getByRole("link", { name: "View profile" }).click();
});
