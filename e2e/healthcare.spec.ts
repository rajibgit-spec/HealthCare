import { expect, test } from '@playwright/test';

test('home page renders the healthcare journey', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/HealthCare\+/);
  await expect(page.getByRole('heading', { name: /Your Health/ })).toBeVisible();
  await expect(page.locator('app-featured-doctors')).toBeVisible();
  await page.screenshot({ path: `artifacts/${test.info().project.name}-home.png`, fullPage: true });
});

test('search and navigation are interactive', async ({ page }) => {
  await page.goto('/');
  const search = page.getByRole('searchbox');
  await search.fill('Cardiology');
  await search.press('Enter');
  await expect(search).toHaveValue('Cardiology');
  await page.getByRole('link', { name: 'Find Doctors' }).first().click();
  await expect(page).toHaveURL(/\/doctors$/);
});

test('mobile navigation opens and closes', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'The hamburger journey is mobile-only.');
  await page.goto('/');
  const menu = page.getByRole('button', { name: 'Toggle navigation' });
  await menu.click();
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
  await page.getByRole('link', { name: 'Services' }).last().click();
  await expect(page).toHaveURL(/\/services$/);
});

test('secondary pages share the header and footer shell', async ({ page }) => {
  for (const route of ['/doctors', '/services', '/health-tips', '/about', '/appointments', '/more']) {
    await page.goto(route);
    await expect(page.locator('app-header')).toBeVisible();
    await expect(page.locator('app-footer')).toBeVisible();
  }
});
