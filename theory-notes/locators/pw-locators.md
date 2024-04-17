# Playwright Locators

***

## Table of Contents

- [Locators](#locators)
- [Details on getByText and getByRole](#details-on-getbytext-and-getbyrole)
  - [Search for exact text](#search-for-exact-text)
  - [Search for text that contains a string](#search-for-text-that-contains-a-string)
  - [Use getByRole to search for elements by role](#use-getbyrole-to-search-for-elements-by-role)
- [Handling Web table with Locator Filters](#handling-web-table-with-locator-filters)
- [Summary](#summary)

***

## Locators

Locators are used to identify elements on a web page. Playwright supports various locators to identify elements.
This table has a list of locators supported by Playwright and the methods to use them.

| Locator Type  | Description                                     | Example                                   |
|---------------|-------------------------------------------------|-------------------------------------------|
| `id`          | Locate an element by its id attribute.          | `await page.locator('#myId')`             |
| `text`        | Locate an element by its text content.          | `await page.getByText('Hello')`           |
| `xpath`       | Locate an element using XPath.                  | `await page.locator('your-xPath')`        |
| `css`         | Locate an element using CSS selector.           | `await page.locator('your-css-selector')` |
| `placeholder` | Locate an element by its placeholder attribute. | `await page.getByPlaceholder("Search")`   |
| `label`       | Locate an element by its label.                 | `await page.getByLabel("Username")`       |
| `title`       | Locate an element by its title attribute.       | `await page.getByTitle("Home")`           |
| `role`        | Locate an element by its role attribute.        | `await page.getByRole("button")`          |
| `data-testid` | Locate an element by its data-testid attribute. | `await page.getByTestId("login-button")`  |

### Details on getByText and getByRole

***

When using `getByText` and `getByRole`, you can pass a second argument to narrow down the search.

#### Search for exact text

***

```typescript
page.getByText('Login', {exact: true}); // This will search for an element with the exact text "Login"
```

#### Search for text that contains a string

***

```typescript
page.getByText('Login'); // This will search for an element that contains the text "Login". By default, exact is false.
```

#### Use getByRole to search for elements by role

***
This will search for all elements with the role "button". In order to search for a specific role, you can pass a second
argument to the function.

```typescript
page.getByRole('button'); // This will search for all elements with the role "button"

page.getByRole('button', {name: 'Login'}); // This will search for an element with the role "button" and the name "Login"
```

### Handling Web table with Locator Filters

***

When working with web tables, you can use filters to locate cells based on their content.

Here's an example of filtering first row cell with text "John Doe":

```typescript
const allRowsLocator = await page.getByRole("table").getByRole("row");
const cellWithTextNameLocator = await allRows.first().getByRole("cell")
                                                     .filter({hasText: "John Doe"});

//Using page.locator() inside filter
const cellWithLocator = await allRows.first()
                                     .filter({has: page.getByRole('cell', {name: 'Cell One'})});
```

> Pro Tip: In a nutshell, you can treat table rows like separate lists of cells. Once you have a row locators, you can
> use `locator.filter()` method for locating a cell by text content or by any other locator method. This saves effort
> from writing complex XPaths or CSS selectors.

## Summary

***

- Locators are used to identify elements on a web page.
- Playwright supports various locators like id, text, xpath, css, placeholder, label, title, role, and data-testid.
- You can use `getByText` and `getByRole` to locate elements by text and role.
- You can use filters to locate cells in web tables based on their content.

***
