
const LoginPage = require('../../support/pages/login/login-page')
const SalesPages = require('../../support/pages/sales/sales-page')
const DasboardPage = require('../../support/pages/dasboard/Dasboard-page');



describe('search sales', () => {
    before(()=>{


        LoginPage.urlLogin()
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()
    })

    it('verify user search products',() => {

        SalesPages.salesSearch()
        DasboardPage.logout()
        

    })
})