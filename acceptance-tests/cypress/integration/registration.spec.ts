import AppPages from "../page/appPages";

describe("registration tests", () => {
  let appPages: AppPages;
  beforeEach(async () => {
    appPages = new AppPages();    
    cy.get("a").contains("Login or register").click();
    cy.get("button").contains("Continue").click();
  });
  it("test successful registration", async () => {
    const randomString: string = Math.random().toString(18).substring(2, 10);
    const email: string = "email_" + randomString + "@test.com";
    const loginName: string = "username_" + randomString;
    const password: string = "password";

    await appPages.registerPage.fillRegistrationDetails(
      email,
      loginName,
      password
    );
    cy.get("h1.heading1")
      .contains(" Your Account Has Been Created!")
      .should("be.visible");
  });

  it("test failed user registration without email address", async () => {
    const randomString: string = Math.random().toString(18).substring(2, 10);
    const loginName: string = "username_" + randomString;
    const password: string = "password";
    await appPages.registerPage.fillRegistrationDetails('', loginName, password);
    cy.get(appPages.registerPage.locators.alert).should('have.text',
      "Email Address does not appear to be valid!");
  });
});
