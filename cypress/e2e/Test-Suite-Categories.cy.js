
const LoginPage = require('../support/pages/login/login-page')
const DasboardPage = require('../support/pages/dasboard/Dasboard-page')
const CategoriesPage = require('../support/pages/categories/categories-page')


describe('Test suite category',  function() {
    beforeEach(()=>{

        LoginPage.urlLogin()
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()
    })

    it('verify user added new category',() => {

        DasboardPage.clickCategories()
        CategoriesPage.categoriesAdd()
        DasboardPage.logout()
    })

    it('verify user searches for categories with the category searchbox feature',() => {

        CategoriesPage.inputCategories()
        DasboardPage.logout()

    })
    it('verify user added new category and without filling in the category name',() => {

        DasboardPage.clickCategories()
        CategoriesPage.AddwithoutName()
        DasboardPage.logout()
    })

    it('verify user added new category and without filling in the description name',() => {

        DasboardPage.clickCategories()
        CategoriesPage.AddwithoutDesc()
        DasboardPage.logout()
    })

    it('verify user added new category and without filling in the description name',() => {

        DasboardPage.clickCategories()
        CategoriesPage.AddwithoutAnyData()
        DasboardPage.logout()
    })



})