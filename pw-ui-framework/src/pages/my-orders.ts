import { Locator, Page } from "@playwright/test";

export class MyOrders {
  private ordersTableLocaor: Locator;

  constructor(page: Page) {
    this.ordersTableLocaor = page.getByRole("table");
  }

  async getLatestOrderRowFromAllOrders() {
    return await this.ordersTableLocaor.getByRole("cell").first();
  }
}
