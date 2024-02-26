import { Locators } from "./types"

export default class Login{
  locators: Locators
    constructor() {
      this.locators = {
        loginName: '#loginFrm_loginname',
        password: '#loginFrm_password'
      }      
    }
    async login(loginName: string, password: string){
      cy.get(this.locators.loginName).type(loginName)
      cy.get(this.locators.password).type(password)
      cy.get('button').contains('Login').click()
    }
 }
