/// <reference types="cypress" />

import {
   PageElements
} from "../support/selectors"

// pe - page element selector from ../support/selectors
const pe = new PageElements()

describe('UPVIRAL TESTS', () => {

   beforeEach(() => {
      cy.visit('/')
      Cypress.on('uncaught:exception', (err, runnable) => {
         return false
      })
      cy.clearLocalStorage()
   })

   it('Login with valid credentials', () => {

      cy.loginFormValidation_UI()

      cy.login(Cypress.env('username'), Cypress.env('password'))

      cy.navigateTo('Invoices')

      // createNewInvoice command -> ([String: customer name], [Int: amount of items], [String: % or $], [Int: discount amount])
      cy.createNewInvoice('agape', 3, '%', 10)
      cy.newInvoicePreview()
      cy.compareTotalPrice()

   })


})