import { test, expect } from "@playwright/test";
import exp from "constants";

test("Text Assertion", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/status_codes");
  //Assertion aka expactations in Playwright
  await expect(page.locator("[id='content'] ul li a").nth(0)).toHaveText("200");
});

test("Text Contains Assertion", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/status_codes");
  //Assertion aka expactations in Playwright
  await expect(page.locator("[id='content'] ul li a").nth(0)).toContainText(
    "200"
  );
});

test("Boolean assertions", async ({ page }) => {
  await page.goto(
    "http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  const firstCheckBox = await page.getByRole("radio").first();
  await firstCheckBox.check();
  await expect(firstCheckBox).toBeChecked();
});

test("Assert count of elements in a list", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  await expect(page.locator("[id='content'] ul li a")).toHaveCount(44);
});

test("Boolean assertions - Wrong Practice", async ({ page }) => {
  await page.goto(
    "http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  const firstCheckBox = await page.getByRole("radio").first();
  await expect(firstCheckBox).toBeVisible();
});

test("Assertions for Element interaction", async ({ page }) => {
  await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html");
  await expect(page.getByPlaceholder("First Name")).toBeEditable();
  await expect(page.getByPlaceholder("Last Name")).toBeEnabled();
  //   await expect(page.getByPlaceholder("Last Name")).toBeDisabled();
  const emailInput = await page.getByPlaceholder("Email Address");
  emailInput.fill("Random Street"); //Filled
  emailInput.clear(); // Clear the input
  await expect(emailInput).toBeEmpty();
  //   await page.getByPlaceholder("Comments").fill("PW is awesome");
  //   await page.locator("[value='SUBMIT']").click();
});

test("Check the value of an element", async ({ page }) => {
  await page.goto(
    "http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  const dd1 = await page.locator("#dropdowm-menu-1");
  dd1.selectOption({ label: "Python" });
  await expect(dd1).toHaveValue("Python"); //Element should have 'value' attribute
});

test("Check the value of an element and also check for negation", async ({
  page,
}) => {
  await page.goto(
    "http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  const dd1 = await page.locator("#dropdowm-menu-1");
  dd1.selectOption({ label: "Python" });
  await expect(dd1).toHaveValue("python"); //Element should have 'value' attribute
  await expect(dd1).not.toHaveValue("Java"); //Negating the assertion usint 'not'
});

test("Set assertion timeout for the matcher", async ({ page }) => {
  await page.goto(
    "http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  const dd1 = await page.locator("#dropdowm-menu-1");
  dd1.selectOption({ label: "Python" });
  await expect(dd1).toHaveValue("python", { timeout: 10000 }); //Element should have 'value' attribute
  await expect(dd1).not.toHaveValue("Java", { timeout: 15000 }); //Negating the assertion usint 'not'
});

test("Set custom assertion timeout expect", async ({ page }) => {
  //Default expect method is hard assert.
  const customExpect = expect.configure({
    timeout: 10000,
    message: "Global Expect Failure Message for All expectactions in this test",
    //soft: true, Uncomment to configure soft assertions for all expactations in this test
  });
  await page.goto(
    "http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  const dd1 = await page.locator("#dropdowm-menu-1");
  dd1.selectOption({ label: "Python" });

  await customExpect(dd1, {
    message: "Local Expect Failure message on matcher level",
  }).toHaveValue("wrong-python"); //Element should have 'value' attribute

  await customExpect(dd1).not.toHaveValue("not-java"); //Negating the assertion usint 'not'

  //Declare which assertion is soft on expactation level
  await expect.soft(dd1).toHaveValue("Java");
  //We are checking that there should NOT be any soft assertion failures
  //We can use below expectaion(no await needed) usually at the end of all the assertions.
  expect(test.info().errors, { message: "Soft Assert Failed" }).toHaveLength(0);
});
