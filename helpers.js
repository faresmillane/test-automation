const drivers = require("./drivers");
const { By, Key, until } = require('selenium-webdriver');
const selectors = require("./selectors");
let driver;

const initDriver = async () => {
    try {
      switch (process.env.DRIVER) {
        case 'chrome':
          driver = await drivers.chromedriver('desk');
          break;
        case 'firefox':
          driver = await drivers.geckodriver();
          break;
        case 'safari':
          driver = await drivers.safaridriver();
          break;
        case 'mobile':
          driver = await drivers.chromedriver('mob');
          break;
        default:
          console.log(`Sorry, we are not configuration for ${process.env.DRIVER}.`);
      }
    }
    catch (error) {
      throw Error;
    }
};

const getElement = async (element) => {
  try {
    if(element.includes("ID=")) {
      elm = element.replace("ID=", "");
      el = await driver.findElement(By.id(elm));
      return el;
    } else if (element.includes("SELECTOR=")){
      elm = element.replace("SELECTOR=", "");
      el = await driver.findElement(By.css(elm));
      return el;
    } else if (element.includes("XPATH=")){
      elm = element.replace("XPATH=", "");
      el = await driver.findElement(By.xpath(elm));
      return el;
    } else if (element.includes("NAME=")){
      elm = element.replace("NAME=", "");
      el = await driver.findElement(By.name(elm));
      return el;
    } else if(element.includes("CLASS=")) {
      elm = element.replace("CLASS=", "");
      el = await driver.findElement(By.className(elm));
      return el;
    };
  }
  catch (error){
    throw Error;
  }
};

const waitToSeeElement = async (element) => {
  try {
    const timeout = 10000;
    if(element.includes("ID=")) {
      elm = element.replace("ID=", "");
      await driver.wait(until.elementLocated(By.id(elm)), timeout);
    } else if (element.includes("SELECTOR=")){
      elm = element.replace("SELECTOR=", "");
      await driver.wait(until.elementLocated(By.css(elm)), timeout);
    } else if (element.includes("XPATH=")){
      elm = element.replace("XPATH=", "");
      await driver.wait(until.elementLocated(By.xpath(elm)), timeout);
    } else if (element.includes("NAME=")){
      elm = element.replace("NAME=", "");
      await driver.wait(until.elementLocated(By.name(elm)), timeout);
    } else if(element.includes("CLASS=")) {
      elm = element.replace("CLASS=", "");
      await driver.wait(until.elementLocated(By.className(elm)), timeout);
    };
  }
  catch (error){
    throw Error;
  }
};

const getUrl = async (url) => {
  try {
    await driver.get(url);
    }
  catch (error) {
    throw Error;
  }
};

const wait = async (milliseconds) => {
  try {
    return await new Promise(resolve => setTimeout(resolve, milliseconds));
  }
  catch (error) {
    throw Error;
  };
};

const findElement = async (element) => {
  try {
    const el = await getElement(element);
    if(el) {
        return el;
    } else {
        return false;
    }
  }
  catch (error) {
    throw Error;
  }
};

const fillText = async (elm, text) => {
  try {
      const el = await getElement(elm);
      await el.sendKeys(text);
      
  }
  catch (error) {
    throw Error;
  }
};

const click = async (element) => {
  try {
      let el = await getElement(element);
      await el.click()
  }
  catch (error) {
    throw Error;
  }
};

const deleteAllCookies = async () => {
  try {
      await driver.manage().deleteAllCookies();
  }
  catch (error) {
    throw Error;
  }
};

const maximizeWindow = async () => {
  try {
      await driver.manage().window().maximize();
  }
  catch (error) {
    throw Error;
  }
};

const clickEnter = async (element) => {
  try {
    let el = 'gLFyf gsfi';
    await driver.findElement(By.className(el)).sendKeys(Key.ENTER);
  }
  catch (error) {
    throw Error;
  }
};

const quitDriver = async () => {
  try {
      await driver.navigate().refresh();  
      await driver.quit();
  }
  catch (error) {
    throw Error;
  }
};

module.exports = {
  initDriver,
  getElement,
  findElement,
  fillText,
  wait,
  click,
  getUrl,
  deleteAllCookies,
  maximizeWindow,
  clickEnter,
  quitDriver,
  waitToSeeElement
};