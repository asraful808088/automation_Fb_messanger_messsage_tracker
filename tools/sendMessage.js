const inputtype =require('./typer')
const pressable =require('./press')
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function sendMessage(page, text) {
  await page.waitForSelector(
    '[class="xzsf02u x1a2a7pz x1n2onr6 x14wi4xw x1iyjqo2 x1gh3ibb xisnujt xeuugli x1odjw0f notranslate"]',
    {
      visible: true,
    }
  );
 
  await inputtype(
    page,
    '[class="xzsf02u x1a2a7pz x1n2onr6 x14wi4xw x1iyjqo2 x1gh3ibb xisnujt xeuugli x1odjw0f notranslate"]',
    text
  );
   await page.waitForSelector(
    '[class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r xat24cr x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x3nfvp2 x1q0g3np x87ps6o x1lku1pv x1a2a7pz x1c4vz4f x2lah0s xsgj6o6 xw3qccf x1y1aw1k x1sxyh0 xwib8y2 xurb0ha"]',
    {
      visible: true,
    }
  );
  await pressable(
    page,
    '[class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r xat24cr x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x3nfvp2 x1q0g3np x87ps6o x1lku1pv x1a2a7pz x1c4vz4f x2lah0s xsgj6o6 xw3qccf x1y1aw1k x1sxyh0 xwib8y2 xurb0ha"]'
  );
  await sleep(2000)
}
module.exports = sendMessage