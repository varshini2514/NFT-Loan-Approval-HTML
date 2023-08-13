const express = require('express')
const path = require('path');
//const puppeteer = require('puppeteer');
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.use(express.static(__dirname + "./"));

app.listen(port, () => {
  console.log(`Metamask integration tutorial running on ${port}`)
})