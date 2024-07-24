import { expect, test } from '@playwright/test';
import { BlockList } from 'net';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.locator('[title="Forms"]').click();
});

test('locator syntax rules', async ({ page }) => {
  await page.getByText('Form Layouts').click();

  //   const blockForm = page.locator('nb-card nb-card-header').filter({ hasText: 'Block form' });
  //   const blockForm = page.locator('nb-card nb-card-header').filter({ hasText: 'Using the Grid' });
  const blockForm = page.locator('nb-card').filter({ hasText: 'Using the Grid' });

  //   await expect(blockForm).toHaveText('Using the Grid');
  await blockForm.getByPlaceholder('Email').fill('test');

  await page.getByRole('textbox', { name: 'Email' }).fill('test2');

  await page.locator('nb-card nb-radio ::text-is("Option1")').click();
});
