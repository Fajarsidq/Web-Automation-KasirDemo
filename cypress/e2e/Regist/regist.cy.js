const LoginPage = require('../../support/pages/login/login-page')
const RegisterPage = require('../../support/pages/register/register-page')


var randomEmail = generateRandomUser();

function generateRandomUser(){
	const time = new Date().getTime()
	return "Fajar"+time+"@gmail.com";
}

describe('User should be able to sign up', () => {
    it('Verify user login with registered credentials Email and Password', () => {


    RegisterPage.goHomepage()
    RegisterPage.fillName()
    RegisterPage.fillEmailRandom(randomEmail)
    RegisterPage.fillPassword()
    RegisterPage.clickSignUpBtn()
})
})