
const LoginPage = require('../../support/pages/login/login-page')
const DasboardPage = require('../../support/pages/dasboard/Dasboard-page');


describe('Sidebar Function', () => {
    before(()=>{


        LoginPage.urlLogin()
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()
    })

    it('verify user sidebar feature function',() => {

        DasboardPage.clickSales()
        DasboardPage.clickPurchases()
        DasboardPage.clickCategories()
        DasboardPage.clickProducts()
        DasboardPage.clickUsers()
        DasboardPage.clickCustomers()
        DasboardPage.logout()
    })
})