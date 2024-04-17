# Playwright Page Object Model (POM)

***

Page Object Model (POM) is a design pattern that helps in creating reusable and maintainable code. It is used to create
an object repository for web elements. The main advantage of the Page Object Model is that if the UI changes for any
page, it doesn't require us to change any tests. We only need to change the code within the Page Object.

In Playwright, we can implement the Page Object Model by creating a class for each page. The class contains all the page
elements and methods to interact with the page. We can then use these classes in our tests to interact with the page
elements.

Here is an example of implementing the Page Object Model in Playwright:
***

```typescript

// Define a class for the page
import {Locator} from "@playwright/test";

export class LoginPage {
    private page: Page;
    private usernameInput: Locator
    private passwordInput: Locator
    private loginButton: Locator


    // Approach 1: Define elements in the constructor
    constructor(page: Page) {
        this.page = page;
        this.usernameInput = this.page.locator('#username');
        this.passwordInput = this.page.locator('#password');
        this.loginButton = this.page.locator('button[type="submit"]');
    }

    // Approach 2: Define elements as arrow functions(Note: Not recommended)
    // These elements can also be initialized as below. This is not recommended though to enhance clarity, efficiency and maintainability.
    // private usernameInput:Locator =async()=> this.page.locator('#username');
    // private passwordInput:Locator =async()=> this.page.locator('#password');
    // private loginButton:Locator =async()=> this.page.locator('button[type="submit"]');


    // Define page method to login
    async login(username: string, password: string) {
        await this.usernameInput().fill(username);
        await this.passwordInput().fill(password);
        await this.loginButton().click();
    }
}
```

Use the Page Object Model in tests(This a basic level example. Refer POM course section for advanced usage):
***

```typescript

// Use the LoginPage class in tests

import {test} from "@playwright/test";

test('Login Test', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('testuser', 'password');
    // Add assertions here
});
```

## Explanation

***

- We define a class `LoginPage` that contains the page elements and methods to interact with the login page.
- The class constructor initializes the page elements using Playwright locators.
- We define a method `login` that takes the username and password as parameters and fills the login form.

### Approach 1 is **recommended** for defining elements in the constructor. Here is why

- Clarity and Readability: The first approach is more straightforward and easier to understand. It directly initializes
  the locators within the constructor, making it clear when and how it's assigned a value.
- Efficiency: In most cases, there's no need for an asynchronous function (async) unless truly needed.
  Playwright's locators are synchronous, so you can directly assign the result to the property. This keeps the code
  cleaner and avoids potential overhead from unnecessary asynchronous operations.
- Maintainability: The first approach is generally easier to maintain. If you ever need to modify the locator logic (
  e.g., changing the placeholder or adding additional criteria), you'd only need to update the assignment in the
  constructor.

### When to Use Async Initialization

The second approach (using an async function in the constructor) might be suitable in rare scenarios where the locator
value depends on some asynchronous operation (e.g., fetching data from an API to determine the placeholder dynamically).
However, for most common use cases involving Playwright locators based on page elements, the synchronous approach is
preferred.

***
