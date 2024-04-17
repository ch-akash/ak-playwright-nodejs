import { test as baseTest } from "playwright/test";
import { BasePage } from "../../pages/base-page";

export const test = baseTest.extend<{ basePage: BasePage }>({
  basePage: async ({ page }, use) => {
    console.log("Initialising BasePage");
    await use(new BasePage(page));
  },
});
