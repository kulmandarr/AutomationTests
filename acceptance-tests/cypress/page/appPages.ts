import LoginPage from "../../cypress/page/login";
import RegisterPage from "./register";

export default class AppPages {
  loginPage: LoginPage
  registerPage: RegisterPage
  constructor(){
    this.loginPage = new LoginPage();
    this.registerPage = new RegisterPage();
    cy.visit("/");
  }
}
