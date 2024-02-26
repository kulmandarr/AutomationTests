import { Locator, Page } from "playwright/test";
import { Locators } from "./types";

export default class LoginPage {
  locators: Locators
  constructor(public readonly page: Page){ 
    this.locators = {
      continueButton: this.page.getByRole("button", { name: "Continue" }),
      loginName: this.page.locator("#loginFrm_loginname"),
      password: this.page.locator("#loginFrm_password"),
      loginButton: page.getByRole("button", { name: "Login" })
    }
  }
  async login(userName: string, password: string) {
    await this.locators.loginName.fill(userName);
    await this.locators.password.fill(password);
    await this.locators.loginButton.click();
  }  
}
