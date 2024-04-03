const staticText = require('../../static_text/static-user')
const locator = require('../../locators/user-locator')




class UserPages {



    async userAdd() {
        cy.xpath(locator.datatestid.users).click({multiple: true},{force: true})
        cy.wait(3000)
        cy.xpath(locator.datatestid.click_add).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.click_name).clear().type(staticText.userPage.name)
        cy.xpath(locator.datatestid.click_email).clear().type(staticText.userPage.email)
        cy.xpath(locator.datatestid.click_password).clear().type(staticText.userPage.password)
        cy.xpath(locator.datatestid.signup_button).click({force: true},{Timeout:10000})
        cy.wait(5000)

    }

    async userUpdate() {
        cy.xpath(locator.datatestid.users).click({multiple: true},{force: true})
        cy.wait(3000)
        cy.xpath(locator.datatestid.click_3dots).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.click_update).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.click_name).clear().type(staticText.userPage.updateName)
        cy.xpath(locator.datatestid.click_email).clear().type(staticText.userPage.updateEmail)
        cy.xpath(locator.datatestid.click_password).clear().type(staticText.userPage.updatePassword)
        cy.xpath(locator.datatestid.signup_button).click({force: true},{Timeout:10000})
        cy.wait(5000)

    }

    async searchUser() {
        cy.xpath(locator.datatestid.users).click({multiple: true},{force: true})
        cy.wait(3000)
        cy.xpath(locator.datatestid.click_searchbox).type(staticText.userPage.name)
        cy.wait(5000)
        
    }

    async searchInvalidUser() {
        cy.xpath(locator.datatestid.users).click({multiple: true},{force: true})
        cy.wait(3000)
        cy.xpath(locator.datatestid.click_searchbox).type(staticText.userPage.invalidName)
        cy.wait(5000)
        
    }

    async DeleteUser() {
        cy.xpath(locator.datatestid.users).click({multiple: true},{force: true})
        cy.wait(3000)
        cy.xpath(locator.datatestid.click_3dots).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.click_delete).click({multiple: true},{force: true})
        cy.xpath(locator.datatestid.verify_delete).click({multiple: true},{force: true})
        cy.wait(5000)


        
    }
}

module.exports = new UserPages();
