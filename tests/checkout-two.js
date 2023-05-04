const {By, Key, Builder, Browser} = require("selenium-webdriver");
const assert = require('assert');
require("chromedriver");

async function checkout(username, password) {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://qa-challenge.codesubmit.io");
    await driver.findElement(By.id("user-name")).sendKeys(username);
    await driver.findElement(By.id("password")).sendKeys(password);
    await driver.findElement(By.id("login-button")).click();
    
    await driver.get("https://qa-challenge.codesubmit.io/checkout-step-two.html");
    let info1 = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[1]")).getText();
    let info2 = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[2]")).getText();
    let info3 = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[3]")).getText();
    let info4 = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[4]")).getText();
    let info5 = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[5]")).getText();
    let info6 = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[6]")).getText();
    let info7 = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[7]")).getText();
    let info8 = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[8]")).getText();

    assert.strictEqual(info1, "Payment Information");
    console.log("Test #1 success")
    assert.strictEqual(info2, "SauceCard #31337");
    console.log("Test #2 success")
    assert.strictEqual(info3, "Shipping Information");
    console.log("Test #3 success")
    assert.strictEqual(info4, "Free Pony Express Delivery!");
    console.log("Test #4 success")
    assert.strictEqual(info5, "Price Total");
    console.log("Test #5 success")
    assert.strictEqual(info6, "Item total: $0");
    console.log("Test #6 success")
    assert.strictEqual(info7, "Tax: $0.00");
    console.log("Test #7 success")
    assert.strictEqual(info8, "Total: $0.00");
    console.log("Test #8 success")

   await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[9]/button[2]")).click();

   let actUrl = await driver.getCurrentUrl();
   let expUrl = "https://qa-challenge.codesubmit.io/checkout-complete.html";
   assert.deepStrictEqual(actUrl, expUrl);
   console.log("Test #9 success");
}

checkout("standard_user", "secret_sauce");