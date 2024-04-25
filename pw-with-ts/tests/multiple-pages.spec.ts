import { test } from "playwright/test";

test("Multiple tabs/pages - Switch Tabs", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/windows");

  //We need browser context so that we can switch to new tab/page.
  // Waiting for event page.
  const tabPromise = page.context().waitForEvent("page");
  await page.getByText("Click Here").click();

  //Wait for tabPromise to resolve or wait for tab to launch.
  const newPage = await tabPromise;
  console.log(await newPage.getByRole("heading").textContent());
});
