const expectChai = require('chai').expect

describe('ECommerce Application',() => {
    it('End to End Test',() => {
        var products = ["Blackberry","Nokia Edge"]
        browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        browser.maximizeWindow()
        $('#username').setValue('rahulshettyacademy')
        const password = $('#password')
        password.setValue('learning')
        browser.pause(3000)
        const btnSignIn = $('input[name="signin"]')
        btnSignIn.click()
        const checkoutLink = $('*=Checkout')
        checkoutLink.waitForExist()
        let cards = $$('.card')
        cards.filter(item => products.includes(item.$('h4 a').getText())).map(productcart => productcart.$('.btn-info').click())
        browser.pause(3500)
        checkoutLink.click()
        let productPrice = $$('tr td:nth-child(4) strong')
        let sumOfProducts = productPrice.map(price => parseInt(price.getText().split(".")[1].trim()))
                    .reduce((acc,price) => acc + price,0)

        console.log(sumOfProducts)
        let total = parseInt($('h3 strong').getText().split('.')[1].trim())
        console.log(total)
        expectChai(sumOfProducts).to.equal(total)
        $('.btn-success').click()
        $('#country').setValue('Ind')
        $('lds-ellipsis').waitForExist({reverse:true})
        $('=India').click()
        $('#checkbox2').click()
        $('[type="submit"]').click()
        expect($('.alert-success')).toHaveTextContaining('Success')
        browser.pause(3000)
        
    })
})