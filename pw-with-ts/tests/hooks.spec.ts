import { expect, test } from "@playwright/test";

test.beforeAll("This is a before all", async () => {
  console.log("In before all");
});

test.afterAll("This is an after all", async () => {
  console.log("In after all");
});

test.beforeEach("This is a before each", async () => {
  console.log("In before each test");
});

test.afterEach("This is an after each", async () => {
  console.log("In after each test");
});

test("Click a checkbox from a list", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/checkboxes");
  const checkBoxToBeChecked = await page.getByRole("checkbox").first();
  await checkBoxToBeChecked.check();
  expect(checkBoxToBeChecked).toBeChecked();
});

test.describe(
  "Group of checkbox tests",
  {
    tag: "@checkbox",
    annotation: {
      type: "Checkboxes",
      description: "These tests check or uncheck a checkbox",
    },
  },
  () => {
    //This is a hook inside group
    // test.beforeEach("This is a before each inside group", async () => {
    //   console.log("In before each test");
    // });

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
  }
);

test.describe(
  "Group of checkbox tests which can run in serial",
  {
    tag: "@checkbox",
    annotation: {
      type: "Checkboxes",
      description: "These tests check or uncheck a checkbox",
    },
  },
  () => {
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
  }
);
