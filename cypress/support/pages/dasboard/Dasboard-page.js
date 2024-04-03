const locatorFeature = require('../../locators/feature-Locator')
const locatorDasboard = require('../../locators/dasboard-locator')



class DasboardPage {

    async clickSales () {
        cy.xpath(locatorFeature.datatestid.sales).click({force: true}).should('exist', {timeout: 2000})
        
        cy.wait(3000)
    }
    

    async clickPurchases () {
        cy.xpath(locatorFeature.datatestid.purchases).click({force: true}).should('exist', {timeout: 2000})

        cy.wait(3000)
    }
    

    async clickCategories () {
        cy.xpath(locatorFeature.datatestid.categories).click({force: true}).should('exist', {timeout: 2000})

        cy.wait(3000)
    }

    async clickProducts () {
        cy.xpath(locatorFeature.datatestid.products).click({force: true}).should('exist', {timeout: 2000})

        cy.wait(3000)
    }

    async clickUsers () {
        cy.xpath(locatorFeature.datatestid.users).click({force: true}).should('exist', {timeout: 2000})

        cy.wait(3000)
    }

    async clickCustomers () {
        cy.xpath(locatorFeature.datatestid.custumers).click({ multiple: true },{force: true})

        cy.wait(3000)
    }

    async assertionDasboard () {
        cy.get('.chakra-heading').should('have.value',kasirAja)


    }
    async footer() {
        cy.xpath(locatorDasboard.datatestid.footer).click({ multiple: true },{force: true})
        cy.wait(5000)

    }
    async logout() {
        cy.xpath(locatorDasboard.datatestid.click_button_Shop).click({force: true})
        cy.xpath(locatorDasboard.datatestid.click_logout).click({force: true})
        cy.wait(5000)
        
    }

    async editshop (randomUsername) {
        cy.xpath(locatorDasboard.datatestid.click_button_Shop).click({ multiple: true },{force: true})
        cy.xpath(locatorDasboard.datatestid.click_shop_name).click({force: true})
        cy.xpath(locatorDasboard.datatestid.shop_name).clear().type(randomUsername,{force: true})
        cy.xpath(locatorDasboard.datatestid.click_save).should('be.visible').click({force: true})
        cy.wait(5000)




        cy.wait(3000)
    }

}

module.exports = new DasboardPage()
