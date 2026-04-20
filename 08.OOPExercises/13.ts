class Product {
    static productCount: number = 0;

    readonly id: number;

    private _name: string;
    private _price: number;

    constructor(name: string, price: number) {
        this.id = ++Product.productCount;
        this._name = name;
        this._price = price;
    }

    get productName(): string {
        return this._name;
    }

    set productName(value: string) {
        if (value.length < 1) {
            throw new Error("Product name cannot be empty.");
        }

        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        if (value < 0) {
            throw new Error("Price cannot be negative.");
        }

        this._price = value;
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this._name}, Price: $${this._price}`;
    }
}

class Inventory {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    listProducts(): string {
        return this.products
            .map(p => p.getDetails())
            .join('\n');
    }
}

try {
    const inventory = new Inventory();

    const product1 = new Product("Laptop", 1200);
    const product2 = new Product("Phone", 800);

    inventory.addProduct(product1);
    inventory.addProduct(product2);

    console.log(inventory.listProducts());

} catch (error) {
    console.error(error);
}