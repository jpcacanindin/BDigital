const {By, Key, Builder, Browser} = require("selenium-webdriver");
const assert = require('assert');
require("chromedriver");

async function checkout(username, password) {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://qa-challenge.codesubmit.io");
    await driver.findElement(By.id("user-name")).sendKeys(username);
    await driver.findElement(By.id("password")).sendKeys(password);
    await driver.findElement(By.id("login-button")).click();
    
    await driver.get("https://qa-challenge.codesubmit.io/checkout-step-one.html");
    
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[1]/input")).sendKeys("John Paul");
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[2]/input")).sendKeys("Cacanindin");
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[3]/input")).sendKeys("1210");
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[2]/input")).click();
    
    let actUrl = await driver.getCurrentUrl();
    let expUrl = "https://qa-challenge.codesubmit.io/checkout-step-two.html";
    assert.deepStrictEqual(actUrl, expUrl);
    console.log("Test #1 success");
}

async function checkoutNegative(username, password) {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://qa-challenge.codesubmit.io");
    await driver.findElement(By.id("user-name")).sendKeys(username);
    await driver.findElement(By.id("password")).sendKeys(password);
    await driver.findElement(By.id("login-button")).click();
    
    await driver.get("https://qa-challenge.codesubmit.io/checkout-step-one.html");
    
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[2]/input")).sendKeys("Cacanindin");
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[3]/input")).sendKeys("1210");
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[2]/input")).click();
    
    let actError = await driver.findElement(By.className("error-message-container")).getText();
    let expError = "Error: First Name is required";
    
    assert.deepStrictEqual(actError, expError);
    console.log("Firstname empty success");

    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[2]/input")).sendKeys(Key.CONTROL + "a");
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[2]/input")).sendKeys(Key.DELETE);
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[3]/input")).sendKeys(Key.CONTROL + "a");
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[3]/input")).sendKeys(Key.DELETE);
    
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[1]/input")).sendKeys("John Paul");
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[2]/input")).sendKeys("");
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[3]/input")).sendKeys("1210");
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[2]/input")).click();
    

    actError = await driver.findElement(By.className("error-message-container")).getText();
    expError = "Error: Last Name is required";
    
    assert.deepStrictEqual(actError, expError);
    console.log("Lastname empty success");

    
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[1]/input")).sendKeys(Key.CONTROL + "a");
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[1]/input")).sendKeys(Key.DELETE);
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[3]/input")).sendKeys(Key.CONTROL + "a");
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[3]/input")).sendKeys(Key.DELETE);

    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[1]/input")).sendKeys("John Paul");
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[2]/input")).sendKeys("Cacanindin");
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[3]/input")).sendKeys("");
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[2]/input")).click();
    
    actError = await driver.findElement(By.className("error-message-container")).getText();
    expError = "Error: Postal Code is required";
    
    assert.deepStrictEqual(actError, expError);
    console.log("Postal Code empty success");

    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[1]/input")).sendKeys(Key.CONTROL + "a");
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[1]/input")).sendKeys(Key.DELETE);
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[2]/input")).sendKeys(Key.CONTROL + "a");
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[2]/input")).sendKeys(Key.DELETE);

    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[1]/input")).sendKeys("");
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[2]/input")).sendKeys("");
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[3]/input")).sendKeys("");
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[2]/input")).click();
    
    actError = await driver.findElement(By.className("error-message-container")).getText();
    expError = "Error: First Name is required";
    
    assert.deepStrictEqual(actError, expError);
    console.log("Emptyfield success");
    
}

checkout("standard_user", "secret_sauce");
checkoutNegative("standard_user", "secret_sauce");

