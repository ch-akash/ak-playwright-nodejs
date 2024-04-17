# Playwright and NPM Command Line Options

***

Playwright CLI provides a set of commands to help you run your tests. Here are some of the essential commands:

***
> Read More about Playwright CLI options [here](https://playwright.dev/docs/test-cli).
>
> Pro Tip: You can use `--help` with any command to get more information. For example, `npm playwright test --help` will
> generate a list of options.

| Command                                                             | Description                                |
|---------------------------------------------------------------------|--------------------------------------------|
| `npx playwright test`                                               | Run all the tests                          |
| `npx playwright test --headed`                                      | Run tests in headful mode(not recommended) |
| `npx playwright test tests/example.spec.ts`                         | Run a specific test file                   |
| `npx playwright test tests/example.spec.ts -g "Test Name or regex"` | Run a particular test in a file            |
| `npx playwright test tests/example.spec.ts -tag "@smoke"`           | Run tests with tags                        |
| `npx playwright test --workers 2`                                   | Define workers for parallel execution      |
| `npx playwright test --retries 2`                                   | Define retries for flaky tests             |
| `npx playwright test tests/example.spec.ts tests/example2.spec.ts`  | Run multiple files                         |
| `npx playwright test --timeout 30000`                               | Define timeout in ms for test              |
| `npx playwright test -c my-pw.config.ts`                            | Use a custom configuration file            |

***
