# Playwright and NPM Command Line Options

***

Playwright CLI provides a set of commands to help you run your tests. Here are some of the essential commands:

***

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

>
> Pro Tip: You can use `--help` with any command to get more information. For example, `npx playwright test --help` will
> generate a list of options.

```bash
npx playwright test --help

# This will generate the following output:

Usage: npx playwright test [options] [test-filter...]

run tests with Playwright Test

Options:
  --browser <browser>          Browser to use for tests, one of "all", "chromium", "firefox" or "webkit"
                               (default: "chromium")
  -c, --config <file>          Configuration file, or a test directory with optional
                               "playwright.config.{m,c}?{js,ts}"
  --debug                      Run tests with Playwright Inspector. Shortcut for "PWDEBUG=1" environment variable
                               and "--timeout=0 --max-failures=1 --headed --workers=1" options
  --forbid-only                Fail if test.only is called (default: false)
  --fully-parallel             Run all tests in parallel (default: false)
  -g, --grep <grep>            Only run tests matching this regular expression (default: ".*")
  --global-timeout <timeout>   Maximum time this test suite can run in milliseconds (default: unlimited)
  -gv, --grep-invert <grep>    Only run tests that do not match this regular expression
  --headed                     Run tests in headed browsers (default: headless)
  --ignore-snapshots           Ignore screenshot and snapshot expectations
  -j, --workers <workers>      Number of concurrent workers or percentage of logical CPU cores, use 1 to run in a
                               single worker (default: 50%)
  --list                       Collect all the tests and report them, but do not run
  --max-failures <N>           Stop after the first N failures
  --no-deps                    Do not run project dependencies
  --output <dir>               Folder for output artifacts (default: "test-results")
  --pass-with-no-tests         Makes test run succeed even if no tests were found
  --project <project-name...>  Only run tests from the specified list of projects, supports '*' wildcard
                               (default: run all projects)
  --quiet                      Suppress stdio
  --repeat-each <N>            Run each test N times (default: 1)
  --reporter <reporter>        Reporter to use, comma-separated, can be "list", "line", "dot", "json", "junit",
                               "null", "github", "html", "blob", "markdown" (default: "list")
  --retries <retries>          Maximum retry count for flaky tests, zero for no retries (default: no retries)
  --shard <shard>              Shard tests and execute only the selected shard, specify in the form
                               "current/all", 1-based, for example "3/5"
  --timeout <timeout>          Specify test timeout threshold in milliseconds, zero for unlimited (default:
                               30000)
  --trace <mode>               Force tracing mode, can be "on", "off", "on-first-retry", "on-all-retries",
                               "retain-on-failure", "retain-on-first-failure"
  -u, --update-snapshots       Update snapshots with actual results (default: only create missing snapshots)
  --ui                         Run tests in interactive UI mode
  --ui-host <host>             Host to serve UI on; specifying this option opens UI in a browser tab
  --ui-port <port>             Port to serve UI on, 0 for any free port; specifying this option opens UI in a
                               browser tab
  -x                           Stop after the first failure
  -h, --help                   display help for command

Arguments [test-filter...]:
  Pass arguments to filter test files. Each argument is treated as a regular expression. Matching is performed against the absolute file paths.

Examples:
  $ npx playwright test my.spec.ts
  $ npx playwright test some.spec.ts:42
  $ npx playwright test --headed
  $ npx playwright test --project=webkit

```

> Read More about Playwright CLI options [here](https://playwright.dev/docs/test-cli).

***
