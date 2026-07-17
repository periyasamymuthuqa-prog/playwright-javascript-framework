class CheckoutPage {

    constructor(page) {

        this.page = page;

        this.checkoutButton =
        '#checkout';

        this.firstName =
        '#first-name';

        this.lastName =
        '#last-name';

        this.postalCode =
        '#postal-code';

        this.continueButton =
        '#continue';

        this.finishButton =
        '#finish';

        this.successMessage =
        '.complete-header';
    }


    async clickCheckout() {

        await this.page.click(
            this.checkoutButton
        );

    }


    async enterCustomerDetails(
        firstName,
        lastName,
        postalCode
    ){

        await this.page.fill(
            this.firstName,
            firstName
        );

        await this.page.fill(
            this.lastName,
            lastName
        );

        await this.page.fill(
            this.postalCode,
            postalCode
        );

        await this.page.click(
            this.continueButton
        );

    }


    async finishOrder(){

        await this.page.click(
            this.finishButton
        );

    }

}

module.exports = { CheckoutPage };
