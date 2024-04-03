
const LoginPage = require('../support/pages/login/login-page')
const CustomersPage = require('../support/pages/customers/customers-page')
const DasboardPage = require('../support/pages/dasboard/Dasboard-page');


describe('Test suite customers',  function() {
    beforeEach(()=>{

        LoginPage.urlLogin()
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()
    

    })


    it('verify user adds new customer data',() => {

        CustomersPage.customersAdd()
        DasboardPage.logout()

    })
    it('Verify the customer name search with the registered name',() => {

        CustomersPage.searchUser()
        DasboardPage.logout()

    })
    it('Verify the customer name search with the unregistered name',() => {

        CustomersPage.searchInvalidUser()
        DasboardPage.logout()

    })
    it('verify user update customer data',() => {

        CustomersPage.customersUpdate()
        DasboardPage.logout()

    })

    it('verify user delete customer data',() => {

        CustomersPage.customersDelete()
        DasboardPage.logout()

    })
})
