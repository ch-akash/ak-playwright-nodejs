import { loggedInTest } from "../fixtures/fixtures";
import { TestTags } from "../../src/constants/test-tags";
import {
  AnnotationDescription,
  AnnotationsType,
} from "../../src/constants/annotations";
import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/en";
import { fa } from "@faker-js/faker";

loggedInTest(
  "Place an order for any random book from SRP",
  {
    tag: [TestTags.E2E, TestTags.ORDER_FLOW],
    annotation: {
      type: AnnotationsType.LOGGED_IN,
      description: AnnotationDescription.LOGGED_IN,
    },
  },
  async ({ basePage }) => {
    //book names: A Princess in Theory and Roomies
    // await expect(
    //   await basePage.searchPage.getAddBookToCartSuccessMessageLocator()
    // ).toBeVisible();

    await basePage.searchPage.clickShoppingCart();
    await basePage.cartPage.clickCheckout();

    //Using faker to create radom fake test data
    // const name = faker.person.fullName();
    // const addressLineOne = faker.location.streetAddress();
    // const addressLineTwo = faker.location.buildingNumber();
    // const state = faker.location.state();
    // const postalCode = faker.location.zipCode();
    // await basePage.cartPage.fillAddressForm(
    //   name,
    //   addressLineOne,
    //   addressLineTwo,
    //   state,
    //   postalCode
    // );
    // await basePage.cartPage.confirmOrder();
    await basePage.page.goto("https://bookcart.azurewebsites.net/myorders");

    console.log(await basePage.page.getByRole("table").getByRole("row").first().);
    // await expect(page.getByRole("table")).toContainText("880-835985");
    // await expect(page.locator("mat-card-title")).toContainText("My Orders");
    // await page.getByRole("cell", { name: "₹879.00" }).click();
    // await page.getByRole("cell", { name: "Apr 11," }).click();
    // await page.getByRole("cell", { name: "Apr 11," }).click();
    // await page.getByRole("cell", { name: "₹879.00" }).click();
  }
);

//Please add more tests from assignment here
