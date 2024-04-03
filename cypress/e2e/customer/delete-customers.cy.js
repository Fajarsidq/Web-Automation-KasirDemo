
const LoginPage = require('../../support/pages/login/login-page')
const CustomersPage = require('../../support/pages/customers/customers-page')
const DasboardPage = require('../../support/pages/dasboard/Dasboard-page');



describe('Delete customers data', () => {
    before(()=>{


        LoginPage.urlLogin()
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()
    })

    it('verify user delete customer data',() => {

        CustomersPage.customersDelete()
        DasboardPage.logout()

    })
})