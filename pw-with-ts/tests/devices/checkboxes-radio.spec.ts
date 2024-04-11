import { expect, test } from "@playwright/test";
import {
  AnnotationDescription,
  AnnotationsType,
} from "../../annotations/annotations";

test(
  "Click a checkbox from a list [Device]",

  {
    tag: "@device",
    annotation: {
      type: AnnotationsType.DEVICE,
      description: AnnotationDescription.DEVICE,
    },
  },
  async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/checkboxes");
    const checkBoxToBeChecked = await page.getByRole("checkbox").first();
    await checkBoxToBeChecked.check();
    expect(checkBoxToBeChecked).toBeChecked();
  }
);

test(
  "Check a checkbox from a list and uncheck it [Device]",
  {
    tag: "@device",
    annotation: {
      type: AnnotationsType.DEVICE,
      description: AnnotationDescription.DEVICE,
    },
  },
  async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/checkboxes");
    const checkBoxToBeChecked = await page.getByRole("checkbox").first();
    await checkBoxToBeChecked.check();
    expect(checkBoxToBeChecked).toBeChecked();
    await checkBoxToBeChecked.uncheck(); //Unchecking the checkbox
    expect(checkBoxToBeChecked).not.toBeChecked();
  }
);
