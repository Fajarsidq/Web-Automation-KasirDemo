
const LoginPage = require('../../support/pages/login/login-page')
const DasboardPage = require('../../support/pages/dasboard/Dasboard-page')
const ProductPages = require('../../support/pages/product/product-page')


describe('Search Product', () => {
    before(()=>{


        LoginPage.urlLogin()
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()
    })

    it('Verify the user searches for the product name with the available names',() => {

        ProductPages.searchProduct()
        DasboardPage.logout()

    })
})