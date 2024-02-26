import { Locators } from "./types";

export default class RegisterPage {
  locators: Locators;
  constructor() {
    this.locators = {
      firstName: "#AccountFrm_firstname",
      lastName: "#AccountFrm_lastname",
      email: "#AccountFrm_email",
      address: "#AccountFrm_address_1",
      city: "#AccountFrm_city",
      country: "#AccountFrm_country_id",
      zone_id: "#AccountFrm_zone_id",
      postCode: "#AccountFrm_postcode",
      loginName: "#AccountFrm_loginname",
      password: "#AccountFrm_password",
      confirmPassword: "#AccountFrm_confirm",
      marketingLabel: "[type='radio']",
      termsAndConditions: "[type='checkbox']",
      alert: ".alert",
    };
  }

  async fillRegistrationDetails(
    email: string,
    loginName: string,
    password: string
  ) {
    cy.get(this.locators.firstName).type("Test Firstname");
    cy.get(this.locators.lastName).type("Test LastName");
    cy.get(this.locators.email).type(email);
    cy.get(this.locators.address).type("address 1");
    cy.get(this.locators.city).type("Mumbai");
    cy.get(this.locators.country).select("India");
    cy.get(this.locators.zone_id).select("Maharashtra");
    cy.get(this.locators.postCode).type("411041");
    cy.get(this.locators.loginName).type(loginName);
    cy.get(this.locators.password).type(password);
    cy.get(this.locators.confirmPassword).type(password);
    cy.get(this.locators.marketingLabel).check('0');
    cy.get(this.locators.termsAndConditions).check("1");
    cy.get("button").contains("Continue").click();
  }
}
