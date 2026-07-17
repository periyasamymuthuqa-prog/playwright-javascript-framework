const { test, expect } = require('@playwright/test');

const { LoginPage } =
require('../pages/LoginPage');

const testData =
require('../utils/testData');


test('Valid user login validation', async ({ page }) => {


    const loginPage =
    new LoginPage(page);


    await loginPage.navigate();


    await loginPage.login(
        testData.validUser.username,
        testData.validUser.password
    );


    await expect(page)
    .toHaveURL(/inventory.html/);


});
