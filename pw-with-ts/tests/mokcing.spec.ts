import { test } from "playwright/test";
import { json } from "stream/consumers";

test("Mocking an API Response", async ({ page }) => {
  //You have to define a matcher for your API using page.route()

  //In this example - we will mock the /book API response
  //And only show 1 book on the page.

  //Define the mock with the route before calling page.goto("url")

  //Payload that we want to mock. Use actual structure of the API Response
  const json = [
    {
      bookId: 2,
      title: "Harry Potter with a Mock",
      author: "JKR",
      category: "Mocked",
      price: 1000.0,
      coverFileName: "9d8f4978-0ef8-42d0-873a-4eb583439237HP2.jpg",
    },
  ];
  await page.route("*/**/api/book/", async (route) => {
    //Fullfill the route's request - Set your mock
    await route.fulfill({ json });
  });

  await page.goto("https://bookcart.azurewebsites.net/login");
  await page.getByText("Username", { exact: true }).fill("admin");
  await page.getByText("Password", { exact: true }).fill("admin");
  await page
    .locator("mat-card-actions")
    .getByText("Login", { exact: true })
    .click();
});

test("Modify API Response", async ({ page }) => {
  //You have to define a matcher for your API using page.route()

  //In this example - we will mock the /book API response
  //And only show 1 book on the page.

  //Define the mock with the route before calling page.goto("url")

  //Payload that we want to mock. Use actual structure of the API Response
  const book = {
    bookId: 2,
    title: "Harry Potter with a Mock",
    author: "JKR",
    category: "Mocked",
    price: 1000.0,
    coverFileName: "9d8f4978-0ef8-42d0-873a-4eb583439237HP2.jpg",
  };
  await page.route("*/**/api/book/", async (route) => {
    //Fetch the actual response
    const response = await route.fetch();
    //Actual response json to append/push our custom new object in the list
    const json = await response.json();
    json.push(book);

    //Fullfill the route's request - Add the actual response and your data(Your data is patched.)
    await route.fulfill({ response, json });
  });

  await page.goto("https://bookcart.azurewebsites.net/login");
  await page.getByText("Username", { exact: true }).fill("admin");
  await page.getByText("Password", { exact: true }).fill("admin");
  await page
    .locator("mat-card-actions")
    .getByText("Login", { exact: true })
    .click();

  await page.waitForTimeout(10000);
});
