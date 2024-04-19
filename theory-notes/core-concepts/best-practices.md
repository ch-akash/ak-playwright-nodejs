# Playwright's and General Best Practices

***

## Table of Contents

- [Page Objects](#page-objects)
- [Tests](#tests)
- [Locators](#locators)
- [Assertions](#assertions)
- [Miscellaneous](#miscellaneous)
- [Audits and Reviews](#audits-and-reviews)
- [Conclusion](#conclusion)
- [References](#references)

***

In order to write maintainable and reliable tests, we recommend following these best practices:

## Page Objects

***

- Do not perform assertions in page objects. Page objects should only encapsulate the selectors and actions.
- Do not create dependencies between page objects. Each page object should be independent and should not rely on other
  page objects.

## Tests

***

- Take advantage of Test Recorder to generate locators for your test cases. This will save you time and will handle the
  complexity of selectors for you.
- Do not create dependencies between tests. Each test should be independent and should not rely on other tests.
- Use Playwright's auto-waiting mechanism to avoid flakiness in your tests.
- Break your complex test cases into smaller, more manageable test cases.
- Use `test.describe` to group related test cases together.
- Use tags and annotations to categorize your tests in a meaningful way. This will enhance the HTML report and will help
  you filter tests based on tags.
- Use `test.skip` to skip tests that are not ready to be executed.
- Use `test.fixme` to mark tests that are failing and need to be fixed.

## Locators

***

- Use `data-testid` attributes to identify elements in your application. This will make your tests more resilient to
  changes in the application. You can ask your developers to add these attributes to the elements in your application.
- Write locators that are unique and stable. Avoid using locators that are likely to change.
- Use `page.locator` to create custom locators that are reusable across your tests.
- Take advantage of inbuilt Playwright locators methods like `page.getByRole`, `page.getByText` with exact names of
  elements to avoid flakiness in your tests.
- Keep your locators in page objects and avoid hard-coding them in your tests. Test files should not contain any
  selectors.
- Use VS code recorder or codegen to generate locators for your tests.

## Assertions

***

- Use Playwright's built-in assertions to verify the state of the application.
- Use web first assertions like so that Playwright will wait until the expected condition is met.
  - One example from official Playwright documentation on web first assertions:

```typescript

// 👍
await expect(page.getByText('welcome')).toBeVisible();

// 👎
expect(await page.getByText('welcome').isVisible()).toBe(true);

```

- Use `expect` assertions to verify the state of the application. This will make your tests more readable and
  maintainable.

## Miscellaneous

***

- Use environment variables to store sensitive information like usernames, passwords, and URLs.
- Use Playwright configuration files to manage your test configurations.
- Use Playwright CLI to run your tests in headless mode.
- Configure traces, screenshots, and videos in your Playwright configuration to help debug failing tests.

## Audits and Reviews

***

- Conduct code reviews to ensure that the code adheres to the best practices.
- Conduct regular audits to ensure that the tests are maintainable and reliable.
- Use static code analysis tools to identify potential issues in your code.
- Use linters to enforce coding standards and best practices.
- Conduct security audits to ensure that sensitive information is handled securely and that the tests do not expose any
  vulnerabilities such as hard-coded passwords, etc.

## Conclusion

***

By following these best practices, you can write maintainable, reliable, and scalable tests using Playwright. These
practices will help you create a robust test suite that can be easily maintained and extended as your application grows.

## References

***

- [Playwright Documentation on Best Practices](https://playwright.dev/docs/best-practices)
- [ESLint](https://eslint.org/)
- [Parallelism and Sharding in Playwright](https://playwright.dev/docs/best-practices#use-parallelism-and-sharding)

***
