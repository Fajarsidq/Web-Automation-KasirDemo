
const LoginPage = require('../../support/pages/login/login-page')
const SalesPages = require('../../support/pages/sales/sales-page')
const DasboardPage = require('../../support/pages/dasboard/Dasboard-page');



describe('search invalid sales', () => {
    before(()=>{


        LoginPage.urlLogin()
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()
    })

    it('verify user search invalid ',() => {

        SalesPages.salesSearchInvalid()
        DasboardPage.logout()
        

    })
})