import test, { expect } from "@playwright/test";

//We want to define test use options on spec file level
//We want all the tests of this file to capture videos while
//the other tests will have video setting off.

test.use({ video: "on-first-retry", locale: "en-US" });

//This use option can also be used with groups(test.describe)

test("Text input with custom use options", async ({ page }) => {
  await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html");
  await page.getByPlaceholder("First Name").fill("Test First Name");
  await page.getByPlaceholder("Last Name").fill("Test Last Name");
  await page.getByPlaceholder("Email Address").fill("Random Street");
  await page.getByPlaceholder("Comments").fill("PW is awesome");
  await page.locator("[value='SUBMIT']").click();
});

test.describe(
  "Group of checkbox tests which can run in serial with custom test use options",
  {
    tag: "@checkbox @useoptions",
    annotation: {
      type: "Checkboxes",
      description: "These tests check or uncheck a checkbox",
    },
  },
  () => {
    //Define sequential/serial mode for tests inside this group(non-parallel).
    test.describe.configure({ mode: "serial" });

    //Setting a custom view port only for this test group
    test.use({ viewport: { height: 407, width: 400 } });

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

    //Test steps example
    test("Click a checkbox using label", async ({ page }) => {
      await test.step("Open Home Page", async () => {
        await page.goto(
          "http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
        );
      });

      await test.step("Check Option 2", async () => {
        const checkedElement = await page.getByLabel("Option 2");
        await checkedElement.check();

        //This is a nested step
        await test.step("Validate that checkbox is checked", async () => {
          await expect(checkedElement).toBeChecked();
        });
      });
    });
  }
);
