const {By, Key, Builder, Browser} = require("selenium-webdriver");
const assert = require('assert');
require("chromedriver");

async function loginStandardUser(){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://qa-challenge.codesubmit.io");

   

    const username = "standard_user";
    const password = "secret_sauce";

    await driver.findElement(By.id("user-name")).sendKeys(username);
    await driver.findElement(By.id("password")).sendKeys(password);
    await driver.findElement(By.id("login-button")).click();

    let actUrl = await driver.getCurrentUrl();
    const expUrl = "https://qa-challenge.codesubmit.io/inventory.html";

    assert.deepStrictEqual(actUrl, expUrl);
    console.log("Test #1 success");

}

async function loginLockedOutUser(){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://qa-challenge.codesubmit.io");

    let actTitle = await driver.getTitle();
    const expTitle = "Swag Labs";

    assert.deepStrictEqual(actTitle, expTitle);
    console.log("Test #1 success");

    const username = "locked_out_user";
    const password = "secret_sauce";

    await driver.findElement(By.id("user-name")).sendKeys(username);
    await driver.findElement(By.id("password")).sendKeys(password);
    await driver.findElement(By.id("login-button")).click();

    let actError = await driver.findElement(By.className("error-message-container")).getText();
    let expError = "Epic sadface: Sorry, this user has been locked out.";
    
    assert.deepStrictEqual(actError, expError);
    console.log("Test #2 success");
}

async function loginNotExistingUser(){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://qa-challenge.codesubmit.io");

    let actTitle = await driver.getTitle();
    const expTitle = "Swag Labs";

    assert.deepStrictEqual(actTitle, expTitle);
    console.log("Test #1 success");

    const username = "username";
    const password = "password";

    await driver.findElement(By.id("user-name")).sendKeys(username);
    await driver.findElement(By.id("password")).sendKeys(password);
    await driver.findElement(By.id("login-button")).click();

    let actError = await driver.findElement(By.className("error-message-container")).getText();
    let expError = "Epic sadface: Username and password do not match any user in this service";
    
    assert.deepStrictEqual(actError, expError);
    console.log("Test #2 success");
}

loginStandardUser();
loginLockedOutUser();
loginNotExistingUser();


