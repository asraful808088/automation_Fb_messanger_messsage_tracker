let checkFinish = false;
async function lastOpositeMessage(page) {
  await page.waitForSelector('[class="x78zum5 xdt5ytf x1n2onr6"]', {
    visible: true,
  });
  const items = await page.$$eval(
    '[class="x78zum5 xdt5ytf x1n2onr6"]',
    (elements) => {
      return elements.map((element) => {
        const subElements = Array.from(
          element.querySelectorAll(
            '[class="html-div xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x1tlxs6b x1g8br2z x1gn5b1j x230xth x14ctfv x1okitfd x1k4qllp x6ikm8r x10wlt62 x1y1aw1k xwib8y2 x1ye3gou xn6708d x1n2onr6 x1vjfegm x1mzt3pk x13faqbe x1xr0vuk x1jm4cbz x1lmq8lz xrrpcnn x1xtl47e x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x1tdhcrn x17i5p6 xeqhmsb x1bab9rp"]'
          )
        ).map((subElement) => {
          return subElement.textContent.trim();
        });
        const seenElement = Array.from(
          element.querySelectorAll(
            '[class="html-div xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x78zum5 x13a6bvl x1eb86dx"]'
          )
        ).map((subElement) => {
          return subElement.textContent.trim();
        });
        return {
          mainItem: element.textContent.trim(),
          subElements: subElements,
          seenElement: seenElement,
        };
      });
    }
  );
  return items[items.length - 1];
}

async function observer(page) {
  const result = lastOpositeMessage(page);
  return result;
}

module.exports = { observer, checkFinish };
