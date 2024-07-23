import test, { expect, Page } from '@playwright/test';

const TODO_ITEMS = ['buy some cheese', 'feed the cat', 'book a doctors appointment'];

const createTodos = async (page: Page) => {
  const newTodo = page.getByPlaceholder('What needs to be done?');
  for (let i = 0; i < TODO_ITEMS.length; i++) {
    await newTodo.fill(TODO_ITEMS[i]);
    await newTodo.press('Enter');
  }
};

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
});

test.describe('New Todo', () => {
  test('should allow me to add todo items', async ({ page }) => {
    // create a new todo locator
    const newTodo = page.getByPlaceholder('What needs to be done?');

    // Create 1st todo.
    await newTodo.fill(TODO_ITEMS[0]);
    await newTodo.press('Enter');

    // Make sure the list only has one todo item.
    await expect(page.getByTestId('todo-title')).toHaveText([TODO_ITEMS[0]]);

    // Create 2nd todo.
    await newTodo.fill(TODO_ITEMS[1]);
    await newTodo.press('Enter');

    // Make sure the list now has two todo items.
    await expect(page.getByTestId('todo-title')).toHaveText([TODO_ITEMS[0], TODO_ITEMS[1]]);
  });

  test('should clear text input field when an item is added', async ({ page }) => {
    // create a new todo locator
    const newTodo = page.getByPlaceholder('What needs to be done?');

    // Create one todo item.
    await newTodo.fill(TODO_ITEMS[0]);
    await newTodo.press('Enter');

    // Check that input is empty.
    await expect(newTodo).toBeEmpty();
  });

  test('should append new items to the bottom of the list', async ({ page }) => {
    // Create 3 items.
    await createTodos(page);

    // create a todo count locator
    const todoCount = page.getByTestId('todo-count');

    // Check test using different methods.
    await expect(page.getByText('3 items left')).toBeVisible();
    await expect(todoCount).toHaveText('3 items left');
    await expect(todoCount).toContainText('3');
    await expect(todoCount).toHaveText(/3/);

    // Check all items in one call.
    await expect(page.getByTestId('todo-title')).toHaveText(TODO_ITEMS);
  });
});

test.describe('mark all as completed', () => {
  test.beforeEach(async ({ page }) => {
    await createTodos(page);
  });

  test('should allow me to mark all items as completed', async ({ page }) => {
    await page.getByLabel('Mark all as complete').click();
    expect(page.locator('.completed')).toHaveCount(3);
    expect(page.locator('[data-testid="todo-item"]')).toHaveClass(['completed', 'completed', 'completed']);
  });

  test('complete all checkbox should update state when items are completed / cleared', async ({ page }) => {
    await page.getByLabel('Mark all as complete').click();
    await expect(page.locator('.toggle').nth(0)).toBeChecked();
  });
});

/* 
learning locators:
https://playwright.dev/docs/locators

*/
