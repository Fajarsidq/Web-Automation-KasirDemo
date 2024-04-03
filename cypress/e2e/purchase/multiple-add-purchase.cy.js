
const LoginPage = require('../../support/pages/login/login-page')
const PurchasePages = require('../../support/pages/purchase/purchase-page')
const DasboardPage = require('../../support/pages/dasboard/Dasboard-page');



describe('Multiple Add purchase', () => {
    before(()=>{


        LoginPage.urlLogin()
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()
    })

    it('User verification adds multiple product purchases',() => {

        PurchasePages.multipleAdd()
        DasboardPage.logout()

    })
})