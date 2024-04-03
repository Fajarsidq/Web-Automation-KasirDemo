
const LoginPage = require('../../support/pages/login/login-page')
const DasboardPage = require('../../support/pages/dasboard/Dasboard-page')
const ProductPages = require('../../support/pages/product/product-page')


describe('Update Product', () => {
    before(()=>{


        LoginPage.urlLogin()
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()
    })

    it('verify user update product',() => {

        ProductPages.updateProduct()
        DasboardPage.logout()

    })
})