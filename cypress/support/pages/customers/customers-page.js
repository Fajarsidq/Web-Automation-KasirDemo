
const locator = require('../../locators/customers-locator')
const statics = require('../../static_text/static-customers')




class CustomersPages {

    async customersAdd() {
        cy.xpath(locator.datatestid.customers).click({multiple: true},{force: true}).should('be.visible')
        cy.wait(3000)
        cy.xpath(locator.datatestid.click_add).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.click_name).type(statics.customersPage.name).should('exist', {timeout: 2000})
        cy.xpath(locator.datatestid.click_no).type(statics.customersPage.noHp).should('exist', {timeout: 2000})
        cy.xpath(locator.datatestid.click_Address).type(statics.customersPage.address).should('exist', {timeout: 2000})
        cy.xpath(locator.datatestid.click_desc).type(statics.customersPage.desc).should('exist', {timeout: 2000})
        cy.xpath(locator.datatestid.click_Save).click({multiple: true},{force: true})
        cy.wait(10000)

    }

    async customersUpdate() {
        cy.xpath(locator.datatestid.customers).click({multiple: true},{force: true}).should('be.visible',{timeout:10000})
        cy.wait(3000)
        cy.xpath(locator.datatestid.click_3dots).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.click_update).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.click_name).clear().type(statics.customersPage.updateName).should('exist', {timeout: 2000})
        cy.xpath(locator.datatestid.click_no).clear().type(statics.customersPage.updateNoHp).should('exist', {timeout: 2000})
        cy.xpath(locator.datatestid.click_Address).clear().type(statics.customersPage.updateAddres).should('exist', {timeout: 2000})
        cy.xpath(locator.datatestid.click_desc).clear().type(statics.customersPage.updateDesc).should('exist', {timeout: 2000})
        cy.xpath(locator.datatestid.click_Save).click({multiple: true},{force: true})
        cy.wait(10000)
    }

    async searchUser() {
        cy.xpath(locator.datatestid.customers).click({multiple: true},{force: true}).should('be.visible',{timeout:10000})
        cy.wait(3000)
        cy.xpath(locator.datatestid.click_search).type(statics.customersPage.name).should('exist', {timeout: 2000})
        cy.wait(5000)

    }

    async searchInvalidUser() {
        cy.xpath(locator.datatestid.customers).click({multiple: true},{force: true}).should('be.visible',{timeout:10000})
        cy.wait(3000)
        cy.xpath(locator.datatestid.click_search).type(statics.customersPage.invalidName).should('exist', {timeout: 2000})
        cy.wait(5000)

    }

    async customersDelete() {
        cy.xpath(locator.datatestid.customers).click({multiple: true},{force: true}).should('be.visible')
        cy.wait(3000)
        cy.xpath(locator.datatestid.click_3dots).click({multiple: true},{force: true}).should('be.visible',{timeout:10000})
        cy.xpath(locator.datatestid.click_delete).click({multiple: true},{force: true}).should('be.visible',{timeout:10000})
        cy.xpath(locator.datatestid.verify_delete).click({multiple: true},{force: true}).should('be.visible',{timeout:10000})
        cy.wait(8000)

    }
}

module.exports = new CustomersPages()