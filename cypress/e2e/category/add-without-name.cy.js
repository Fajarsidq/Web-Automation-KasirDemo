

const LoginPage = require('../../support/pages/login/login-page')
const DasboardPage = require('../../support/pages/dasboard/Dasboard-page')
const CategoriesPage = require('../../support/pages/categories/categories-page')


describe('add new category', () => {
    before(()=>{


        LoginPage.urlLogin()
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()
    })

    it('verify user added new category and without filling in the category name',() => {

        DasboardPage.clickCategories()
        CategoriesPage.AddwithoutName()
        DasboardPage.logout()
    })
})