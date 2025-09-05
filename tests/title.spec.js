const {test, expect} = require('@playwright/test');

test('validad el titulo exacto', async ({page}) => {
    // Abre la pagina example.com
    await page.goto('https://example.com/');
    // Verificacion del titulo exacto
    await expect(page).toHaveTitle('Example Domain');
});

test('validad titulo con regex (contiene palabra)', async ({page}) => {
    // Abre la pagina example.com
    await page.goto('https://example.com/');
    // Verificamos palabra
    await expect(page).toHaveTitle(/Example/);
});