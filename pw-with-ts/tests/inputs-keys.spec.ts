import { test } from "@playwright/test";
import path from "path";

test("Text inputs", async ({ page }) => {
  await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html");
  await page.getByPlaceholder("First Name").fill("Test First Name");
  await page.getByPlaceholder("Last Name").fill("Test Last Name");
  await page.getByPlaceholder("Email Address").fill("Random Street");
  await page.getByPlaceholder("Comments").fill("PW is awesome");
  await page.locator("[value='SUBMIT']").click();
});

test("Text inputs with Enter key press", async ({ page }) => {
  await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html");
  await page.getByPlaceholder("First Name").fill("Test First Name");
  await page.getByPlaceholder("Last Name").fill("Test Last Name");
  await page.getByPlaceholder("Email Address").fill("Random@Street.com");
  //First apporach
  //   await await page.locator("[value='SUBMIT']").press("Enter");
  //Second Approach
  await page.press("[value='SUBMIT']", "Enter");
  // All available Press options
  // Backquote, Minus, Equal, Backslash, Backspace, Tab, Delete, Escape,
  // ArrowDown, End, Enter, Home, Insert, PageDown, PageUp, ArrowRight,
  // ArrowUp, F1 - F12, Digit0 - Digit9, KeyA - KeyZ, etc.
});

test("Type inputs", async ({ page }) => {
  await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html");
  await page
    .getByPlaceholder("First Name")
    .pressSequentially("Test First Name");
  await page.getByPlaceholder("Last Name").pressSequentially("Test Last Name");
  await page
    .getByPlaceholder("Email Address")
    .pressSequentially("Random@Street.com");
  await page.getByPlaceholder("Comments").pressSequentially("PW is awesome");
  await page.locator("[value='SUBMIT']").click();
});