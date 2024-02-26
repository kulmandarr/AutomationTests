import { expect } from "@playwright/test";
import { test } from '../setup'
import AppPages from "../setup/application";

test.describe('test login page', () => { 
  test.beforeEach(async ({ appPages }) => {
    await appPages.homePage.locators.loginOrRegister.click();
  });
  test("user is able to login to application", async ({ appPages }) => {
    const loginName: string = "abc_54321";
    const password: string = "P@ssword";
    await appPages.loginPage.login(loginName, password);
    await expect(appPages.accountPage.locators.accountHeading).toBeVisible();
  });

  test("user is logging in with invalid password", async ({ appPages }) => {
    const loginName: string = "abc_54321";
    const password: string = "Test_Password";
    await appPages.loginPage.login(loginName, password);
    await expect(appPages.registerPage.locators.alert).toContainText(
      "Error: Incorrect login or password provided."
    );
  });

  test("user is logging in without loginName", async ({ appPages }) => {
    const loginName: string = "";
    const password: string = "Test_Password";
    await appPages.loginPage.login(loginName, password);
    await expect(appPages.registerPage.locators.alert).toContainText(
      "Error: Incorrect login or password provided."
    );
  });
})
