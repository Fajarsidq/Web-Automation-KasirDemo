const locator = require('../../locators/login-locator')
const locators = require('../../locators/register-locator')
const staticText = require('../../static_text/static-Login')
const staticTexts = require('../../static_text/static-InvalidLogin')


class invalidloginPage {

    async buttondaftar () {
        cy.xpath(locators.datatestid.button_login).click({force: true})
        cy.reload()
    }
    

    async fillPassword () {
        cy.xpath(locator.datatestid.password_input).clear().type('Fajars', {force: true}).should('have.value', staticText.loginPage.password, {timeout: 2000})
    }
    

    async invalidfillEmail () {
        cy.xpath(locator.datatestid.email_input).clear().type('1609@gmail.com', {force: true}).should('have.value', staticTexts.invalidloginPage.email, {timeout: 2000})
    }
    

    async invalidfillPassword () {
        cy.xpath(locator.datatestid.password_input).clear().type('1609', {force: true}).should('have.value', staticTexts.invalidloginPage.password, {timeout: 2000})
    
    }

    async clickLoginButton () {
        cy.xpath(locator.datatestid.login_button).click()
        cy.wait(7000)
    }

}

module.exports = new invalidloginPage()

