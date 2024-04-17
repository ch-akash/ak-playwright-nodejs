# Playwright Browsers, Contexts, and Pages

***

Prefer configuration file for defining browsers in one place and using them across tests.
The lifecycle of a browser is then managed by Playwright automatically.

## Launch Browsers with Playwright - On-demand

***
Playwright supports multiple browsers, including Chromium, Firefox, and WebKit. You can specify which browser to use
when launching a browser context.

- This is how we can launch a browser context inside an async function for a specific browser:

```typescript
const {chromium} = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://playwright.dev/');
    await browser.close();
});
```

The above code launches a Chromium browser, creates a new context, and opens a new page to the Playwright website.
Firefox and WebKit browsers can be launched similarly by replacing `chromium` with `firefox` and `webkit`, respectively.

***
