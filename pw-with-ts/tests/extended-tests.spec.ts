import path from "path";
import {
  uploadTest,
  overriddenTest,
  workerExample,
  testScopeExample,
  autoTest,
} from "./support/my-test";

//Here we created a new test fixture - uploadDownloadPage
uploadTest(
  "Our own upload test",
  {
    tag: "@custom-test",
    annotation: {
      type: "ExtendedTest",
      description: "Our first extended test",
    },
  },
  async ({ uploadDownloadPage }) => {
    await uploadDownloadPage.uploadFile("[name = 'filename']", "sample.txt");
  }
);

uploadTest(
  "Our own upload test - 2 ",
  {
    tag: "@custom-test",
    annotation: {
      type: "ExtendedTest",
      description: "Our first extended test",
    },
  },
  async ({ uploadDownloadPage }) => {
    await uploadDownloadPage.uploadFile("[name = 'filename']", "sample.txt");
  }
);

//Here is an example of overriding an existing page fixture
// overriddenTest("Overriden Test", async ({ page }) => {
//   await page
//     .locator("[name = 'filename']")
//     .setInputFiles(path.join(__dirname, "test-data/sample.txt"));
// });

//Worked scoped fixture
workerExample("It is a worker scoped test", async ({ personId }) => {
  console.log(personId);
});

// workerExample("It is a worker scoped test 2", async ({ personId }) => {
//   console.log(personId);
// });

// workerExample("It is a worker scoped test 3", async ({ personId }) => {
//   console.log(personId);
// });

// // //Test Scoped fixture
testScopeExample("This is a test scoped fixture 1", async ({ personId }) => {
  console.log(personId);
});

// testScopeExample("This is a test scoped fixture 2", async ({ personId }) => {
//   console.log(personId);
// });

// testScopeExample("This is a test scoped fixture 3", async ({ personId }) => {
//   console.log(personId);
// });

// testScopeExample("This is a test scoped fixture 4", async ({ personId }) => {
//   console.log(personId);
// });

// autoTest("Automatic Fixture", async ({ page }) => {
//   await page.goto("https://www.google.com");
//   console.log("Inside test")
// });
