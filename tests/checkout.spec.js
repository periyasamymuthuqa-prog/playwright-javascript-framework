const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

const testData = require('../utils/testData');


test('Complete checkout flow validation', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const checkoutPage = new CheckoutPage(page);


    // Login to application
    await loginPage.navigate();

    await loginPage.login(
        testData.validUser.username,
        testData.validUser.password
    );


    // Add product to cart
    await productsPage.addProductToCart();

    await productsPage.openCart();


    // Checkout process
    await checkoutPage.clickCheckout();


    await checkoutPage.enterCustomerDetails(
        testData.checkoutUser.firstName,
        testData.checkoutUser.lastName,
        testData.checkoutUser.postalCode
    );


    // Complete order
    await checkoutPage.finishOrder();


    // Validate successful order completion
    await expect(
        page.locator('.complete-header')
    ).toContainText(
        'Thank you for your order'
    );

});
