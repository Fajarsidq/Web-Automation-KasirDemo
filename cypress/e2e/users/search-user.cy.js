
const LoginPage = require('../../support/pages/login/login-page')
const DasboardPage = require('../../support/pages/dasboard/Dasboard-page')
const UserPages = require('../../support/pages/user/user-page')


describe('search user', () => {
    before(()=>{


        LoginPage.urlLogin()
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()
    })

    it('verify user searches for a name with a valid name',() => {

        UserPages.searchUser()
        DasboardPage.logout()

    })
})