
const LoginPage = require('../../support/pages/login/login-page')
const DasboardPage = require('../../support/pages/dasboard/Dasboard-page');



describe('Check Footer function', {testIsolation: false },() => {
    before(()=>{


        LoginPage.urlLogin()
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()
    })
    it('verify user footer check',() => {

        DasboardPage.footer()
        DasboardPage.logout()
        
    })
})

