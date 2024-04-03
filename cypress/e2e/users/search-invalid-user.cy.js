
const LoginPage = require('../../support/pages/login/login-page')
const DasboardPage = require('../../support/pages/dasboard/Dasboard-page')
const UserPages = require('../../support/pages/user/user-page')


describe('search invalid user', () => {
    before(()=>{


        LoginPage.urlLogin()
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()
    })

    it('verify user searches for a name with a invalid name',() => {

        UserPages.searchInvalidUser()
        DasboardPage.logout()

    })
})