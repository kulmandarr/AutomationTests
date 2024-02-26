import { Page } from "playwright/test";
import { Locators } from "./types";

export default class AccountPage {
  locators: Locators;
  constructor(public readonly page: Page){
    this.locators = {
      accountCreation: this.page.getByRole("heading", { name: " Your Account Has Been Created!" }),
      accountHeading: this.page.getByRole("heading", { name: "My Account", exact: true })
    }
  }
}
