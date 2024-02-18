import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) =>{
  await page.goto("/");  
  await expect(page.getByTitle("Automation Test Store")).toBeVisible();
  await page.getByRole("link", { name: "Login or register" }).click();
  await page.getByRole("button", { name: "Continue" }).click();
});

test("test successful user registration", async ({ page }) => {
  const randomString: string = Math.random().toString(18).substring(2, 10);
  const email: string = "email_" + randomString + "@test.com";
  const loginName: string = "username_" + randomString;
  const password: string = "password";

  await page.locator("#AccountFrm_firstname").fill("Test Firstname");
  await page.locator("#AccountFrm_lastname").fill("Test Lastname");
  await page.locator("#AccountFrm_email").fill(email);
  await page.locator("#AccountFrm_address_1").fill("address 1");
  await page.locator("#AccountFrm_city").fill("Mumbai");
  await page.locator("#AccountFrm_country_id").selectOption({ label: "India" });
  await page
    .locator("#AccountFrm_zone_id")
    .selectOption({ label: "Maharashtra" });
  await page.locator("#AccountFrm_postcode").fill("411041");
  await page.locator("#AccountFrm_loginname").fill(loginName);
  await page.locator("#AccountFrm_password").fill(password);
  await page.locator("#AccountFrm_confirm").fill(password);
  await page.getByLabel("No").check();
  await page.getByLabel("I have read and agree to the").check();
  await page.getByRole("button", { name: "Continue" }).click();
  await expect(
    page.getByRole("heading", { name: " Your Account Has Been Created!" })
  ).toBeVisible();
});

test("test failed user registration without email address", async ({ page }) => {
  const randomString: string = Math.random().toString(18).substring(2, 10);
  const loginName: string = "username_" + randomString;
  const password: string = "password";

  await page.locator("#AccountFrm_firstname").fill("Test Firstname");
  await page.locator("#AccountFrm_lastname").fill("Test Lastname");
  await page.locator("#AccountFrm_address_1").fill("address 1");
  await page.locator("#AccountFrm_city").fill("Mumbai");
  await page.locator("#AccountFrm_country_id").selectOption({ label: "India" });
  await page
    .locator("#AccountFrm_zone_id")
    .selectOption({ label: "Maharashtra" });
  await page.locator("#AccountFrm_postcode").fill("411041");
  await page.locator("#AccountFrm_loginname").fill(loginName);
  await page.locator("#AccountFrm_password").fill(password);
  await page.locator("#AccountFrm_confirm").fill(password);
  await page.getByLabel("No").check();
  await page.getByLabel("I have read and agree to the").check();
  await page.getByRole("button", { name: "Continue" }).click();
  await expect(page.locator(".alert")).toContainText(
    "Email Address does not appear to be valid!"
  );
});
