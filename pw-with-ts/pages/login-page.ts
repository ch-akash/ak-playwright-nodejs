import { Locator, Page } from "playwright/test";

export class LoginPage {
  private page: Page;

  //   private usernameLocatorStr: string = "[data-test='username']";
  private usernameLocator: Locator;
  private passwordLocator: Locator;
  private loginSubmitButtonLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.passwordLocator = page.locator("[data-test='password']");
    this.usernameLocator = page.locator("[data-test='username']");
    this.loginSubmitButtonLocator = page.locator("[data-test='login-button']");
  }

  async login(username: string, password: string) {
    await this.usernameLocator.fill(username);
    await this.passwordLocator.fill(password);
    await this.loginSubmitButtonLocator.click();
  }
}
