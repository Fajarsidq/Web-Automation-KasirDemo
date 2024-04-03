const locator = require('../../locators/product-locator')
const staticProduct = require('../../static_text/static-product')




class ProductPages {



    async productAdd() {
        cy.xpath(locator.datatestid.products).click({multiple: true},{force: true})
        cy.wait(3000)
        cy.xpath(locator.datatestid.click_add).click({multiple: true},{force: true},{timeout:3000})
        cy.xpath(locator.datatestid.click_name).type(staticProduct.productPage.name).should('exist', {timeout: 2000})
        cy.xpath(locator.datatestid.click_desc).type(staticProduct.productPage.desc).should('exist', {timeout: 2000})
        cy.xpath(locator.datatestid.click_Hargabeli).type(staticProduct.productPage.hargabeli).should('exist', {timeout: 2000})
        cy.xpath(locator.datatestid.click_Hargajual).type(staticProduct.productPage.hargajual).should('exist', {timeout: 2000})
        cy.xpath(locator.datatestid.click_3dots).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.click_SearchBox).type('Terbaru').should('exist', {timeout: 30000})
        cy.xpath(locator.datatestid.click_item1).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.click_save).dblclick({multiple: true},{force: true},{timeout: 300000})
        cy.wait(5000)

    }
    async updateProduct() {
        cy.xpath(locator.datatestid.products).click({ force: true }, { timeout: 10000 });
        cy.wait(3000)
        cy.xpath(locator.datatestid.click_3dots1).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.click_update).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.click_name).clear().type('kemeja kotak').should('exist', {timeout: 30000})
        cy.xpath(locator.datatestid.click_Hargabeli).clear().type('6000').should('exist', {timeout: 30000})
        cy.xpath(locator.datatestid.click_Hargajual).clear().type('11000').should('exist', {timeout: 30000})
        cy.xpath(locator.datatestid.click_save1).click({multiple: true},{force: true})
        cy.wait(5000)

    }

    async searchProduct() {
        cy.xpath(locator.datatestid.products).click({ force: true }, { timeout: 10000 });
        cy.wait(3000)
        cy.xpath(locator.datatestid.click_SearchBox).type('kemeja kota').should('exist', {timeout: 30000})
        cy.wait(5000)
    }

    async searchInvalidProduct() {
        cy.xpath(locator.datatestid.products).click({ force: true }, { timeout: 20000 });
        cy.wait(3000)
        cy.xpath(locator.datatestid.click_SearchBox).type('rok', {timeout: 30000})
        cy.wait(5000)
    }

}

module.exports = new ProductPages();
