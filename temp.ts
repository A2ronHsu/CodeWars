// 1. Product Interface (IProduct)
// This defines the contract for all products in our warehouse.
interface IProduct {
    name: string,
    weight: number, // in kg
    sku: string; // Stock Keeping Unit
    displayInfo(): void;
    handleStorage(): void;
}

// 2. ConcreteProduct Classes
// These are the actual product types, implementing the IProduct interface.

class ElectronicsProduct implements IProduct {
    // name: string;
    // weight: number;
    // sku: string;
    // serialNumber: string; // Specific to ElectronicsProduct

    constructor(public name: string, public weight: number, public sku: string, public serialNumber: string) {
        // this.name = name;
        // this.weight = weight;
        // this.sku = sku;
        // this.serialNumber = serialNumber;
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

class TShirtsProduct implements IProduct {
    constructor(public name: string, public weight: number, public sku: string, public data:{ size?: string, color?: string }) {
    }

    displayInfo(): void {
        console.log(`- Tshirt Product: ${this.name} (SKU: ${this.sku})`);
        console.log(`Weight: ${this.weight}kg, Color:${this.data.color}, Size: ${this.data.size}`);
    }

    handleStorage(): void {
        console.log(` Storing ${this.name} in dry storage`);
    }
}

// 3. Creator (Abstract ProductFactory Class)
// Declares the factory method `createProduct`.
// It can also contain other methods that use the `createProduct` method.
abstract class ProductFactory {
    abstract createProduct(name: string, weight: number, sku: string, specificData?: any): IProduct;

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

class TShirtsProductFactory extends ProductFactory {
    createProduct(name: string, weight: number, sku: string, specificData: {size: string, color: string}) : IProduct {
        return new TShirtsProduct(name, weight, sku, {size: specificData.size, color: specificData.color})
    }
}


const temp = new ElectronicsProductFactory().createProduct("cellphone", 200, "1", { serialNumber: "123456789" });
console.log(temp);

const tShirt = new TShirtsProductFactory().createProduct("T-shirt",.1,"1",{size:"G", color:"black"});
console.log(tShirt);da