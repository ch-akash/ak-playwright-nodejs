import { test } from "@playwright/test";

test("Select using value", async ({ page }) => {
  await page.goto(
    "http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await page.locator("#dropdowm-menu-1").selectOption("python");
  await page.locator("#dropdowm-menu-2").selectOption("testng");
  await page.locator("#dropdowm-menu-3").selectOption("css");
});

test("Select using label", async ({ page }) => {
  await page.goto(
    "http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await page.locator("#dropdowm-menu-1").selectOption({ label: "Python" });
  await page.locator("#dropdowm-menu-2").selectOption({ label: "JUnit" });
  await page.locator("#dropdowm-menu-3").selectOption({ label: "JavaScript" });

  //Multi Select
  await page.locator("#dropdowm-menu-3").selectOption(["Option1", "Option2"]);
});
