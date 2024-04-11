import { expect, test } from "@playwright/test";

test("Click a checkbox from a list", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/checkboxes");
  const checkBoxToBeChecked = await page.getByRole("checkbox").first();
  await checkBoxToBeChecked.check();
  expect(checkBoxToBeChecked).toBeChecked();
});

test("Check a checkbox from a list and uncheck it", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/checkboxes");
  const checkBoxToBeChecked = await page.getByRole("checkbox").first();
  await checkBoxToBeChecked.check();
  expect(checkBoxToBeChecked).toBeChecked();
  await checkBoxToBeChecked.uncheck(); //Unchecking the checkbox
  expect(checkBoxToBeChecked).not.toBeChecked();
});

test("Click a checkbox using label", async ({ page }) => {
  await page.goto(
    "http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await page.getByLabel("Option 2").check();
  //   await page.getByRole("checkbox", { name: "Option 2" }).check();
});

test("Click a radio button from a list", async ({ page }) => {
  await page.goto(
    "http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await page.getByRole("radio").first().check();
});

test("Click a radio button using CSS selector for a colour", async ({
  page,
}) => {
  await page.goto(
    "http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  const orangeRadioButton = await page.locator("input[value='orange']");
  //Not gonna check
  expect(orangeRadioButton).not.toBeChecked();
});

test("Check a radio button from a list and then uncheck it", async ({
  page,
}) => {
  await page.goto(
    "http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  const radioButtonToBeChecked = await page.getByRole("radio").first();
  await radioButtonToBeChecked.check();
  expect(radioButtonToBeChecked).toBeChecked();

  //Uncheck this button
  await radioButtonToBeChecked.uncheck(); //Unchecked the button
  expect(radioButtonToBeChecked).not.toBeChecked();
});
