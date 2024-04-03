
const LoginPage = require('../../support/pages/login/login-page')
const CustomersPage = require('../../support/pages/customers/customers-page')
const DasboardPage = require('../../support/pages/dasboard/Dasboard-page');



describe('Search customers', () => {
    before(()=>{


        LoginPage.urlLogin()
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()
    })

    it('Verify the customer name search with the registered name',() => {

        CustomersPage.searchUser()
        DasboardPage.logout()

    })
})