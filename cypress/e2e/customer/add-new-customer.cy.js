
const LoginPage = require('../../support/pages/login/login-page')
const CustomersPage = require('../../support/pages/customers/customers-page')
const DasboardPage = require('../../support/pages/dasboard/Dasboard-page');



describe('Add new customers', () => {
    before(()=>{


        LoginPage.urlLogin()
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()
    })

    it('verify user adds new customer data',() => {

        CustomersPage.customersAdd()
        DasboardPage.logout()

    })
})