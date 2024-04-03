
const LoginPage = require('../support/pages/login/login-page')
const DasboardPage = require('../support/pages/dasboard/Dasboard-page')
const UserPages = require('../support/pages/user/user-page')


describe('Add New user', () => {
    beforeEach(()=>{


        LoginPage.urlLogin()
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()
    })

    it('verify user adds a new user',() => {

        UserPages.userAdd()
        DasboardPage.logout()

    })

    it('verify user delete user',() => {

        UserPages.DeleteUser()
        DasboardPage.logout()

    })
    it('verify user searches for a name with a invalid name',() => {

        UserPages.searchInvalidUser()
        DasboardPage.logout()

    })
    it('verify user searches for a name with a valid name',() => {

        UserPages.searchUser()
        DasboardPage.logout()

    })
})