
const LoginPage = require('../../support/pages/login/login-page')
const DasboardPage = require('../../support/pages/dasboard/Dasboard-page')
const UserPages = require('../../support/pages/user/user-page')


describe('update user', () => {
    before(()=>{


        LoginPage.urlLogin()
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()
    })

    it('verify user update user data',() => {

        UserPages.userUpdate()
        DasboardPage.logout()

    })
})