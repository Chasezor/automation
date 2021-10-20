// Lines 2 through 6 are our boilerplate lines of code, we need them for our tests to work
import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// First we're going to navigate to Google.com
beforeAll(async () => {
    await (await driver).get('http://127.0.0.1:5500/movieList/index.html')
})

// And after our test has completed, we want to close our browser
afterAll(async () => {
    await (await driver).quit()
})

// This test will require you to change some values in order to get your tests up and running
// You'll want to change each of the commented out pieces below
test('I can auto-make-you ', async () => {

    // // For this line you'll need to put the name of the search bar which you can find by inspecting that element in Chrome
    // let searchBar = await driver.findElement(By.name('q'))
    
    // // This time you'll just finish this string with something you want to search on Google, make sure you leanve that \n !
    // await searchBar.sendKeys('robots\n')

    // // This line will pause our automation so you can see your search!
    // await driver.sleep(2000)

    // // We now want our automation to get the search bar again since we're on a new page
    // searchBar = await driver.findElement(By.name('q'))

    // // We'll use this line to clear out our old input.
    // await searchBar.clear() 

    // // Let's do another search!
    // await searchBar.sendKeys('spaceships\n')

    // await driver.sleep(2000)

    // searchBar = await driver.findElement(By.name('q'))
    // await searchBar.clear() 

    // // Let's do another search!
    // await searchBar.sendKeys('souls\n')

    // await driver.sleep(2000)




    ///Goal get input field and button tags 
    // then do a simple input and then click on the button 
    // this is going to be something like this. 
    let searchBar = await driver.findElement(By.id('input'))
    await searchBar.sendKeys('Dune')
    await driver.findElement(By.id('btn')).click()
    await searchBar.sendKeys('Dune2')
    await driver.findElement(By.id('btn')).click()
    await searchBar.sendKeys('Dune3')
    await driver.findElement(By.id('btn')).click()
    await searchBar.sendKeys('Dune4')
    await driver.findElement(By.id('btn')).click()
    await searchBar.sendKeys('Dune5')
    await driver.findElement(By.id('btn')).click()
    await searchBar.sendKeys('Dune6')
    await driver.findElement(By.id('btn')).click()
    await searchBar.sendKeys('Dune7')
    await driver.findElement(By.id('btn')).click()
    await driver.sleep(2000)


})