import puppeteer from "puppeteer";

describe("Page start", () => {
    let browser;
    let page;

    beforeEach(async () => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 100,
            devtools: true,
        });

        page = await browser.newPage();
    });

    test("test", () => {
        page.goto("http://localhost:8080");
    });

    afterEach(async () => {
        await browser.close();
    })
})