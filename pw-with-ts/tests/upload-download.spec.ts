import { test } from "@playwright/test";
import path from "path";

test("Upload File", async ({ page }) => {
  await page.goto("https://webdriveruniversity.com/File-Upload/index.html");
  await page
    .locator("[name = 'filename']")
    .setInputFiles(path.join(__dirname, "test-data/sample.txt"));

  await page.locator("[id='submit-button']").click();
});

test("Download File", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/download");
  //Step 1 - Wait for event "download"
  const downloadPromise = page.waitForEvent("download");

  //Step 2 - Locate the file/element which initiates download.
  //Note - The above link might not have this exact file after sometime.
  //Please replace file name with a new one.
  await page.getByText("myfile.pdf").click();

  //Step 3 Wait for the download promise to resolve
  const downloadedFile = await downloadPromise;

  //Step 4 - Copy this file to a locatation/path
  await downloadedFile.saveAs(
    path.join(__dirname, "test-data/") + downloadedFile.suggestedFilename()
  );

  console.log(await downloadedFile.path()); //Actual path of the file
});
