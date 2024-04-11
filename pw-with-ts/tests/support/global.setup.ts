import { test } from "playwright/test";

//Location for storing user state
const authFile = "playwright/.auth/user.json";

//Create a new folder playwright/.auth
//Define the storage stage path in config file for the project in test use options
//Login the user and save the storage state in above file
//Add this folder in .gitignore -- It must not be pushed to remote.

test("Global setup", async ({ page }) => {
  console.log("This is global setup method");

  await page.goto("https://bookcart.azurewebsites.net/login");
  //For test purpose only. These creds should be in env vars or auth file.
  await page.getByText("Username", { exact: true }).fill("admin");
  await page.getByText("Password", { exact: true }).fill("admin");
  await page
    .locator("mat-card-actions")
    .getByText("Login", { exact: true })
    .click();

  await page.waitForURL("https://bookcart.azurewebsites.net/");

  //Add More validations here to make sure user is logged-in

  //The user is logged in. Save this session data to the file
  await page.context().storageState({ path: authFile });
});
