import { test, expect } from '@playwright/test';

test.describe('E2E Tests Setup', () => {
  test('playwright is configured correctly', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/.*/);
  });
});
