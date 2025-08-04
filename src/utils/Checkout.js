export const pricingRules = {
    ipd: (items) => {
        const price = items.length > 4 ? 499.99 : 549.99;
        return price
    },
    atv: (items) => {
        const count = items.length;
        const charged = Math.floor(count / 3) * 2 + (count % 3);
        return charged * 109.50
    }
}


export class Checkout {
    constructor(pricingRules) {
        this.pricingRules = pricingRules;
        this.cart = []
    }

    scan(product) {
        this.cart.push(product)
    }
    getCart() {
        return this.cart;
    }
    CartTotal() {
        const productGroup = {};
        this.cart.forEach((item) => {
            if (!productGroup[item.sku]) productGroup[item.sku] = [];
            productGroup[item.sku].push(item);
        });
        let total = 0;
        for (const sku in productGroup) {
            const items = productGroup[sku];
            if (this.pricingRules[sku]) {
                console.log("the total", items.reduce((sum, p) => sum + p.price, 0));
                total += this.pricingRules[sku](items);
            } else {


                total += items.reduce((sum, p) => sum + p.price, 0)
            }
        }
        return parseFloat(total.toFixed(2))
    }

}
