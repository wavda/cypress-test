class LoginPage {
  visit() {
    cy.visit(Cypress.env('base_url'))
  }

  getUserIdInput() {
    return cy.get('[name="user[userId]"]')
  }

  getPasswordInput() {
    return cy.get('[name="user[secret]"]')
  }

  getContinueButton() {
    return cy.get('#tag-lg001')
  }

  login(user_id, password) {
    this.getUserIdInput().type(user_id)
    this.getContinueButton().click()
    this.getPasswordInput().type(password)
    this.getContinueButton().click()
  }
}
  
export default new LoginPage()
