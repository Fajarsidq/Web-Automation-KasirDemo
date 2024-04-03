
const LoginPage = require('../../support/pages/login/login-page')
const DasboardPage = require('../../support/pages/dasboard/Dasboard-page');




describe('Logout Account', {testIsolation: false },() => {
    before(()=>{


        LoginPage.urlLogin()
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()
    })
    it('verify user logout',() => {

        DasboardPage.logout()
        
    })
})

