Let's learn Playwright together! 🚀

# Table of Contents

- [What is Playwright?](#what-is-playwright)
- [Why Playwright?](#why-playwright)
- [How to Install Playwright?](#how-to-install-playwright)
- [How to install Node.js?](#how-to-install-nodejs)
- [How to install npm?](#how-to-install-npm)
- [How to install yarn?](#how-to-install-yarn)
- [Project Structure](#project-structure)
- [VS Code Extensions Recommended](#vs-code-extensions-recommended)
- [Essential Command Line Options](#essential-command-line-options)
- [What's Next?](#whats-next)

***

## What is Playwright?

***

Playwright is a Node.js library to automate the Chromium, WebKit, and Firefox browsers with a single API. It enables
cross-browser web automation that is ever-green, capable, reliable, and fast.

## Why Playwright?

***

- **Evergreen**: Playwright is always up-to-date, automating the latest browser versions.
- **Single API**: Playwright unifies the APIs of Chromium, WebKit, and Firefox.
- **Capabilities**: Playwright supports browser contexts, giving you full control over cookies, permissions, and
  storage.
- **Reliability**: Playwright is built to be reliable, capable of running thousands of tests in CI.
- **Speed**: Playwright is fast, enabling fast execution of tests and automation scripts.
- **Open Source**: Playwright is open-source and free to use.
- **Community**: Playwright has a growing community of contributors and users.
- **Cross-Browser**: Playwright supports Chromium, WebKit, and Firefox.
- **Cross-Platform**: Playwright supports Windows, macOS, and Linux.
- **Headless Mode**: Playwright supports headless mode for all browsers.
- **Mobile Browsers**: Playwright supports mobile browsers like WebKit on iOS and Chrome on Android.
- **Web Components**: Playwright supports shadow DOM and custom elements.
- **Modern Web**: Playwright supports modern web features like service workers, web components, and more.
- **Debugging**: Playwright supports debugging with DevTools.
- **CI/CD**: Playwright supports running tests in CI/CD environments.
- **Integration**: Playwright integrates with popular testing frameworks like Jest, Mocha, and Jasmine.
- **DevTools Protocol**: Playwright uses the Chrome DevTools Protocol for automation.
- **Extensions**: Playwright supports browser extensions.
- **Screenshots**: Playwright supports taking screenshots.
- **Videos**: Playwright supports recording videos.
- **Network**: Playwright supports intercepting network requests.
- **Performance**: Playwright supports measuring performance metrics.
- **Accessibility**: Playwright supports testing for accessibility.
- **Automation**: Playwright supports automating web applications.
- **Code Generation**: Playwright supports generating code for automation. Record and replay.🚀

## How to Install Playwright?

***
You can install Playwright using npm or yarn. Here's how you can install Playwright using npm:

```bash
npm init playwright@latest
```

Here's how you can install Playwright using yarn:

```bash
yarn create playwright
```

## How to install Node.js?

You can install Node.js from the official website: https://nodejs.org/

## How to install npm?

npm is included with Node.js. You can install Node.js from the official website: https://nodejs.org/

## How to install yarn?

You can install yarn using npm. Here's how you can install yarn using npm:

```bash
npm install -g yarn
```

## Project Structure

***
This project contains UI and API test examples(each have own project folder which can be imported separately in VS Code)
using Playwright. The videos are from each lecture in the course.

## VS Code Extensions Recommended

***

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatter
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Code linter
- [Playwright Test for VS Code(Official)](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) -
  Extension to integrate Playwright with VS Code.
- [Playwright Test Snippets](https://marketplace.visualstudio.com/items?itemName=mskelton.playwright-test-snippets) -
  Playwright test snippets for generating snippets with shortcuts.
- [TypeScript Importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)
- [TypeScript Toolbox](https://marketplace.visualstudio.com/items?itemName=DSKWRK.vscode-generate-getter-setter)

## Essential Command Line Options

***
> Read More about Playwright CLI options [here](https://playwright.dev/docs/test-cli).
>
> Pro Tip: You can use `--help` with any command to get more information. For example, `npm playwright test --help` will
> generate a list of options.

Here is a table with commands and their descriptions:

| Command                                                             | Description                           |
|---------------------------------------------------------------------|---------------------------------------|
| `npm playwright test`                                               | Run all the tests                     |
| `npm playwright test --headed`                                      | Run tests in headful mode             |
| `npm playwright test tests/example.spec.ts`                         | Run a specific test file              |
| `npm playwright test tests/example.spec.ts -g "Test Name or regex"` | Run a particular test in a file       |
| `npm playwright test tests/example.spec.ts -tag "@smoke"`           | Run tests with tags                   |
| `npm playwright test --workers 2`                                   | Define workers for parallel execution |
| `npm playwright test --retries 2`                                   | Define retries for flaky tests        |
| `npm playwright test tests/example.spec.ts tests/example2.spec.ts`  | Run multiple files                    |
| `npm playwright test --timeout 30000`                               | Define timeout in ms for test         |
| `npm playwright test -c my-pw.config.ts`                            | Use a custom configuration file       |

***

## What's Next?

- Read Playwright official documentation [here](https://playwright.dev/docs/intro).
- Access Playwright Community Pages [here](https://playwright.dev/community/welcome).
- Join Discord [Server](https://aka.ms/playwright/discord).
- Open Feature Requests [here](https://github.com/microsoft/playwright/issues/new/choose).
- Bug Reports [here](https://github.com/microsoft/playwright/issues/new/choose).