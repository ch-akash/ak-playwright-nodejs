import { test as baseTest, expect } from "playwright/test";
import { BasePage } from "../../src/pages/base-page";

const authFile = "playwright/.auth/user.json";

//Non logged in test
export const test = baseTest.extend<{ basePage: BasePage }>({
  basePage: async ({ page }, use) => {
    console.log("Initialising BasePage");
    await use(new BasePage(page));
  },
});

//This fixture can be used if test requires user to be logged in
export const loggedInTest = baseTest.extend<{ basePage: BasePage }>({
  basePage: async ({ page }, use) => {
    console.log("Initialising BasePage");
    const basePage = new BasePage(page);
    console.log("Preparing storage state for test user");
    await page.goto("/login");
    const username: any = process.env.BOOK_STORE_USERNAME;
    const password: any = process.env.BOOK_STORE_PASSWORD;
    await basePage.loginPage.login(username, password);
    await expect(await basePage.searchPage.getHeaderLocator()).toContainText(
      username
    );

    //The user is logged in. Save this session data to the file
    await page.context().storageState({ path: authFile });

    await use(new BasePage(page));
  },
});
