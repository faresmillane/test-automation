const { Builder, By, until } = require("selenium-webdriver");

const FirstTest = async () => {
    const driver = await new Builder()
    .withCapabilities({ browserName: "chrome" })
    .usingServer("http://localhost:4444/")
    .build();   
    await driver.get("https://www.selenium.dev/selenium/web/web-form.html");
    await driver.wait(until.elementLocated(By.id("my-text-id")), 5000);
    await driver.findElement(By.id("my-text-id")).sendKeys("inpuText");
    await driver.findElement(By.className("btn btn-outline-primary mt-3")).click();
    await driver.quit();
  };

  FirstTest();


