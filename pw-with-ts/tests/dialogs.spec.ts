import { test } from "@playwright/test";
import { LoginPage } from "../pages/login-page";

test("Handle Dialogs", async ({ page }) => {
  //Default behaviour is to auto-dismiss the dialog
  await page.goto("https://webdriveruniversity.com/Popup-Alerts/index.html");

  //Accept the dialogs, set the handler before the dialog initiating element
  //is clicked.
  page.on("dialog", (dialog) => dialog.accept());
  //Dialog one
  await page.locator("#button1").getByText("CLICK ME!").click();

  await page.locator("#button2").getByText("CLICK ME!").click();
  await page.getByRole("button", { name: "Close" }).click();

  //Second dialog will be accepted(clicked option OK)
  await page.locator("#button4").getByText("CLICK ME!").click();
});

test("login", async ({ page }) => {
  await page.goto("https://www.bstackdemo.com/signin?offers=true");
  const loginPage = new LoginPage(page);
  await loginPage.login("demo", "demo");
});
