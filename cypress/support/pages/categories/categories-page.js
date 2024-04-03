const locatorFeature = require('../../locators/feature-Locator')
const locatorCategory = require('../../locators/category-locator')
const staticCategories = require('../../static_text/static-categories')




class CategoriesPages {

    async categoriesAdd() {
        cy.xpath(locatorFeature.datatestid.categories).click({multiple: true},{force: true})
        cy.wait(3000)
        cy.xpath(locatorCategory.datatestid.click_Add).click({multiple: true},{force: true})
        cy.xpath(locatorCategory.datatestid.click_name).type(staticCategories.categoriesPage.name).should('exist', {timeout: 2000})
        cy.xpath(locatorCategory.datatestid.click_desc).type(staticCategories.categoriesPage.desc).should('exist', {timeout: 2000})
        cy.xpath(locatorCategory.datatestid.click_save).click({multiple: true},{force: true})
        cy.wait(5000)
    }

    async AddwithoutDesc() {
        cy.xpath(locatorFeature.datatestid.categories).click({multiple: true},{force: true})
        cy.wait(3000)
        cy.xpath(locatorCategory.datatestid.click_Add).click({multiple: true},{force: true})
        cy.xpath(locatorCategory.datatestid.click_name).type(staticCategories.categoriesPage.name).should('exist', {timeout: 2000})
        cy.xpath(locatorCategory.datatestid.click_save).click({multiple: true},{force: true})
        cy.wait(5000)

    }

    async AddwithoutName() {
        cy.xpath(locatorFeature.datatestid.categories).click({multiple: true},{force: true})
        cy.wait(3000)
        cy.xpath(locatorCategory.datatestid.click_Add).click({multiple: true},{force: true})
        cy.xpath(locatorCategory.datatestid.click_desc).type(staticCategories.categoriesPage.name).should('exist', {timeout: 2000})
        cy.xpath(locatorCategory.datatestid.click_save).click({multiple: true},{force: true})
        cy.wait(5000)

    }

    async AddwithoutAnyData() {
        cy.xpath(locatorFeature.datatestid.categories).click({multiple: true},{force: true})
        cy.wait(3000)
        cy.xpath(locatorCategory.datatestid.click_Add).click({multiple: true},{force: true})
        cy.xpath(locatorCategory.datatestid.click_save).click({multiple: true},{force: true})
        cy.wait(5000)

    }

    async inputCategories() {
        cy.xpath(locatorFeature.datatestid.categories).click({multiple: true},{force: true}, {timeout: 10000})
        cy.wait(3000)
        cy.xpath(locatorCategory.datatestid.click_SearchBox).type('terbaru{enter}').should('exist', {timeout: 2000})
        cy.wait(5000)


    }
}

module.exports = new  CategoriesPages()