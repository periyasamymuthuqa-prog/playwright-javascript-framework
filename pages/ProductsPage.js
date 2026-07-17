class ProductsPage {

    constructor(page) {
        this.page = page;
        this.productsTitle = '.title';
        this.addCartButton = '#add-to-cart-sauce-labs-backpack';
    }

    async verifyProductsPage() {
        return await this.page.locator(this.productsTitle).isVisible();
    }

    async addProductToCart() {
        await this.page.click(this.addCartButton);
    }
}

module.exports = { ProductsPage };
