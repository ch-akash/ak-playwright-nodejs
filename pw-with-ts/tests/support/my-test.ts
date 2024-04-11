import { expect, test } from "@playwright/test";
import { UploadDownloadPage } from "../../pages/upload-download";
import { randomBytes } from "crypto";
import { sprintf } from "sprintf-js";

export const uploadTest = test.extend<{
  uploadDownloadPage: UploadDownloadPage;
}>({
  //Define the fixture
  uploadDownloadPage: [
    async ({ page }, use) => {
      await page.goto("https://webdriveruniversity.com/File-Upload/index.html");
      //Use this fixture
      await use(new UploadDownloadPage(page));
      console.log("Test fixture teardown");
    },
    { timeout: 10000 },
  ],
});

export const workerExample = test.extend<
  { object: unknown },
  { personId: string }
>({
  //Worker scoped fixtures are defined using a touple
  personId: [
    //on worker level we use browser instead page
    async ({ browser }, use) => {
      const page = await browser.newPage();
      await page.goto("https://webdriveruniversity.com/File-Upload/index.html");
      const randomPersonId = randomBytes(20).toString("hex");
      //Use this fixture
      await use(randomPersonId);
      console.log("Worker fixture teardown");
    },
    { scope: "worker", timeout: 10000 },
  ],
});

export const testScopeExample = test.extend<{ personId: string }>({
  //Define the fixture
  personId: async ({ browser }, use) => {
    const page = await browser.newPage();
    await page.goto("https://webdriveruniversity.com/File-Upload/index.html");
    const randomPersonId = randomBytes(20).toString("hex");
    //Use this fixture
    await use(randomPersonId);
  },
});

export const overriddenTest = test.extend<{}>({
  page: async ({ page }, use) => {
    await page.goto("https://webdriveruniversity.com/File-Upload/index.html");
    await expect(page.locator("[name = 'filename']")).toBeVisible();
    await use(page);
  },
});

export const autoTest = test.extend<{ log: void }>({
  log: [
    async ({ page }, use) => {
      console.log(`Sample log in auto fixture before use`);
      await use();
      console.log(`Sample log in auto fixture after use`);
    },
    { auto: true, timeout: 10000 },
  ],
});

//Type of these options

export type MyTestOptions = {
  paramOne: string;
  paramTwo: number;
};

export const paramTest = test.extend<MyTestOptions>({
  paramOne: ["Default Param one", { option: true }],
  paramTwo: [200, { option: true }],
  //Further Code for fixture override or initial steps
});
