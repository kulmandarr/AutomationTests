import { Page } from "playwright/test";
import { Locators } from "./types";

export default class RegisterPage {
  locators: Locators;
  constructor(public readonly page: Page) {
    this.locators = {
      firstName: this.page.locator("#AccountFrm_firstname"),
      lastName: this.page.locator("#AccountFrm_lastname"),
      email: this.page.locator("#AccountFrm_email"),
      address: this.page.locator("#AccountFrm_address_1"),
      city: this.page.locator("#AccountFrm_city"),
      country: this.page.locator("#AccountFrm_country_id"),
      zone_id: this.page.locator("#AccountFrm_zone_id"),
      postCode: this.page.locator("#AccountFrm_postcode"),
      loginName: this.page.locator("#AccountFrm_loginname"),
      password: this.page.locator("#AccountFrm_password"),
      confirmPassword: this.page.locator("#AccountFrm_confirm"),
      marketingLabel: this.page.getByLabel("No"),
      termsAndConditions: this.page.getByLabel("I have read and agree to the"),
      continueButton: this.page.getByRole("button", { name: "Continue" }),
      alert: this.page.locator(".alert")
  }
  }
  
  async fillRegistrationDetails(email: string, loginName: string, password: string) {
    await this.locators.firstName.waitFor();
    await this.locators.firstName.fill("Test Firstname");
    await this.locators.lastName.fill("Test LastName");
    await this.locators.email.fill(email);
    await this.locators.address.fill("address 1");
    await this.locators.city.fill("Mumbai");
    await this.locators.country.selectOption({label: "India"});
    await this.locators.zone_id.selectOption({ label: "Maharashtra" });
    await this.locators.postCode.fill("411041");
    await this.locators.loginName.fill(loginName);
    await this.locators.password.fill(password);
    await this.locators.confirmPassword.fill(password);
    await this.locators.marketingLabel.check();
    await this.locators.termsAndConditions.check();
    await this.locators.continueButton.click();
  }
}
