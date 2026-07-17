class ProductsPage {

    constructor(page) {
        this.page = page;
        this.pageTitle = '.title';
        this.addBackpackButton = '#add-to-cart-sauce-labs-backpack';
        this.cartIcon = '.shopping_cart_link';
    }

    async verifyProductsPage() {
        return await this.page.locator(this.pageTitle).isVisible();
    }

    async addProductToCart() {
        await this.page.click(this.addBackpackButton);
    }

    async openCart() {
        await this.page.click(this.cartIcon);
    }
}

module.exports = { ProductsPage };
