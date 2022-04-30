const express = require('express')
const puppeteer = require('puppeteer');
const app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/main.html')
})


async function main(data) {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto('http://www.magtifun.ge/', { waitUntil: 'networkidle0' }); // wait until page load
    await page.type('#user', data.phone);
    await page.type('#password', data.password);
    // click and wait for navigation
    await page.evaluate(() => {
        document.querySelector('input[type=submit]').click();
    });
    await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);
    await page.type('#recipient', data.phone2);
    await page.type('#message_body', data.text);
    await page.evaluate(() => {
        document.querySelector('input[type=submit]').click();
    });
    await browser.close();
}

app.post('/api',(req, res) => {
    const data = req.body;
    let errors = [];
    if(!data.phone) {
        errors.push("phone")
    }
    if(!data.password) {
        errors.push("password")
    }
    if(!data.phone2) {
        errors.push("phone2")
    }
    if(!data.text) {
        res.type('application/json')
        errors.push("text")
    }
    if(errors.length>0) {
        res.type('application/json')
        res.json({status:"failed",error:errors})
        return;
    }
    
    main(data)
    res.json({status:"success"})
})

app.listen( process.env.PORT || 3000)