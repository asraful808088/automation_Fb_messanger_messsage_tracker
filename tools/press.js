async function pressAble(page,target){
    await page.waitForSelector(target, { visible: true });
    await page.click(target);
}

module.exports = pressAble