import { Page } from "@playwright/test";
import path from "path";

export class UploadDownloadPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async uploadFile(locator: string, file: any) {
    await this.page
      .locator(locator)
      .setInputFiles(path.join(__dirname, "test-data/" + file));
  }
}
