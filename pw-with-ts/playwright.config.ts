import { defineConfig, devices } from "@playwright/test";
import type { MyTestOptions } from "./tests/support/my-test";
import dotenv from "dotenv";
import path from "path";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

//We are loading our ENV file
dotenv.config({ path: path.resolve(__dirname, "envDataProp.env") });
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig<MyTestOptions>({
  // globalSetup: require.resolve(
  //   path.join(__dirname, "tests/support/global-setup.ts")
  // ),
  // globalTeardown: require.resolve(
  //   path.join(__dirname, "tests/support/global-teardown.ts")
  // ),
  timeout: 10000,
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 2,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["list"],
    ["html"],
    [
      "monocart-reporter",
      {
        name: "Sample Report",
        outputFile: "./test-results/report.html",
      },
    ],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    //http creds for all the tests
    // httpCredentials: {
    //   username: "admin",
    //   password: "admin",
    // },
    /* Base URL to use in actions like `await page.goto('/')`. */
    //  baseURL: "https://www.google.com",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on",
    screenshot: "only-on-failure",
    video: "on",
  },

  /* Configure projects for major browsers */
  projects: [
    { name: "setup", testMatch: /global\.setup\.ts/, teardown: "teardown" },

    { name: "teardown", testMatch: /global\.teardown\.ts/ },
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        locale: "en-US",
        // paramOne: "Chrome param one",
        // paramTwo: 100,
        storageState: "playwright/.auth/user.json",
      },
      // dependencies: ["setup"],
    },

    // {
    //   name: "firefox",
    //   use: {
    //     ...devices["Desktop Firefox"],
    //     // paramOne: "FF param one",
    //     // paramTwo: 500,
    //   },
    // },

    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: "Mobile Chrome",
    //   use: { ...devices["Pixel 7"] },
    // },
    // {
    //   name: "Mobile Safari",
    //   use: { ...devices["iPhone 14 Pro Max"] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
