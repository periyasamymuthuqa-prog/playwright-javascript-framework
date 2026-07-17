const { request } = require('@playwright/test');


class APIClient {

    constructor() {
        this.baseURL = "https://reqres.in";
    }


    async createContext(){

        this.apiContext = await request.newContext({
            baseURL: this.baseURL
        });

    }


    async getUser(userId){

        return await this.apiContext.get(
            `/api/users/${userId}`
        );

    }


    async createUser(payload){

        return await this.apiContext.post(
            '/api/users',
            {
                data: payload
            }
        );

    }

}


module.exports = APIClient;
