describe('Frames Switch',() => {
    xit('Frames Concept',() => {
        browser.url('http://demo.guru99.com/test/guru99home/')
        browser.switchToFrame($('#a077aa5e'))
        $('a img').click()
        browser.pause(2500)
        console.log(browser.getTitle())
        browser.switchToFrame(null)
        console.log(browser.getTitle())
    })
})