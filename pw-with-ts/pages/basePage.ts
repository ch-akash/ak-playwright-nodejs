import { Page } from "@playwright/test";
import { ProductPage } from "./productsPage";
import { LoginPage } from "./loginPage";

export class BasePage {
  readonly productPage: ProductPage;
  readonly loginPage: LoginPage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
    this.productPage = new ProductPage(page);
  }

  //We do not need any helper methods such as wait,scroll or find elements etc.
  //in base page. This is only used for initialising the child pages
}
