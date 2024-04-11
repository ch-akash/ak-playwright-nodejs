import { test } from "./support/pom-init";

test.beforeEach(async ({ page, basePage }) => {
  await page.goto("https://www.saucedemo.com/");
  //We will use env variable for credentials. This is just for testing purpose
  await basePage.loginPage.login("standard_user", "secret_sauce");
});

// test("Login Page Object Model", async ({ page }) => {
//   await page.goto("https://www.saucedemo.com/");
//   const loginPage = new LoginPage(page);
//   await loginPage.login("standard_user", "secret_sauce");
// });

test("Product Page Object Model - Add a t-shirt into cart", async ({
  basePage,
}) => {
  await basePage.productPage.clickProductSortingFilter("za");
  await basePage.productPage.clickProductTitle("Sauce Labs Bolt T-Shirt");
  await basePage.productPage.clickBackToProducts();
  await basePage.productPage.addToCart("bolt-t-shirt");
  await basePage.productPage.clickShoppingCart();
});
