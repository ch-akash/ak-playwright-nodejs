import { test } from "playwright/test";
import { paramTest } from "./support/my-test";

const nameOfPerson = "Joe";

test(`This test takes one param in title which is a name: ${nameOfPerson}`, async ({
  page,
}) => {
  await page.goto("https://www.google.com");
});

paramTest(
  "This is project based param test",
  async ({ page, paramOne, paramTwo }) => {
    console.log(paramOne);
    console.log(paramTwo);
  }
);
