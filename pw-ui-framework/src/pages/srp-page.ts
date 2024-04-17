import { Locator, Page } from "@playwright/test";
import { sprintf } from "sprintf-js";

export class SearchResultsPage {
  private page: Page;
  private shoppingCartLocator: Locator;
  private categoryListLocator: Locator;
  private bookCardContentLocator: Locator;
  private appHomeLocator: Locator;
  private toolbarHeaderLocator: Locator;
  private addedToCartMessageLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCartLocator = page
      .locator("button")
      .filter({ hasText: "shopping_cart1" });

    this.categoryListLocator = page.locator("mat-list-item");
    this.bookCardContentLocator = page.locator("mat-card-content");
    this.appHomeLocator = page.locator("app-home");
    this.toolbarHeaderLocator = page.locator("mat-toolbar-row");
    this.addedToCartMessageLocator = page.getByText("One Item added to cart");
  }

  async getHeaderLocator() {
    return this.toolbarHeaderLocator;
  }

  async selectBookCategory(categoryName: string) {
    return await this.categoryListLocator
      .filter({ hasText: categoryName })
      .click();
  }

  async addBookToCartByName(bookName: string) {
    return await this.bookCardContentLocator
      .filter({ hasText: bookName })
      .getByRole("button", { name: "Add to Cart" })
      .click();
  }

  async getAllBookCategories() {
    return this.categoryListLocator;
  }

  async clickShoppingCart() {
    await this.shoppingCartLocator.click();
  }

  async clickProductTitle(title: string) {
    await this.page.getByText(title, { exact: true }).click();
  }

  async filterBookByName(bookName: string) {
    return this.appHomeLocator.filter({ hasText: bookName });
  }

  async getAddBookToCartSuccessMessageLocator() {
    return this.addedToCartMessageLocator;
  }
}
