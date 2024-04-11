import { expect, test } from "@playwright/test";
import exp from "constants";

test("Drag and Drop automatically", async ({ page }) => {
  await page.goto("https://webdriveruniversity.com/Actions/index.html");
  const droppable = await page.locator("#droppable");
  await page.locator("#draggable").dragTo(droppable);
  expect(await droppable).toHaveText("Dropped!");
});

test("Drag and Drop manually", async ({ page }) => {
  await page.goto("https://webdriveruniversity.com/Actions/index.html");
  await page.locator("#draggable").hover();
  await page.mouse.down();
  const droppable = await page.locator("#droppable");
  await droppable.hover();
  await page.mouse.up();
  expect(await droppable).toHaveText("Dropped!");
});
