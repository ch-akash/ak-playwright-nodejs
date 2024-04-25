import { test } from "playwright/test";

test("Fetch login token from login API response while user is logged in from UI", async ({
  page,
}) => {
  await page.goto("https://bookcart.azurewebsites.net/login");
  await page.getByText("Username", { exact: true }).fill("admin");
  await page.getByText("Password", { exact: true }).fill("admin");

  //No need for await
  const responsePromise = page.waitForResponse("*/**/api/login");
  await page
    .locator("mat-card-actions")
    .getByText("Login", { exact: true })
    .click();

  const responseText = (await responsePromise).text();

  console.log(await responseText);
});
