const {test, expect} = require('@playwright/test');

test('validad el titulo exacto', async ({page}) => {
    // Abre la pagina example.com
    await page.goto('https://example.com/');
    await sleep(3000);
    // Verificacion del titulo exacto
    await expect(page).toHaveTitle('Example Domain');
});

test('validad titulo con regex (contiene palabra)', async ({page}) => {
    // Abre la pagina example.com
    await page.goto('https://example.com/');

    await sleep(3000);

    // Verificamos palabra
    await expect(page).toHaveTitle(/Example/);
});

test('validar el titulo exacto de twitch', async ({page}) => {
    // Abre la pagina twitch.tv
    await page.goto('https://www.twitch.tv/'); 
    await sleep(3000);
    // Verificacion del titulo exacto
    await expect(page).toHaveTitle('Twitch');
});

test('validar titulo con regex (contiene palabra) en twitch', async ({page}) => {
    // Abre la pagina twitch.tv
    await page.goto('https://www.twitch.tv/'); 

    await sleep(3000);
    
    // Verificamos palabra
    await expect(page).toHaveTitle(/Twitch/);
});

function sleep (time) {
    return new Promise(resolve => setTimeout(resolve, time));
}