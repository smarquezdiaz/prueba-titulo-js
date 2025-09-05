const {test, expect} = require('@playwright/test');

const casos = [
    { name: 'Caso 1', url: 'https://example.com/', esperado: 'Example Domain'},
    { name: 'Caso 2', url: 'https://example.com/', esperado: /Example/},
    { name: 'Caso 3', url: 'https://www.youtube.com/', esperado: 'YouTube'}
]

for (const { url, esperado} of casos) {
    test(`validad el titulo correcto en ${name}`, async ({page}) => {
        // Abre la pagina example.com
        await page.goto(url);
        await sleep(3000);
        // Verificacion del titulo exacto
        await expect(page).toHaveTitle(esperado);
    });
}

function sleep (time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

