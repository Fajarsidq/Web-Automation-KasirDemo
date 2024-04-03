
const LoginPage = require('../support/pages/login/login-page')
const DasboardPage = require('../support/pages/dasboard/Dasboard-page');

function generateRandomUser(){
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    return "Toko Busana" + randomNumber;
}

var randomUsername = generateRandomUser();

describe('Edit shop name function',{testIsolation: false } ,() => {
    beforeEach(()=>{


        LoginPage.urlLogin()
        LoginPage.fillEmail()
        LoginPage.fillPassword()
        LoginPage.clickLoginButton()
        cy.clearAllLocalStorage()
})

        it('verify user sidebar feature function',() => {

            DasboardPage.clickSales()
            DasboardPage.clickPurchases()
            DasboardPage.clickCategories()
            DasboardPage.clickProducts()
            DasboardPage.clickUsers()
            DasboardPage.clickCustomers()
            DasboardPage.logout()
            
        })

        it('verify user edit shop name, email dan password',() => {

            DasboardPage.editshop(randomUsername)
            DasboardPage.logout()
        }) 

        it('verify user footer check',() => {

    
            DasboardPage.footer()
            DasboardPage.logout()
            
        })



})


