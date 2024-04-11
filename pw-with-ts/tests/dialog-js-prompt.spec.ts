import { test, expect } from "@playwright/test";

test("Send input to JS Prompt", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  //Register to accept the prompt and then pass the text.
  page.on("dialog", (dialog) => dialog.accept("My Test Data"));

  const promptInvokeButton = page.getByRole("button", {
    name: "Click for JS Prompt",
  });
  await expect(promptInvokeButton).toBeVisible();
  await promptInvokeButton.click();
  await expect(page.locator("#result")).toContainText(
    "You entered: My Test Data"
  );
});
