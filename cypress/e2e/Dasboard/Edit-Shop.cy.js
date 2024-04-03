
const LoginPage = require('../../support/pages/login/login-page')
const DasboardPage = require('../../support/pages/dasboard/Dasboard-page');

function generateRandomUser(){
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    return "Toko Busana" + randomNumber;
}

var randomUsername = generateRandomUser();

describe('Edit shop name function',{testIsolation: false } ,() => {
    before(()=>{


    LoginPage.urlLogin()
    LoginPage.fillEmail()
    LoginPage.fillPassword()
    LoginPage.clickLoginButton()
})
    
    it('verify user edit shop name, email dan password',() => {

        DasboardPage.editshop(randomUsername)
        DasboardPage.logout()
    }) 

})


