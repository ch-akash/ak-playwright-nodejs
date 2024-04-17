import { test, expect } from "@playwright/test";
import path from "path";

test(
  "Assertion with tags and annotations",
  {
    tag: "@StatusCode",
    annotation: {
      type: "Validation",
      description: "We are asserting statud code text to be 200",
    },
  },
  async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/status_codes");
    expect(await page.locator("[id='content'] ul li a").nth(0)).toHaveText(
      "200"
    );
  }
);

test(
  "Assertion with tags and multiple annotations",
  {
    tag: "@StatusCode",
    annotation: [
      {
        type: "First Annotation",
        description: "This is a first annotation for this test",
      },
      {
        type: "Second Annotation",
        description: "This is a second annotation for this test",
      },
    ],
  },
  async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/status_codes");
    expect(await page.locator("[id='content'] ul li a").nth(0)).toHaveText(
      "200"
    );
  }
);

test(
  "TestInfo and add annotations on runtime",
  {
    tag: "@StatusCode",
  },
  async ({ page }, testInfo) => {
    await page.goto("https://the-internet.herokuapp.com/status_codes");
    expect(await page.locator("[id='content'] ul li a").nth(0)).toHaveText(
      "200"
    );

    //Avaliable methods or properties
    // testInfo.fixme(); -- Mark this test 'FIXME'
    testInfo.annotations.push({
      type: "RuntimeAnnotation",
      description: "This is a runtime annotation set inside test",
    });

    testInfo.attach("custom-screenshot", {
      body: await page.screenshot(),
      contentType: "image/png",
    });
  }
);

test(
  "Attach Downloaded File with HTML Report",
  { tag: "@download" },
  async ({ page }, testInfo) => {
    await page.goto("https://the-internet.herokuapp.com/download");
    //Step 1 - Wait for event "download"
    const downloadPromise = page.waitForEvent("download");

    //Step 2 - Locate the file/element which initiates download
    await page.getByText("some-file.txt").click();

    //Step 3 Wait for the download promise to resolve
    const downloadedFile = await downloadPromise;

    //Step 4 - Copy this file to a locatation/path
    await downloadedFile.saveAs(
      path.join(__dirname, "test-data/") + downloadedFile.suggestedFilename()
    );

    console.log(await downloadedFile.path()); //Actual path of the file

    testInfo.annotations.push({
      type: "FileDownload",
      description: "We have attached downloaded file with HTML report",
    });

    testInfo.attach("downloaded-file", { path: await downloadedFile.path() });
  }
  
);