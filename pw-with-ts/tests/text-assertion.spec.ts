import test, { expect } from "@playwright/test";

test("Assert text of nth element from a list", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/status_codes");
  const statusCode200 = await page.locator("[id='content'] ul li a").nth(0);

  console.log(await statusCode200.textContent());

  //Assertion aka expactations in Playwright
  expect(statusCode200).toHaveText("200");
});

//Loop a list of elements and print the text
test("Log text of all the elements from a list", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/status_codes");
  const statusCodeElements = await page.locator("[id='content'] ul li a").all();

  for (const statusElement of statusCodeElements) {
    const elementText = await statusElement.textContent();

    console.log(elementText);

    if (elementText == "200") {
      console.log("One Element with status code 200 found");
    }
    // //Assertion aka expactations in Playwright
    // expect(statusCode200).toHaveText("200");
  }
});

test("Filter element based on text from the list of elements", async ({
  page,
}) => {
  await page.goto("https://the-internet.herokuapp.com/status_codes");
  const statusCodeElements = await page
    .getByRole("listitem")
    .filter({ hasText: "200" })
    .click();

  await page.goto("https://the-internet.herokuapp.com");
  await page
    .getByRole("listitem")
    .filter({ hasText: "Dynamic" })
    .filter({ hasText: "Controls" })
    .click();
});

test("Assert the size of a list", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  //Expect the list to have a size
  expect(await page.getByRole("listitem")).toHaveCount(44);
  await page
    .getByRole("listitem")
    .filter({ hasText: "Dynamic" })
    .filter({ hasText: "Controls" })
    .click();
});
