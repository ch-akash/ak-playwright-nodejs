import { Locator, Page } from "@playwright/test";
import { sprintf } from "sprintf-js";

export class ProductPage {
  private page: Page;
  private addToCartButtonLocator: string =
    "[data-test='add-to-cart-sauce-labs-%s']";
  private removeFromCartLocator: string = "[data-test='remove-sauce-labs-%s']";
  private shoppingCartLocator: Locator;
  private backToProductsLocator: Locator;
  private productSortingContainerLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCartLocator = page.locator("[data-test='shopping-cart-link']");
    this.backToProductsLocator = page.locator("[data-test='back-to-products']");
    this.productSortingContainerLocator = page.locator(
      "[data-test='product-sort-container']"
    );
  }

  async addToCart(productSuffix: string) {
    const addToCartLocatorString = sprintf(
      this.addToCartButtonLocator,
      productSuffix
    );
    await this.page.locator(addToCartLocatorString).click();
  }

  async removeFromCart(productSuffix: string) {
    const removeFromCartLocatorString = sprintf(
      this.removeFromCartLocator,
      productSuffix
    );
    await this.page.locator(removeFromCartLocatorString).click();
  }

  async clickShoppingCart() {
    await this.shoppingCartLocator.click();
  }

  async clickProductTitle(title: string) {
    await this.page.getByText(title, { exact: true }).click();
  }

  async clickBackToProducts() {
    await this.backToProductsLocator.click();
  }
  async clickProductSortingFilter(option: string) {
    await this.productSortingContainerLocator.selectOption(option);
  }
}
