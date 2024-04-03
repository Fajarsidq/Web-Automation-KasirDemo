const locator = require('../../locators/sales-locator')




class SalesPages {



    async salesAdd() {
        cy.xpath(locator.datatestid.sales).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.click_add).click({multiple: true},{force: true})
        cy.wait(3000)
        cy.xpath(locator.datatestid.click_product).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.products1).click({multiple: true},{force: true},{timeout:30000})
        cy.get(':nth-child(4) > .chakra-input').type('5',{force: true})
        cy.xpath(locator.datatestid.input_money).type('2000000')
        cy.xpath(locator.datatestid.click_buy).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.click_close).click({multiple: true},{force: true})

        cy.wait(5000)

    }

    async multipleAdd() {
        cy.xpath(locator.datatestid.sales).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.click_add).click({multiple: true},{force: true})
        cy.wait(3000)
        cy.xpath(locator.datatestid.click_product).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.products1).click({multiple: true},{force: true},{timeout:30000})
        cy.xpath(locator.datatestid.click_product).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.products2).click({multiple: true},{force: true},{timeout:30000})
        cy.xpath(locator.datatestid.click_product).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.products3).click({multiple: true},{force: true},{timeout:30000})
        cy.get(':nth-child(1) > :nth-child(4) > .chakra-input').click().type('5').should('exist', {timeout: 2000})
        cy.get(':nth-child(2) > :nth-child(4) > .chakra-input').click().type('5').should('exist', {timeout: 2000})
        cy.get(':nth-child(3) > :nth-child(4) > .chakra-input').click().type('5').should('exist', {timeout: 2000})
        cy.xpath(locator.datatestid.input_money).type('5000000').should('exist', {timeout: 2000})
        cy.xpath(locator.datatestid.click_buy).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.click_close).click({multiple: true},{force: true})

        cy.wait(5000)

    }

    async salesSearch() {
        cy.xpath(locator.datatestid.sales).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.click_search).type('budi')

        cy.wait(5000)

    }
    async salesSearchInvalid() {
        cy.xpath(locator.datatestid.sales).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.click_search).type('diki')

        cy.wait(5000)

    }

}

module.exports = new SalesPages();
