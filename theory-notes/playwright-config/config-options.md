# Configuration Options for Playwright

***

## Table of Contents

- [Browsers](#browsers)
- [Retry and Workers](#retry-and-workers)
- [Reporters](#reporters)
  - [Multiple reporters](#multiple-reporters)
  - [Enable trace, screenshot, and video recording](#enable-trace-screenshot-and-video-recording)
- [HTTP Credentials for auto login in the browser(Authentication popup)](#http-credentials-for-auto-login-in-the-browserauthentication-popup)
- [Configure Test ID Attribute](#configure-test-id-attribute)

## Browsers

***

- Ideally we should configure the browser to use in the configuration file. Playwright config file has a projects
  section where we can define browsers. Example:

```typescript
projects: [
    {
        name: "chromium",
        use: {
            ...devices["Desktop Chrome"],
        },
    },

    {
        name: "firefox",
        use: {
            ...devices["Desktop Firefox"],
        },
    },

    {
        name: "webkit",
        use: {
            ...devices["Desktop Safari"],
        },
    },
]
```

## Retry and Workers

***
Playwright supports retry and workers configuration options. We can specify the number of retries and workers to use
when running tests. In the configuration file, we can define these options under the projects section. Example:

```typescript
export default defineConfig({
    retries: process.env.CI ? 2 : 1,// 2 retries for CI, 1 retry for local
    workers: process.env.CI ? 1 : 2, // 1 worker for CI, 2 workers for local
    // ... other configurations
})

```

## Reporters

***
We can define multiple test reporters in the configuration file. Playwright supports multiple reporters, including list,
dot, json, and junit. We can define reporters in the configuration file under the projects section.

> Read more about reporters [here](https://playwright.dev/docs/test-reporters)

### Multiple reporters

```typescript

export default defineConfig({
    // ... other configurations
    reporter: [
        ["html"],
        ["list"],
        [
            "monocart-reporter",
            {
                name: "Monocart Report",
                outputFile: "./test-results/monocart-report.html",
            },
        ]
    ]
});
```

### Enable trace, screenshot, and video recording

Playwright supports trace, screenshot, and video recording. We can enable these features in the configuration file. We
can define these options under the projects section. These are defined in use options. Example:

```typescript

export default defineConfig({
    // ... other configurations
    reporter: ["html"],
    use: {
        baseURL: "https://playwright.dev/",
        trace: "on-first-retry",// trace on first retry. Other options: 'off' | 'on' | 'retain-on-failure'  | 'on-all-retries' | 'retain-on-first-failure';
        screenshot: "only-on-failure",// screenshot only on failure. Other options: 'off' | 'on' |
        video: "on-first-retry",// video on first retry. Other options: 'off' | 'on' | 'retain-on-failure' | 'on-first-retry'
    }
});

```

## HTTP Credentials for auto login in the browser(Authentication popup)

***
Playwright supports HTTP credentials for auto login in the browser. We can define HTTP credentials in the configuration.
Playwright will use these credentials to auto login in the browser when an authentication popup appears.
We can define these options under the test use options. Example:

```typescript

export default defineConfig({
    // ... other configurations
    reporter: ["html"],
    use: {
        baseURL: "https://playwright.dev/",
        httpCredentials: {
            username: "test",
            password: "test"
        }
    }
});

```

## Configure Test ID Attribute

By default, `page.getByTestId()` will locate elements based on the `data-testid` attribute, but you can configure it in your
test config or by calling `selectors.setTestIdAttribute()`.
Example:

```typescript
import {defineConfig} from '@playwright/test';

export default defineConfig({
    use: {
        testIdAttribute: 'automation-id'
    }
});

```

Now, page.getByTestId() will locate elements based on the `automation-id` attribute.

***
