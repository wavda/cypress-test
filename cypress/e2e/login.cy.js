import LoginPage from '../pageobject/login.page'

describe('Login', () => {
  beforeEach(() => {
    LoginPage.visit()
  })

  it('should log in with valid credentials', () => {
    LoginPage.login(Cypress.env('user_id'), Cypress.env('password'))
    cy.url().should('include', '/dashboard')
  })

  it('should show an error message with invalid credentials', () => {
    LoginPage.login(Cypress.env('user_id'), 'invalidpassword123')
    cy.get('.input-error').should('be.visible')
  })
})
