import { test } from "playwright/test";

//Define http creds on spec file level
test.use({
  httpCredentials: {
    username: "admin",
    password: "admin",
  },
});

test("HTTP Creds with auth pop-up", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  await page.getByText("Basic Auth").click();
});
