// 1. Product Interface (IProduct)
// This defines the contract for all products in our warehouse.
interface IProduct {
    name: string;
    weight: number; // in kg
    sku: string; // Stock Keeping Unit
    displayInfo(): void;
    handleStorage(): void;
}

// 2. ConcreteProduct Classes
// These are the actual product types, implementing the IProduct interface.

class ElectronicsProduct implements IProduct {
    name: string;
    weight: number;
    sku: string;
    serialNumber: string; // Specific to ElectronicsProduct

    constructor(name: string, weight: number, sku: string, serialNumber: string) {
        this.name = name;
        this.weight = weight;
        this.sku = sku;
        this.serialNumber = serialNumber;
    }

    displayInfo(): void {
        console.log(`- Electronics Product: ${this.name} (SKU: ${this.sku})`);
        console.log(`  Weight: ${this.weight} kg, Serial: ${this.serialNumber}`);
    }

    handleStorage(): void {
        console.log(`  Storing ${this.name} in anti-static packaging.`);
    }
}

class PerishableProduct implements IProduct {
    name: string;
    weight: number;
    sku: string;
    expiryDate: Date; // Specific to PerishableProduct

    constructor(name: string, weight: number, sku: string, expiryDate: Date) {
        this.name = name;
        this.weight = weight;
        this.sku = sku;
        this.expiryDate = expiryDate;
    }

    displayInfo(): void {
        console.log(`- Perishable Product: ${this.name} (SKU: ${this.sku})`);
        console.log(`  Weight: ${this.weight} kg, Expires: ${this.expiryDate.toLocaleDateString()}`);
    }

    handleStorage(): void {
        console.log(`  Storing ${this.name} in cold storage (refrigeration required).`);
    }
}

// 3. Creator (Abstract ProductFactory Class)
// Declares the factory method `createProduct`.
// It can also contain other methods that use the `createProduct` method.
abstract class ProductFactory {
    abstract createProduct(name: string, weight: number, sku: string, specificData: any): IProduct;

    // This is a "client" method within the factory that uses the created product
    public prepareForStorage(name: string, weight: number, sku: string, specificData: any): void {
        const product = this.createProduct(name, weight, sku, specificData);
        product.displayInfo();
        product.handleStorage();
        console.log('---');
    }
}

// 4. ConcreteCreator Classes
// Implement the `createProduct` method to return specific ConcreteProducts.

class ElectronicsProductFactory extends ProductFactory {
    createProduct(name: string, weight: number, sku: string, specificData: { serialNumber: string }): IProduct {
        return new ElectronicsProduct(name, weight, sku, specificData.serialNumber);
    }
}

class PerishableProductFactory extends ProductFactory {
    createProduct(name: string, weight: number, sku: string, specificData: { expiryDate: Date }): IProduct {
        return new PerishableProduct(name, weight, sku, specificData.expiryDate);
    }
}