// packages
const puppeteer = require('puppeteer');

// main wrapper
(async () => {  
  // create a browser instance
  const browser = await puppeteer.launch();
  
  // create a page instance
  const page = await browser.newPage();
  
  // navigate to the target URL
  await page.goto('https://example.com');
  
  // take a screenshot of the web page 
  await page.screenshot({path: 'example.png'});
  
  // close the browser
  await browser.close();
  
})();
