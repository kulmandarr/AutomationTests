import { test, expect } from "@playwright/test";

test("test user registration", async ({ page }) => {
  await page.goto("https://automationteststore.com/");
  await expect(page.getByTitle('Automation Test Store')).toBeVisible()
  await page.getByRole('link', { name: 'Login or register' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('#AccountFrm_firstname').click();
  await page.locator('#AccountFrm_lastname').click();
  await page.locator('#AccountFrm_email').click();
  await page.locator('#AccountFrm_telephone').click();
  await page.locator('#AccountFrm_fax').click();
  await page.locator('#AccountFrm_company').click();
  await page.locator('#AccountFrm_address_1').click();
  await page.locator('#AccountFrm_address_2').click();
  await page.locator('#AccountFrm_city').click();
  await page.locator('#AccountFrm_zone_id').selectOption('3522');
  await page.locator('#AccountFrm_postcode').click();
  await page.locator('#AccountFrm_country_id').selectOption('99');
  await page.locator('#AccountFrm_zone_id').selectOption('1493');
  await page.locator('#AccountFrm_loginname').click();
  await page.locator('#AccountFrm_password').click();
  await page.locator('#AccountFrm_confirm').click();
  await page.getByLabel('No').check();
  await page.getByLabel('I have read and agree to the').check();
  await page.getByRole('button', { name: ' Continue' }).click();
});
