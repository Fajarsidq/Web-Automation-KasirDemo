
const LoginPage = require('../support/pages/login/login-page')
const ProductPages = require('../support/pages/product/product-page')
const DasboardPage = require('../support/pages/dasboard/Dasboard-page');



describe('Test Suite Product', () => {
    beforeEach(()=>{


        LoginPage.urlLogin()
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()
    })

    it('verify user adds product',() => {

        ProductPages.productAdd()
        DasboardPage.logout()

    })

    it('Verify the user searches for the product name with the invalid names',() => {

        ProductPages.searchInvalidProduct()
        DasboardPage.logout()

    })

    it('Verify the user searches for the product name with the available names',() => {

        ProductPages.searchProduct()
        DasboardPage.logout()

    })

    it('verify user update product',() => {

        ProductPages.updateProduct()
        DasboardPage.logout()

    })

    it('verify user adds product',() => {

        ProductPages.productAdd()
        DasboardPage.logout()

    })
})