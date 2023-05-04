const {By, Key, Builder, Browser} = require("selenium-webdriver");
const assert = require('assert');
require("chromedriver");

async function endToEnd(username, password){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://qa-challenge.codesubmit.io");

    await driver.findElement(By.id("user-name")).sendKeys(username);
    await driver.findElement(By.id("password")).sendKeys(password);
    await driver.findElement(By.id("login-button")).click();

    let actUrl = await driver.getCurrentUrl();
    let expUrl = "https://qa-challenge.codesubmit.io/inventory.html";

    assert.deepStrictEqual(actUrl, expUrl);
    console.log("Inventory: Test #1 success");

    let item1Title = await driver.findElement(By.id("item_0_title_link")).getText();
    let item1Desc = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div[2]/div[1]/div")).getText();
    let item1Pric = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[2]/div[2]/div[2]/div")).getText();
    await driver.findElement(By.id("add-to-cart-sauce-labs-bike-light")).click();

    let item2Title = await driver.findElement(By.id("item_1_title_link")).getText();
    let item2Desc = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[3]/div[2]/div[1]/div")).getText();
    let item2Pric = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[3]/div[2]/div[2]/div")).getText();
    await driver.findElement(By.id("add-to-cart-sauce-labs-bolt-t-shirt")).click();
   
    let item3Title = await driver.findElement(By.id("item_2_title_link")).getText();
    let item3Desc = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[5]/div[2]/div[1]/div")).getText();
    let item3Pric = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[5]/div[2]/div[2]/div")).getText();
    await driver.findElement(By.id("add-to-cart-sauce-labs-onesie")).click();
    
    let item4Title = await driver.findElement(By.id("item_3_title_link")).getText();
    let item4Desc = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[6]/div[2]/div[1]/div")).getText();
    let item4Pric = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[6]/div[2]/div[2]/div")).getText();
    await driver.findElement(By.id("add-to-cart-test.allthethings()-t-shirt-(red)")).click();

    let item5Title = await driver.findElement(By.id("item_4_title_link")).getText();
    let item5Desc = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[1]/div[2]/div[1]/div")).getText();
    let item5Pric = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[1]/div[2]/div[2]/div")).getText();
    await driver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click();
    
    let item6Title = await driver.findElement(By.id("item_5_title_link")).getText();
    let item6Desc = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[4]/div[2]/div[1]/div")).getText();
    let item6Pric = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/div/div[4]/div[2]/div[2]/div")).getText();
    await driver.findElement(By.id("add-to-cart-sauce-labs-fleece-jacket")).click();
    
    await driver.findElement(By.id("shopping_cart_container")).click();

    actUrl = await driver.getCurrentUrl();
    expUrl = "https://qa-challenge.codesubmit.io/cart.html";

    assert.deepStrictEqual(actUrl, expUrl);
    console.log("Inventory: Test #1 success");

    let exItem1Title = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[3]/div[2]/a/div")).getText();
    assert.strictEqual(item1Title, exItem1Title);
    let exItem1Desc = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[3]/div[2]/div[1]")).getText();
    assert.strictEqual(item1Desc, exItem1Desc);
    let exItem1Pric = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[3]/div[2]/div[2]/div")).getText();
    assert.strictEqual(item1Pric, exItem1Pric);
    console.log("Cart: Test #2 success")

    let exItem2Title = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[4]/div[2]/a/div")).getText();
    assert.strictEqual(item2Title, exItem2Title);
    let exItem2Desc = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[4]/div[2]/div[1]")).getText();
    assert.strictEqual(item2Desc, exItem2Desc);
    let exItem2Pric = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[4]/div[2]/div[2]/div")).getText();
    assert.strictEqual(item2Pric, exItem2Pric);
    console.log("Cart: Test #3 success")

    let exItem3Title = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[5]/div[2]/a/div")).getText();
    assert.strictEqual(item3Title, exItem3Title);
    let exItem3Desc = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[5]/div[2]/div[1]")).getText();
    assert.strictEqual(item3Desc, exItem3Desc);
    let exItem3Pric = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[5]/div[2]/div[2]/div")).getText();
    assert.strictEqual(item3Pric, exItem3Pric);
    console.log("Cart: Test #4 success")

    let exItem4Title = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[6]/div[2]/a/div")).getText();
    assert.strictEqual(item4Title, exItem4Title);
    let exItem4Desc = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[6]/div[2]/div[1]")).getText();
    assert.strictEqual(item4Desc, exItem4Desc);
    let exItem4Pric = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[6]/div[2]/div[2]/div")).getText();
    assert.strictEqual(item4Pric, exItem4Pric);
    console.log("Cart: Test #5 success")

    let exItem5Title = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[7]/div[2]/a/div")).getText();
    assert.strictEqual(item5Title, exItem5Title);
    let exItem5Desc = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[7]/div[2]/div[1]")).getText();
    assert.strictEqual(item5Desc, exItem5Desc);
    let exItem5Pric = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[7]/div[2]/div[2]/div")).getText();
    assert.strictEqual(item5Pric, exItem5Pric);
    console.log("Cart: Test #6 success")

    let exItem6Title = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[8]/div[2]/a/div")).getText();
    assert.strictEqual(item6Title, exItem6Title);
    let exItem6Desc = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[8]/div[2]/div[1]")).getText();
    assert.strictEqual(item6Desc, exItem6Desc);
    let exItem6Pric = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[8]/div[2]/div[2]/div")).getText();
    assert.strictEqual(item6Pric, exItem6Pric);
    console.log("Cart: Test #7 success")

    await driver.findElement(By.id("checkout")).click();

    actUrl = await driver.getCurrentUrl();
    expUrl = "https://qa-challenge.codesubmit.io/checkout-step-one.html";

    assert.deepStrictEqual(actUrl, expUrl);
    console.log("Checkout1: Test #1 success");

    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[1]/input")).sendKeys("John Paul");
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[2]/input")).sendKeys("Cacanindin");
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[1]/div[3]/input")).sendKeys("1210");
    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/form/div[2]/input")).click();

    actUrl = await driver.getCurrentUrl();
    expUrl = "https://qa-challenge.codesubmit.io/checkout-step-two.html";

    assert.deepStrictEqual(actUrl, expUrl);
    console.log("Checkout2: Test #1 success");

    exItem1Title = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[3]/div[2]/a/div")).getText();
    assert.strictEqual(item1Title, exItem1Title);
    exItem1Desc = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[3]/div[2]/div[1]")).getText();
    assert.strictEqual(item1Desc, exItem1Desc);
    exItem1Pric = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[3]/div[2]/div[2]/div")).getText();
    assert.strictEqual(item1Desc, exItem1Desc);
    console.log("Checkout2: Test #2 success");

    exItem2Title = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[4]/div[2]/a/div")).getText();
    assert.strictEqual(item2Title, exItem2Title);
    exItem2Desc = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[4]/div[2]/div[1]")).getText();
    assert.strictEqual(item2Desc, exItem2Desc);
    exItem2Pric = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[4]/div[2]/div[2]/div")).getText();
    assert.strictEqual(item2Pric, exItem2Pric);
    console.log("Checkout2: Test #3 success");

    exItem3Title = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[5]/div[2]/a/div")).getText();
    assert.strictEqual(item3Title, exItem3Title);
    exItem3Desc = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[5]/div[2]/div[1]")).getText();
    assert.strictEqual(item3Desc, exItem3Desc);
    exItem3Pric = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[5]/div[2]/div[2]/div")).getText();
    assert.strictEqual(item3Pric, exItem3Pric);
    console.log("Checkout2: Test #4 success");

    exItem4Title = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[6]/div[2]/a/div")).getText();
    assert.strictEqual(item4Title, exItem4Title);
    exItem4Desc = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[6]/div[2]/div[1]")).getText();
    assert.strictEqual(item4Desc, exItem4Desc);
    exItem4Pric = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[6]/div[2]/div[2]/div")).getText();
    assert.strictEqual(item4Pric, exItem4Pric);
    console.log("Checkout2: Test #5 success");

    exItem5Title = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[7]/div[2]/a/div")).getText();
    assert.strictEqual(item5Title, exItem5Title);
    exItem5Desc = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[7]/div[2]/div[1]")).getText();
    assert.strictEqual(item5Desc, exItem5Desc);
    exItem5Pric = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[7]/div[2]/div[2]/div")).getText();
    assert.strictEqual(item5Pric, exItem5Pric);
    console.log("Checkout2: Test #6 success");

    exItem6Title = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[8]/div[2]/a/div")).getText();
    assert.strictEqual(item6Title, exItem6Title);
    exItem6Desc = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[8]/div[2]/div[1]")).getText();
    assert.strictEqual(item6Desc, exItem6Desc);
    exItem6Pric = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[2]/div/div[1]/div[8]/div[2]/div[2]/div")).getText();
    assert.strictEqual(item6Pric, exItem6Pric);
    console.log("Checkout2: Test #7 success");

    let info6 = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[6]")).getText();
    info6 = parseFloat(info6.replace("Item total: $", ""));
    let info7 = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[7]")).getText();
    info7 = parseFloat(info7.replace("Tax: $", ""));
    let info8 = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[8]")).getText();
    info8 = parseFloat(info8.replace("Total: $", ""));
    
    
    exItem1Pric = parseFloat(exItem1Pric.replace("$", ""));
    exItem2Pric = parseFloat(exItem2Pric.replace("$", ""));
    exItem3Pric = parseFloat(exItem3Pric.replace("$", ""));
    exItem4Pric = parseFloat(exItem4Pric.replace("$", ""));
    exItem5Pric = parseFloat(exItem5Pric.replace("$", ""));
    exItem6Pric = parseFloat(exItem6Pric.replace("$", ""));

    let itemTotal = exItem1Pric + exItem2Pric + exItem3Pric + exItem4Pric + exItem5Pric + exItem6Pric;
    let tax = itemTotal *.08;
    tax = parseFloat(tax.toFixed(1));
    let total = tax + itemTotal;

    
    assert.strictEqual(info6, itemTotal);
    console.log("Checkout2: Test #8 success")
    assert.strictEqual(info7, tax);
    console.log("Checkout2: Test #9 success")
    assert.strictEqual(info8, total)
    console.log("Checkout2: Test #10 success")
    

    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div[2]/div[9]/button[2]")).click();

    actUrl = await driver.getCurrentUrl();
    expUrl = "https://qa-challenge.codesubmit.io/checkout-complete.html";

    assert.deepStrictEqual(actUrl, expUrl);
    console.log("Complete: Test #1 success");

    await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/button")).click();
    
    actUrl = await driver.getCurrentUrl();
    expUrl = "https://qa-challenge.codesubmit.io/inventory.html";

    assert.deepStrictEqual(actUrl, expUrl);
    console.log("Return: Test #1 success");

    
}
endToEnd("standard_user", "secret_sauce");