import { test, expect } from "@playwright/test";

test("Handle new window", async ({ page }) => {
  await page.goto("https://practice-automation.com/window-operations/");
  await expect(page.getByRole("button", { name: "New Window" })).toBeVisible();
  await expect(page.locator("#post-1147")).toContainText("New Window");

  //Wait for the pop-up event
  const page1Promise = page.waitForEvent("popup");
  //Element that invokes the popup is clicked
  await page.getByRole("button", { name: "New Window" }).click();

  //Await till popup promise has been resolved
  const page1 = await page1Promise;

  //Interact with elements in this popup window
  await page1
    .getByRole("button", { name: "Continue with Recommended" })
    .click();
  await page1.getByRole("link", { name: "Cypress tutorials" }).click();
  await page1.close(); //Closing the popup window
  await expect(page.getByRole("button", { name: "New Window" })).toBeVisible();
});
