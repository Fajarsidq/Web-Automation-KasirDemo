
const LoginPage = require('../../support/pages/login/login-page')
const SalesPages = require('../../support/pages/sales/sales-page')
const DasboardPage = require('../../support/pages/dasboard/Dasboard-page');



describe('Add sales', () => {
    before(()=>{


        LoginPage.urlLogin()
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()
    })

    it('verify user adds sales products',() => {

        SalesPages.salesAdd()
        DasboardPage.logout()
        

    })
})