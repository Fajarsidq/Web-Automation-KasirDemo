
const LoginPage = require('../../support/pages/login/login-page')
const DasboardPage = require('../../support/pages/dasboard/Dasboard-page')
const CategoriesPage = require('../../support/pages/categories/categories-page')


describe('Searchbox function', () => {
    before(()=>{


        LoginPage.urlLogin()
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()
    })
    
    it('verify user searches for categories with the category searchbox feature',() => {

        CategoriesPage.inputCategories()
        DasboardPage.logout()

})
})