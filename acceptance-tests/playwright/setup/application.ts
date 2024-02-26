import { Page } from "playwright/test";
import HomePage from "../page/home";
import LoginPage from "../page/login";
import RegisterPage from "../page/register";
import Base from "./base";
import AccountPage from "../page/account";

export default class AppPages extends Base {
  loginPage: LoginPage;
  homePage: HomePage;
  registerPage: RegisterPage;
  accountPage: AccountPage;
  constructor(page: Page){
    super(page)
    this.loginPage = new LoginPage(page)
    this.homePage = new HomePage(page)
    this.registerPage = new RegisterPage(page)
    this.accountPage = new AccountPage(page)
  }
}
