class Product {
    name: string;
    productId: number;
    price: number;

    constructor(name: string, productId: number, price: number) {
        this.name = name;
        this.productId = productId;
        this.price = price;
    }

    displayDetails1(): void {
        console.log("Name:", this.name);
        console.log("Product ID:", this.productId);
        console.log("Price:", this.price);
    }
}

const a1 = new Product("Laptop", 101, 50000);

a1.displayDetails1();