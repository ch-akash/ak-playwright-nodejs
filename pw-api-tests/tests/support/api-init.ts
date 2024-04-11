import { test as baseTest } from "@playwright/test";
import { BaseApi } from "../../apis/base-api";

export const test = baseTest.extend<{ baseApi: BaseApi }>({
  baseApi: async ({ request }, use) => {
    console.log("Initialising API class objects");
    await use(new BaseApi(request));
  },
});
