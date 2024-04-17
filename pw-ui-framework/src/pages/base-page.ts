import { Page } from "@playwright/test";
import { SearchResultsPage } from "./srp-page";
import { LoginPage } from "./login-page";
import { CartPage } from "./cart-page";

export class BasePage {
  readonly searchPage: SearchResultsPage;
  readonly loginPage: LoginPage;
  readonly cartPage: CartPage;
  readonly page: Page;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
    this.searchPage = new SearchResultsPage(page);
    this.cartPage = new CartPage(page);
    this.page = page;
  }

  //We do not need any helper methods such as wait, scroll or find elements etc.
  //in base page. This is only used for initialising the child pages.
}
