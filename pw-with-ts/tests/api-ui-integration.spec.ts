import { expect, test } from "playwright/test";

test("Create user by API Call and consume it on UI", async ({ page }) => {
  const jsonPayload = {
    firstname: "automationUser",
    lastname: "test",
    username: "autotest123",
    password: "Autotest0123",
    confirmPassword: "Autotest0123",
    gender: "Male",
  };

  //Use request attached with the current page fixture
  const createUserResponse = await page.request.post(
    "https://bookcart.azurewebsites.net/api/user/",
    {
      data: jsonPayload,
    }
  );

  expect(createUserResponse).toBeOK();

  await page.goto("https://bookcart.azurewebsites.net/login");
  await page.getByText("Username", { exact: true }).fill(jsonPayload.username);
  await page.getByText("Password", { exact: true }).fill(jsonPayload.password);
  await page
    .locator("mat-card-actions")
    .getByText("Login", { exact: true })
    .click();
});
