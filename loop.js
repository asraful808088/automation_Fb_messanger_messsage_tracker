const puppeteer = require("puppeteer");
const { observer } = require("./tools/observer");
const inputtype = require("./tools/typer");
const pressable = require("./tools/press");
const sendMessage = require("./tools/sendMessage");
const fs = require("fs");
const regex = /https:\/\/www\.facebook\.com\/login\.php/;
const staff = [
  "https://www.facebook.com/messages/t/100049381835538",
  "https://www.facebook.com/messages/t/100091928513838",
];
function resetTime() {}
async function main() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const urlListLength = staff.length;
  let linkcount = 0;
  while (true) {
    try {
      const singleStaff = staff[linkcount];
      await page.goto(singleStaff);
      const currentURL = await page.url();
      const isMatch = regex.test(currentURL);
      if (isMatch) {
        await inputtype(page, "#email", "your email");
        await inputtype(page, "#pass", "you pass");
        await pressable(page, "#loginbutton");
      }
      const result = await observer(page);
      if (result.subElements.length != 0) {
        const demoTest = ["hi", "hey"];
        const res = "hey";
        if (demoTest.includes(result.subElements[0])) {
          await sendMessage(page,res)
        }
      }
      if (linkcount < urlListLength - 1) {
        linkcount++;
      } else {
        linkcount = 0;
      }
    } catch (error) {}
  }
}
main();
