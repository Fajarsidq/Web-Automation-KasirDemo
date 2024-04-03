const locator = require('../../locators/register-locator')
const staticText = require('../../static_text/static-Regist')



class registerPage {

    async goHomepage() {
        cy.visit('https://kasiraja.ajikamaludin.id/login',{failOnStatusCode: false})
        cy.xpath(locator.datatestid.button_regist).click()
    }

    async fillName() {
        cy.xpath(locator.datatestid.name_input)
            .type(staticText.registerPage.name, {force: true})
            .should('have.value', staticText.registerPage.name)
            
    }

    async fillEmailRandom (randomEmail) {
        cy.xpath(locator.datatestid.email_input).type(randomEmail, {force: true})
    }

    async fillPassword() {
        cy.xpath(locator.datatestid.password_input)
            .type(staticText.registerPage.password, {force: true})
            .should('have.value', staticText.registerPage.password)
    }

    async clickSignUpBtn() {
        cy.xpath(locator.datatestid.signup_button).click({ multiple : true },{ force: true })
        
        cy.wait(5000)
    }

}

module.exports = new registerPage();
