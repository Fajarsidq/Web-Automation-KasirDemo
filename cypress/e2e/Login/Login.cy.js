const LoginPage = require('../../support/pages/login/login-page')
const DasboardPage = require('../../support/pages/dasboard/Dasboard-page')


describe('User should be able to sign up', () => {
  it('Verify user login with registered credentials Email and Password', () => {

    LoginPage.urlLogin()
    LoginPage.fillEmail()
    LoginPage.fillPassword()
    LoginPage.clickLoginButton()
    DasboardPage.logout()
  })

})