import { Locator, Page } from "playwright/test";
import { Locators } from "./types";

export default class HomePage {
  locators: Locators
  constructor(public readonly page: Page){ 
    this.locators = {
      homeTitle: this.page.getByTitle("Automation Test Store"),
      loginOrRegister: this.page.getByRole("link", { name: "Login or register" })
    }
  }  
}
