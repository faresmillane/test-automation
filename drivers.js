const { Builder } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const safari = require('selenium-webdriver/safari');
const config = require("./config");

const chromedriver = async () => {
    try {
        let capabilities = config.capabilities[process.env.DRIVER];
        if(config.headless) {
            capabilities['goog:chromeOptions'].args.push("headless", "disable-gpu", "--no-sandbox", "window-size=1920,1080");
        };
        const driver = await new Builder()
        .withCapabilities(capabilities)
        .usingServer(config.hostname)
        .build();
        return driver;
    }
    catch (error) {
        throw new Error(`error : ${error} in chromedriver`);
    }
};

const geckodriver = async () => {
    try {
        if(config.headless) {
            options = new firefox.Options().headless();
            options.addArguments('--no-sandbox');
            options.addArguments("window-size=1920,1080");
        } else {
            options = new firefox.Options()
        }
        const driver = await new Builder()
        .withCapabilities(config.capabilities[process.env.DRIVER])
        .usingServer(config.hostname)
        .setFirefoxOptions(options)
        .build();
        return driver;
      }
    catch (error) {
        throw new Error(`error : ${error} in geckodriver`);
    }
};

const safaridriver = async () => {
    try {
        var driver = new Builder()
        .withCapabilities(config.capabilities[process.env.DRIVER])
        .usingServer(config.hostname)
        .build();
        return driver;
    }
    catch (error) {
        throw new Error(`error : ${error} in safaridriver`);
    }
};

module.exports = {
    chromedriver,
    geckodriver,
    safaridriver
};