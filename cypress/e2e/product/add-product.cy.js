
const LoginPage = require('../../support/pages/login/login-page')
const ProductPages = require('../../support/pages/product/product-page')
const DasboardPage = require('../../support/pages/dasboard/Dasboard-page')



describe('Add Product', () => {
    before(()=>{


        LoginPage.urlLogin()
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()
    })

    it('verify user adds product',() => {

        ProductPages.productAdd()
        DasboardPage.logout()

    })
})