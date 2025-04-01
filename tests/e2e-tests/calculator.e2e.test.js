const { test, expect } = require('@playwright/test');

test.describe('Calculator E2E Tests', () => {
    test('should add two numbers and display result', async ({ page }) => {
        await page.goto('file://' + __dirname + '/../../index.html');

        await page.click('button:has-text("2")');
        await page.click('#add');
        await page.click('button:has-text("3")');
        await page.click('#equal');

        const history = await page.innerText('#history-list');
        expect(history).toContain('2 + 3 = 5');
    });


    test('should subtract two numbers and display result', async ({ page }) => {
        await page.goto('file://' + __dirname + '/../../index.html');
        await page.click('button:has-text("5")');
        await page.click('#subtract');
        await page.click('button:has-text("3")');
        await page.click('#equal');

        const history = await page.innerText('#history-list');
        expect(history).toContain('5 - 3 = 2');
    });

    test('should multiply two numbers and display result', async ({ page }) => {
        await page.goto('file://' + __dirname + '/../../index.html');
        await page.click('button:has-text("4")');
        await page.click('#multiply');
        await page.click('button:has-text("5")');
        await page.click('#equal');

        const history = await page.innerText('#history-list');
        expect(history).toContain('4 * 5 = 20');
    });

    // test('should clear history when Clear History button is clicked', async ({ page }) => {
    //     await page.goto('file://' + __dirname + '/../../index.html');
    //     await page.click('button:has-text("2")');
    //     await page.click('#add');
    //     await page.click('button:has-text("3")');
    //     await page.click('#equal');
    //
    //     await page.click('#clear-history');
    //     const history = await page.innerText('#history-list');
    //     expect(history).toBe('');
    // });
});
