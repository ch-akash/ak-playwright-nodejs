import { Locator, Page } from "@playwright/test";
export class CartPage {
  private checkoutButtonLocator: Locator;
  private placeOrderButtonLocator: Locator;
  private placeOrderdButtonLocator: Locator;
  private inputNameLocator: Locator;
  private inputAddressLineOneLocator: Locator;
  private inputAddressLineTwoLocator: Locator;
  private inputPincodeLocator: Locator;
  private inputStateLocator: Locator;

  constructor(page: Page) {
    this.checkoutButtonLocator = page.getByRole("button", { name: "CheckOut" });
    this.placeOrderButtonLocator = page.getByRole("button", {
      name: "Place Order",
    });
    this.inputNameLocator = page.getByPlaceholder("Name");
    this.inputAddressLineOneLocator = page.getByPlaceholder("Address Line 1");
    this.inputAddressLineTwoLocator = page.getByPlaceholder("Address Line 2");
    this.inputPincodeLocator = page.getByPlaceholder("Pincode");
    this.inputStateLocator = page.getByPlaceholder("State");
  }

  async clickCheckout() {
    await this.checkoutButtonLocator.click();
  }

  async confirmOrder() {
    await this.placeOrderButtonLocator.click();
  }

  async fillAddressForm(
    name: string,
    addressLineOne: string,
    addressLineTwo: string,
    state: string,
    pincode: string
  ) {
    await this.inputNameLocator.fill(name);
    await this.inputAddressLineOneLocator.fill(addressLineOne);
    await this.inputAddressLineTwoLocator.fill(addressLineTwo);
    await this.inputPincodeLocator.fill(pincode);
    await this.inputStateLocator.fill(state);
  }
}
