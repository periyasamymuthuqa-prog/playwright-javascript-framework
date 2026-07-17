const { test, expect } = require('@playwright/test');

const APIClient = require('./apiClient');


test('Validate GET user API', async () => {


    const apiClient = new APIClient();


    await apiClient.createContext();


    const response =
        await apiClient.getUser(2);


    expect(response.status())
        .toBe(200);


    const responseBody =
        await response.json();


    expect(responseBody.data.id)
        .toBe(2);


});


test('Validate POST user API', async () => {


    const apiClient = new APIClient();


    await apiClient.createContext();


    const response =
        await apiClient.createUser({

            name: "Periyasamy",

            job: "Senior SDET"

        });


    expect(response.status())
        .toBe(201);


});
