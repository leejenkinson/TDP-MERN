const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");

describe("testing our trainers website", function () {
    this.timeout(100000);

    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("chrome").build();
        driver.manage().setTimeouts({ implicit: 50000 });
    });

    afterEach(async function () {
        driver.close();
    });

    it("open website to readall page", async function () {
        driver.get("http://localhost:3000/");

        await driver.findElement(By.xpath("/html/body/div/div/nav/ul/li[2]/a"))
            .click();

        insertText = await driver.findElement(By.xpath("/html/body/div/div/form/h4[1]")).getText()
            .then(function (value) {
                return value
            });

        assert.equal(insertText, "Insert values into the following boxes:");
    });

});