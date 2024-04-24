async function inputtype(page,target,text){
    await page.waitForSelector(target, { visible: true });
    await page.type(target, text);
}

module.exports = inputtype