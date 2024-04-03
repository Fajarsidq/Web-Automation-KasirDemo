const LoginPage = require('../support/pages/login/login-page')
const DasboardPage = require('../support/pages/dasboard/Dasboard-page');
const invalidloginPage = require('../support/pages/login/invalidlogin-page')
const RegisterPage = require('../support/pages/register/register-page')
const invalidStaticLogin = require('../support/static_text/static-Login')



describe('User should be able to sign up', { testIsolation: false}, () => {
    beforeEach(()=>{ 

        RegisterPage.goHomepage()
    
    
    })
        it('Verify user login without using email and password', () => {
            
            invalidloginPage.buttondaftar()
            LoginPage.clickLoginButton()
        })
            it('Verify user login without using Email', () => {
    
            invalidloginPage.buttondaftar()
            LoginPage.fillPassword()
            LoginPage.clickLoginButton()
        })
            it('Verify user login without using password', () => {
    
            invalidloginPage.buttondaftar()
            LoginPage.fillEmail()
            LoginPage.clickLoginButton()
        })
            it('Verify user login with an unregistered Password', () => {
    
            invalidloginPage.buttondaftar()
            LoginPage.fillEmail()
            invalidloginPage.invalidfillPassword()
            LoginPage.clickLoginButton()
    
        })
            it('Verify user login with an unregistered Email', () => {
    
            invalidloginPage.buttondaftar()
            invalidloginPage.invalidfillEmail()
            LoginPage.fillPassword()
            LoginPage.clickLoginButton()
    
        })
    
})

