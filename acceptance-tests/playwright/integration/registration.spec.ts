import { expect } from "@playwright/test";
import { test } from '../setup'
test.describe('registration tests',()=> {

  test.beforeEach(async ({ appPages }) =>{

    await expect(appPages.homePage.locators.homeTitle).toBeVisible();
    await appPages.homePage.locators.loginOrRegister.click();
    await appPages.loginPage.locators.continueButton.click();
  });

  test("test successful user registration", async ({ appPages }) => {
    const randomString: string = Math.random().toString(18).substring(2, 10);
    const email: string = "email_" + randomString + "@test.com";
    const loginName: string = "username_" + randomString;
    const password: string = "password";

    await appPages.registerPage.fillRegistrationDetails(email, loginName, password);
    await expect(appPages.accountPage.locators.accountCreation).toBeVisible();
  });

  test("test failed user registration without email address", async ({ appPages }) => {
    const randomString: string = Math.random().toString(18).substring(2, 10);
    const loginName: string = "username_" + randomString;
    const password: string = "password";

    await appPages.registerPage.fillRegistrationDetails('', loginName, password);
    await expect(appPages.registerPage.locators.alert).toContainText(
      "Email Address does not appear to be valid!"
    );
  });
})
