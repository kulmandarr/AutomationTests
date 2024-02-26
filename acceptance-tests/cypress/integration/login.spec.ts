import { assert } from "chai";
import LoginPage from "../../cypress/page/login";
import AppPages from "../page/appPages";

describe("login tests", () => {
  let appPages: AppPages;
  beforeEach(async () => {
    appPages = new AppPages();
    cy.get("a").contains("Login or register").click();
  });
  it("login to application with valid credentials", async () => {
    const loginName = "abc_54321";
    const password = "P@ssword";
    await appPages.loginPage.login(loginName, password);
    cy.get(".heading2").should("have.text", "My Account");
  });

  it('user is logging in with invalid password',async () => {
    const loginName = 'abc_12345'
    const password = 'P@ssword'
    await appPages.loginPage.login(loginName, password)
    cy.get('.alert').should('have.text','Error: Incorrect login or password provided.')
  })

  it('user is logging in without loginName',async () => {
    const loginName = ''
    const password = 'P@ssword'
    await appPages.loginPage.login(loginName, password)
    cy.get('.alert').should('have.text','Error: Incorrect login or password provided.')
  })
});
