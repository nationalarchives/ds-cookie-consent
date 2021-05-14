// <reference types="cypress" />

context('Cookies Consent Banner', () => {
    beforeEach(() => {
      Cypress.Cookies.debug(true)
  
      cy.visit('https://nationalarchives.gov.uk/latin')
  
      // clear cookies again after visiting to remove
      // any 3rd party cookies picked up such as cloudflare
      //cy.clearCookies()
    })

    it('Cookie banner DOM dependencies', () => {
        cy.get('#ds-cookie-consent-banner > .container')
            .should('be.visible')

        cy.get('.cookie_head')
            .should('be.visible')
        
        cy.get('.cookie-p')
            .should('be.visible')
        
        cy.get('#accept_optional_cookies')
            .should('be.visible')
        
        cy.get('#reject_optional_cookies')
            .should('be.visible')
        
        cy.get('#btn_preferences')
            .should('be.visible')
    })
  
    it('Check => dependant cookies', () => {
        // https://on.cypress.io/getcookie
        cy.getCookie('dontShowCookieNotice')
            .should('be.null')
        cy.getCookie('cookies_policy')
            .should('have.property', 'value', '%7B%22usage%22%3Afalse%2C%22settings%22%3Afalse%2C%22essential%22%3Atrue%7D')
    })

    it('Interact => with Accept cookies btn', () => {
        cy.get('#accept_optional_cookies').click()
 
        // cy.getCookie() yields a cookie object
        cy.getCookie('cookies_policy')
            .should('have.property', 'value', '%7B%22usage%22%3Atrue%2C%22settings%22%3Atrue%2C%22essential%22%3Atrue%7D')
        
        cy.get('#hide_this_message')
            .contains('Hide this message')
            .should('be.visible')

        cy.get('#hide_this_message')
            .click()

        cy.get('#ds-cookie-consent-banner > .container')
            .should('not.exist')

        cy.getCookie('dontShowCookieNotice').should('have.property', 'value', 'true')
    })

    it('Remove => dontShowCookieNotice after Accept btn was clicked', () => {
        cy.clearCookie('dontShowCookieNotice');
    })

    it('Check => if the banner is visible again', () => {
        cy.get('#ds-cookie-consent-banner > .container')
            .should('be.visible')
    })

    it('Interact => with Reject cookies btn', () => {
        cy.get('#reject_optional_cookies').click()
 
        // cy.getCookie() yields a cookie object
        cy.getCookie('cookies_policy')
            .should('have.property', 'value', '%7B%22usage%22%3Afalse%2C%22settings%22%3Afalse%2C%22essential%22%3Atrue%7D')
        
        cy.get('#hide_this_message')
            .contains('Hide this message')
            .should('be.visible')

        cy.get('#hide_this_message')
            .click()

        cy.get('#ds-cookie-consent-banner > .container')
            .should('not.exist')

        cy.getCookie('dontShowCookieNotice').should('have.property', 'value', 'true')
    })

    it('Remove => dontShowCookieNotice after Reject btn was clicked', () => {
        cy.clearCookie('dontShowCookieNotice');
    })

    it('Interact with View cookies btn', () => {
        cy.get('#btn_preferences')
            .click()

        cy.url()
            .should('eq', 'https://nationalarchives.gov.uk/latin/cookies/')

        cy.get('#ds-cookie-consent-banner > .container')
            .should('not.exist')
    })
  })

  context('Cookies Settings Page', () => {
    beforeEach(() => {
      Cypress.Cookies.debug(true)
  
      cy.visit('https://nationalarchives.gov.uk/latin/cookies')
  
      // clear cookies again after visiting to remove
      // any 3rd party cookies picked up such as cloudflare
      //cy.clearCookies()
    })

    it('Cookie Settings Page DOM dependencies', () => {
        cy.get('#measure_website_use')
            .should('be.visible')

        cy.get('#donot_measure_website_use')
            .should('be.visible')

        cy.get('#form_submit')
            .should('be.visible')
    })

    it('Check => Analytics cookies settings on page load', () => {
        cy.getCookie('cookies_policy')
            .should('have.property', 'value', '%7B%22usage%22%3Afalse%2C%22settings%22%3Afalse%2C%22essential%22%3Atrue%7D')

        cy.get('#measure_website_use')
            .should('not.be.checked')

        cy.get('#donot_measure_website_use')
            .should('be.checked')
    })

    it('Select => Use cookies that measure my website use', () => {
        cy.get('#measure_website_use')
            .check()

        cy.get('#form_submit')
            .click()

        cy.get('.emphasis-block')
            .should('be.visible')

        cy.getCookie('cookies_policy')
            .should('have.property', 'value', '%7B%22usage%22%3Atrue%2C%22settings%22%3Afalse%2C%22essential%22%3Atrue%7D')
        
        cy.get('#measure_website_use')
            .should('be.checked')

        cy.get('#donot_measure_website_use')
            .should('not.be.checked')
    })
  })