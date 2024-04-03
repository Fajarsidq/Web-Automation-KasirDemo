const locator = require('../../locators/purchase-locator')




class PurchasePages {



    async purchaseAdd() {
        cy.xpath(locator.datatestid.purchase).click({multiple: true},{force: true})
        cy.wait(3000)
        cy.xpath(locator.datatestid.click_add).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.click_product).click({multiple: true},{force: true},{timeout:30000})
        cy.xpath(locator.datatestid.click_item1).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.click_qtty).type('10').should('exist', {timeout: 2000})
        cy.xpath(locator.datatestid.click_save).click({multiple: true},{force: true})
        cy.wait(5000)

    }

    async multipleAdd() {
        cy.xpath(locator.datatestid.purchase).click({multiple: true},{force: true})
        cy.wait(3000)
        cy.xpath(locator.datatestid.click_add).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.click_product).click({multiple: true},{force: true},{timeout:30000})
        cy.xpath(locator.datatestid.click_item1).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.click_product).click({multiple: true},{force: true},{timeout:30000})
        cy.xpath(locator.datatestid.click_item2).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.click_qtty1).type('10').should('exist', {timeout: 2000})
        cy.xpath(locator.datatestid.click_qtty2).type('10').should('exist', {timeout: 2000})
        cy.xpath(locator.datatestid.click_save).click({multiple: true},{force: true})
        cy.wait(5000)

    }

}

module.exports = new PurchasePages();
