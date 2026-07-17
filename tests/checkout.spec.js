const { test, expect } = require('@playwright/test');

const { LoginPage } =
require('../pages/LoginPage');

const { ProductsPage } =
require('../pages/ProductsPage');

const { CheckoutPage } =
require('../pages/CheckoutPage');


test('Complete checkout flow', async ({ page }) => {


    const loginPage =
    new LoginPage(page);

    const productsPage =
    new ProductsPage(page);

    const checkoutPage =
    new CheckoutPage(page);


    await loginPage.navigate();


    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );


    await productsPage.addProductToCart();


    await productsPage.openCart();


    await checkoutPage.clickCheckout();


    await checkoutPage.enterCustomerDetails(
        'Periyasamy',
        'Muthu',
        '600001'
    );


    await checkoutPage.finishOrder();


    await expect(
        page.locator('.complete-header')
    ).toContainText(
        'Thank you'
    );


});
