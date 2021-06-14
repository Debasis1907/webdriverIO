const expectChai = require('chai').expect

describe('Functional Test Scenarios',() => {
    xit('scrolling and mouse over',() => {
        browser.url('https://rahulshettyacademy.com/AutomationPractice/')
        //browser.maximizeWindow()
        $('#mousehover').scrollIntoView()
        browser.pause(3000)
        $('#mousehover').moveTo()
        browser.pause(3000)
        $('=Top').click()
        browser.pause(3000)
    })

    xit('Alert Handles',() =>{
        browser.url('http://only-testing-blog.blogspot.com/2014/09/selectable.html')
        $('button').doubleClick()
        //browser.pause(2000)
        //console.log(browser.isAlertOpen)
        console.log(browser.getAlertText())
        //browser.acceptAlert()
        //browser.pause(3000)
    })

    xit('Webtables sort validation',() =>{
        browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        $('table tr th:nth-child(1)').click()
        browser.pause(2000)
        //retrieve the list of veggie names into array
        const veggieList = $$('table tr td:nth-child(1)')
        let OriginalveggieNames = veggieList.map(veggie => veggie.getText())
        console.log(OriginalveggieNames)
        veggies = OriginalveggieNames.slice()
        let sortedveggieNames = veggies.sort()
        expectChai(OriginalveggieNames).to.equal(sortedveggieNames)
    })

    xit('Webtables filter validation',() =>{
        browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        $('#search-field').setValue('Brinjal')
        const veggie = $$('table tr td:nth-child(1)')
        expect(veggie).toBeElementsArrayOfSize(1)
        console.log(veggie[0].getText())
        expect(veggie[0]).toHaveTextContaining('Tomato')
    })
})