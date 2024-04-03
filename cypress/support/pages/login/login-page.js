const locator = require('../../locators/login-locator')
const staticText = require('../../static_text/static-Login')

class loginPage {

    async urlDasboard() {
        cy.visit('https://kasiraja.ajikamaludin.id/',{failOnStatusCode: false})
        
    }

    async urlLogin() {
        cy.visit('https://kasirdemo.belajarqa.com/',{failOnStatusCode: false})
        cy.wait(2000)
        
    }

    async fillEmail () {
        cy.xpath(locator.datatestid.email_input).type('Fajarsidiq16092001@gmail.com', {force: true})
    }

    async fillEmailRandom (randomEmail) {
        cy.xpath(locator.datatestid.email_input).type(randomEmail, {force: true})
    }
    

    async fillPassword () {
        cy.xpath(locator.datatestid.password_input).type('Fajars1609', {force: true})
    }
    

    async clickLoginButton () {
        cy.xpath(locator.datatestid.login_button).click({force: true}).should('be.visible', {timeout: 10000})

        cy.wait(7000)
        
        
    }

}

module.exports = new loginPage()
