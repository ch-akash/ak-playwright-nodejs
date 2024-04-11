import { test } from "playwright/test";

test("Global teardown", async ({ page }) => {
  console.log("This is global teardown method");
});
