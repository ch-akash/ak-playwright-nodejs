# Integrate Lighthouse with Playwright

![Lighthouse](https://developer.chrome.com/static/docs/lighthouse/overview/image/lighthouse-logo-3c45f51ca8cfc.svg)

***

## Introduction

***

[Lighthouse](https://developers.google.com/web/tools/lighthouse) is an open-source, automated tool for improving the quality of web pages. It has audits for performance, accessibility, progressive web apps, SEO and more.

We can integrate Lighthouse with Playwright to automate the process of running Lighthouse audits on web pages.

## Installation

***

We will use [playwright-lightouse](https://github.com/abhinaba-ghosh/playwright-lighthouse#readme) NPM package(developed by [Abhinaba Ghosh](https://github.com/abhinaba-ghosh)) to integrate Lighthouse with Playwright.

```bash
npm install --save-dev playwright-lighthouse

```

Now we need to install Lighthouse package as well.

```bash
npm install lighthouse

```

## Usage

***

Let's see how we can use Playwright with Lighthouse to run audits on a web page.

We will launch Chromium programmatically on port 9222 and then run Lighthouse audits on the page.

> *Note: The audits can be done on Chrome only.*

```typescript

import { chromium, test } from "@playwright/test";
import config from "lighthouse/core/config/desktop-config.js";
import { playAudit } from "playwright-lighthouse";

test("LH Audit Test", async ({ browserName }) => {
  test.skip(browserName !== "chromium", "LH Audit is only supported on Chromium");
  const page = await (
    await chromium.launch({
      args: ["--remote-debugging-port=9222"],
    })
  ).newPage();

  //Open the page you need to audit. 
  await page.goto("/");
  
  //Setting threshold 70 for all metrices
  await playAudit({
    page: page,
    thresholds: {
      performance: 70,
      accessibility: 70,
      "best-practices": 70,
      seo: 70,
      pwa: 70,
    },
    port: 9222,
    config: config,
  });
  
  //Close the manually launched page after audit is done.
  page.close();
});

```

## Audit Reports

***
We can pass the `reports` object to `playAudit` function to get the Lighthouse audit report in the console.

```typescript

await playAudit({
    page: page,
    thresholds: {
      performance: 70,
      accessibility: 70,
      "best-practices": 70,
      seo: 70,
      pwa: 70,
    },
    port: 9222,
    config: config,
   reports: {
    formats: {
      json: true, 
      html: true, 
    },
  },
  });

```

### Default report name and Directory

***

By default,

- The report will be saved in the `lighthouse` directory at the root of the project.
- The report name will be `lighthouse-${new Date().getTime()}`.

> *Note: We will use the dafault report name and directory in the project.*

If you want to change the default report name and directory, you can pass the `reports` object to `playAudit` function with the desired report name and directory.

```typescript

await playAudit({
    page: page,
    thresholds: {
      performance: 70,
      accessibility: 70,
      "best-practices": 70,
      seo: 70,
      pwa: 70,
    },
    port: 9222,
    config: config,
   reports: {
    formats: {
      json: true, 
      html: true, 
    },
    name: "my-report",
    directory: "my-directory",
  },
  });

```

***

## Conclusion

***

We have successfully integrated Ljsonighthouse with Playwright to automate the process of running Lighthouse audits on web pages.

We can use the audit reports to improve the quality of web pages and make them more performant, accessible, and SEO-friendly.

## References

***

- [Google Lighthouse Overview](https://developers.google.com/web/tools/lighthouse)
- [Lighthouse Performance Scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring)

- [Playwright Lighthouse for Authenticated Pages](https://www.npmjs.com/package/playwright-lighthouse#running-lighthouse-on-authenticated-routes)
- [Playwright Lighthouse Example with Fixtures](https://www.npmjs.com/package/playwright-lighthouse#usage-with-playwright-test-runner)
- [Playwright Lighthouse Report Options](https://www.npmjs.com/package/playwright-lighthouse#generating-lighthouse-reports-on-lambdatest)

***
