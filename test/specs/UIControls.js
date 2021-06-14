const expectChai = require('chai').expect
describe('UI Controls',function(){
    xit('Verification of Radio buttton',function(){
        browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        //browser.maximizeWindow()
        const username = $('#username')
        username.setValue('rahulshettyacademy')
        const password = $('#password')
        password.setValue('learning')
        const radiobuttons = $$('.customradio')
        radiobuttons[1].click()
        //browser.pause(2500)
        const modal = $('.modal-body')
        modal.waitForDisplayed()
        $('#cancelBtn').click()
        console.log(radiobuttons[1].isSelected())
        radiobuttons[1].click()
        modal.waitForDisplayed()
        $('#okayBtn').click()
        radiobuttons[0].click()
        console.log(modal.isDisplayed())//step to tell whether modal is displayed or not
        expect(modal).not.toBeDisplayed()
        const dropdown = $('select.form-control')
        dropdown.selectByAttribute('value','teach')
        browser.pause(2000)
        dropdown.selectByVisibleText('Consultant')
        browser.pause(2000)
        dropdown.selectByIndex(0)
        browser.pause(2000)
        //expect(dropdown.getValue()).to.equal('stud')
        expectChai(dropdown.getValue()).to.equal('stud') //student
    })

    xit('Dynamic Dropdowns',() => {
        browser.url('https://rahulshettyacademy.com/AutomationPractice/')
        //browser.maximizeWindow()
        $('#autocomplete').setValue('Ind')
        browser.pause(2500)
        let items = $$('.ui-menu-item div')
        /*for(var i = 0;i<items.length;i++){
            console.log(items[i].getText())
            if(items[i].getText() === "India"){
                items[i].click()
                break
            }
        }*/
        const value = items.filter(item => item.getText()==="India")
        value[0].click()
        browser.pause(2000)
    })

    xit('Checkbox tests',() => {
        const element = $$('input[type="checkbox"]')
        element[1].click()
        console.log(element[1].isSelected())
        console.log(element[2].isSelected())
        browser.saveScreenshot("screenshot.png")
    })
})