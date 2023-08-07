import puppeteer from 'puppeteer';

describe('Page start', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      slowMo: 50,
    });

    page = await browser.newPage();
  });

  test('Form should render on page start', async () => {
    await page.goto('http://localhost:8080');

    await page.waitForSelector('.form-inline');
  });

  test('Icon Visa should add class .isvalid', async () => {
    await page.goto('http://localhost:8080');
    await page.waitForSelector('.wrapper');

    const input = await page.$('.form-control');
    const submit = await page.$('.card-validate-btn');

    await input.type('4111111111111111');
    await submit.click();

    await page.waitForSelector('.isvalid');
  }, 20000);

  test('Input invalid card number. Icons shouldnt class .isvalid', async () => {
    await page.goto('http://localhost:8080');
    await page.waitForSelector('.wrapper');

    const input = await page.$('.form-control');
    const submit = await page.$('.card-validate-btn');

    await input.type('4111111111111112');
    await submit.click();

    await page.waitForFunction("!document.querySelector('.visa').classList.contains('isvalid')");
  }, 20000);

  afterEach(async () => {
    await browser.close();
  });
});
