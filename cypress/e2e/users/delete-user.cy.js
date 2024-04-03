
const LoginPage = require('../../support/pages/login/login-page')
const DasboardPage = require('../../support/pages/dasboard/Dasboard-page')
const UserPages = require('../../support/pages/user/user-page')


describe('Delete User', () => {
    before(()=>{


        LoginPage.urlLogin()
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()
    })

    it('verify user delete user',() => {

        UserPages.DeleteUser()
        DasboardPage.logout()

    })
})