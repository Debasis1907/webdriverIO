describe('Ecommerce Application',function(){
    it.skip('Login Page Title',function(){
        browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        browser.maximizeWindow()
        console.log(browser.getTitle())
        expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
        $('#username').setValue('rahulshettyacademy')
        const password = $('#password')
        password.setValue('learning123')
        browser.pause(3000)
        const btnSignIn = $('input[name="signin"]')
        btnSignIn.click()
        //btnSignIn.getAttribute('value') === 'Sign In'
        browser.waitUntil(() => btnSignIn.getAttribute('value') === 'Sign In',{timeout:4000,timeoutMsg:'Error message did not display'})
        const errMessage = $('.alert.alert').getText()
        console.log(errMessage)
        const message = $('p.text-center').getText()
        console.log(message)
        expect($('p.text-center')).toHaveTextContaining('(username is rahulshettyacademy and Password is learning)')
    })

    xit('Validate Login',() => {
        browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        browser.maximizeWindow()
        const username = $('#username')
        username.setValue('rahulshettyacademy')
        const password = $('#password')
        password.setValue('learning')
        browser.pause(3000)
        const btnSignIn = $('input[name="signin"]')
        btnSignIn.click()
        const link = $('*=Checkout')
        link.waitForExist()
        expect(browser).toHaveTitle('ProtoCommerce')
        expect(browser).toHaveUrlContaining('shop')
    })
})