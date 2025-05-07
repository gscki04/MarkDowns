### 1. CLI installation  
```sh
ng add @progress/kendo-angular-grid
```  

### 2. Add dummy data for table  
#### `app/dummyData/data.products.ts`:  
```typescript
export class Product {
    public ProductID: number = 0;
    public ProductName:string = '';
    public Discontinued?:boolean = false;
    public UnitsInStock?: number;
    public UnitPrice:number = 0;
    public Category = {
        CategoryID: 0,
        CategoryName: ''
    };
}

export const products = [
    {
        ProductID: 1,
        ProductName: 'Chai',
        SupplierID: 1,
        CategoryID: 1,
        QuantityPerUnit: '10 boxes x 20 bags',
        UnitPrice: 18.0,
        UnitsInStock: 39,
        UnitsOnOrder: 0,
        ReorderLevel: 10,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: 'Beverages',
            Description: 'Soft Fdrinks, coffees, teas, beers, and ales'
        }
    },
    {
        ProductID: 2,
        ProductName: 'Chang',
        SupplierID: 1,
        CategoryID: 1,
        QuantityPerUnit: '24 - 12 oz bottles',
        UnitPrice: 19.0,
        UnitsInStock: 17,
        UnitsOnOrder: 40,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: 'Beverages',
            Description: 'Soft drinks, coffees, teas, beers, and ales'
        }
    },
    {
        ProductID: 3,
        ProductName: 'Aniseed Syrup',
        SupplierID: 1,
        CategoryID: 2,
        QuantityPerUnit: '12 - 550 ml bottles',
        UnitPrice: 10.0,
        UnitsInStock: 13,
        UnitsOnOrder: 70,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
            CategoryID: 2,
            CategoryName: 'Condiments',
            Description: 'Sweet and savory sauces, relishes, spreads, and seasonings'
        }
    },
    {
        ProductID: 4,
        ProductName: "Chef Anton's Cajun Seasoning",
        SupplierID: 2,
        CategoryID: 2,
        QuantityPerUnit: '48 - 6 oz jars',
        UnitPrice: 22.0,
        UnitsInStock: 53,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 2,
            CategoryName: 'Condiments',
            Description: 'Sweet and savory sauces, relishes, spreads, and seasonings'
        }
    },
    {
        ProductID: 5,
        ProductName: "Chef Anton's Gumbo Mix",
        SupplierID: 2,
        CategoryID: 2,
        QuantityPerUnit: '36 boxes',
        UnitPrice: 21.35,
        UnitsInStock: 0,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: true,
        Category: {
            CategoryID: 2,
            CategoryName: 'Condiments',
            Description: 'Sweet and savory sauces, relishes, spreads, and seasonings'
        }
    },
    {
        ProductID: 6,
        ProductName: "Grandma's Boysenberry Spread",
        SupplierID: 3,
        CategoryID: 2,
        QuantityPerUnit: '12 - 8 oz jars',
        UnitPrice: 25.0,
        UnitsInStock: 120,
        UnitsOnOrder: 0,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
            CategoryID: 2,
            CategoryName: 'Condiments',
            Description: 'Sweet and savory sauces, relishes, spreads, and seasonings'
        }
    },
    {
        ProductID: 7,
        ProductName: "Uncle Bob's Organic Dried Pears",
        SupplierID: 3,
        CategoryID: 7,
        QuantityPerUnit: '12 - 1 lb pkgs.',
        UnitPrice: 30.0,
        UnitsInStock: 15,
        UnitsOnOrder: 0,
        ReorderLevel: 10,
        Discontinued: false,
        Category: {
            CategoryID: 7,
            CategoryName: 'Produce',
            Description: 'Dried fruit and bean curd'
        }
    },
    {
        ProductID: 8,
        ProductName: 'Northwoods Cranberry Sauce',
        SupplierID: 3,
        CategoryID: 2,
        QuantityPerUnit: '12 - 12 oz jars',
        UnitPrice: 40.0,
        UnitsInStock: 6,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 2,
            CategoryName: 'Condiments',
            Description: 'Sweet and savory sauces, relishes, spreads, and seasonings'
        }
    },
    {
        ProductID: 9,
        ProductName: 'Mishi Kobe Niku',
        SupplierID: 4,
        CategoryID: 6,
        QuantityPerUnit: '18 - 500 g pkgs.',
        UnitPrice: 97.0,
        UnitsInStock: 29,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: true,
        Category: {
            CategoryID: 6,
            CategoryName: 'Meat/Poultry',
            Description: 'Prepared meats'
        }
    },
    {
        ProductID: 10,
        ProductName: 'Ikura',
        SupplierID: 4,
        CategoryID: 8,
        QuantityPerUnit: '12 - 200 ml jars',
        UnitPrice: 31.0,
        UnitsInStock: 31,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 8,
            CategoryName: 'Seafood',
            Description: 'Seaweed and fish'
        }
    },
    {
        ProductID: 11,
        ProductName: 'Queso Cabrales',
        SupplierID: 5,
        CategoryID: 4,
        QuantityPerUnit: '1 kg pkg.',
        UnitPrice: 21.0,
        UnitsInStock: 22,
        UnitsOnOrder: 30,
        ReorderLevel: 30,
        Discontinued: false,
        Category: {
            CategoryID: 4,
            CategoryName: 'Dairy Products',
            Description: 'Cheeses'
        }
    },
    {
        ProductID: 12,
        ProductName: 'Queso Manchego La Pastora',
        SupplierID: 5,
        CategoryID: 4,
        QuantityPerUnit: '10 - 500 g pkgs.',
        UnitPrice: 38.0,
        UnitsInStock: 86,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 4,
            CategoryName: 'Dairy Products',
            Description: 'Cheeses'
        }
    },
    {
        ProductID: 13,
        ProductName: 'Konbu',
        SupplierID: 6,
        CategoryID: 8,
        QuantityPerUnit: '2 kg box',
        UnitPrice: 6.0,
        UnitsInStock: 24,
        UnitsOnOrder: 0,
        ReorderLevel: 5,
        Discontinued: false,
        Category: {
            CategoryID: 8,
            CategoryName: 'Seafood',
            Description: 'Seaweed and fish'
        }
    },
    {
        ProductID: 14,
        ProductName: 'Tofu',
        SupplierID: 6,
        CategoryID: 7,
        QuantityPerUnit: '40 - 100 g pkgs.',
        UnitPrice: 23.25,
        UnitsInStock: 35,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 7,
            CategoryName: 'Produce',
            Description: 'Dried fruit and bean curd'
        }
    },
    {
        ProductID: 15,
        ProductName: 'Genen Shouyu',
        SupplierID: 6,
        CategoryID: 2,
        QuantityPerUnit: '24 - 250 ml bottles',
        UnitPrice: 15.5,
        UnitsInStock: 39,
        UnitsOnOrder: 0,
        ReorderLevel: 5,
        Discontinued: false,
        Category: {
            CategoryID: 2,
            CategoryName: 'Condiments',
            Description: 'Sweet and savory sauces, relishes, spreads, and seasonings'
        }
    },
    {
        ProductID: 16,
        ProductName: 'Pavlova',
        SupplierID: 7,
        CategoryID: 3,
        QuantityPerUnit: '32 - 500 g boxes',
        UnitPrice: 17.45,
        UnitsInStock: 29,
        UnitsOnOrder: 0,
        ReorderLevel: 10,
        Discontinued: false,
        Category: {
            CategoryID: 3,
            CategoryName: 'Confections',
            Description: 'Desserts, candies, and sweet breads'
        }
    },
    {
        ProductID: 17,
        ProductName: 'Alice Mutton',
        SupplierID: 7,
        CategoryID: 6,
        QuantityPerUnit: '20 - 1 kg tins',
        UnitPrice: 39.0,
        UnitsInStock: 0,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: true,
        Category: {
            CategoryID: 6,
            CategoryName: 'Meat/Poultry',
            Description: 'Prepared meats'
        }
    },
    {
        ProductID: 18,
        ProductName: 'Carnarvon Tigers',
        SupplierID: 7,
        CategoryID: 8,
        QuantityPerUnit: '16 kg pkg.',
        UnitPrice: 62.5,
        UnitsInStock: 42,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 8,
            CategoryName: 'Seafood',
            Description: 'Seaweed and fish'
        }
    },
    {
        ProductID: 19,
        ProductName: 'Teatime Chocolate Biscuits',
        SupplierID: 8,
        CategoryID: 3,
        QuantityPerUnit: '10 boxes x 12 pieces',
        UnitPrice: 9.2,
        UnitsInStock: 25,
        UnitsOnOrder: 0,
        ReorderLevel: 5,
        Discontinued: false,
        Category: {
            CategoryID: 3,
            CategoryName: 'Confections',
            Description: 'Desserts, candies, and sweet breads'
        }
    },
    {
        ProductID: 20,
        ProductName: "Sir Rodney's Marmalade",
        SupplierID: 8,
        CategoryID: 3,
        QuantityPerUnit: '30 gift boxes',
        UnitPrice: 81.0,
        UnitsInStock: 40,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 3,
            CategoryName: 'Confections',
            Description: 'Desserts, candies, and sweet breads'
        }
    },
    {
        ProductID: 21,
        ProductName: "Sir Rodney's Scones",
        SupplierID: 8,
        CategoryID: 3,
        QuantityPerUnit: '24 pkgs. x 4 pieces',
        UnitPrice: 10.0,
        UnitsInStock: 3,
        UnitsOnOrder: 40,
        ReorderLevel: 5,
        Discontinued: false,
        Category: {
            CategoryID: 3,
            CategoryName: 'Confections',
            Description: 'Desserts, candies, and sweet breads'
        }
    },
    {
        ProductID: 22,
        ProductName: "Gustaf's Knäckebröd",
        SupplierID: 9,
        CategoryID: 5,
        QuantityPerUnit: '24 - 500 g pkgs.',
        UnitPrice: 21.0,
        UnitsInStock: 104,
        UnitsOnOrder: 0,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
            CategoryID: 5,
            CategoryName: 'Grains/Cereals',
            Description: 'Breads, crackers, pasta, and cereal'
        }
    },
    {
        ProductID: 23,
        ProductName: 'Tunnbröd',
        SupplierID: 9,
        CategoryID: 5,
        QuantityPerUnit: '12 - 250 g pkgs.',
        UnitPrice: 9.0,
        UnitsInStock: 61,
        UnitsOnOrder: 0,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
            CategoryID: 5,
            CategoryName: 'Grains/Cereals',
            Description: 'Breads, crackers, pasta, and cereal'
        }
    },
    {
        ProductID: 24,
        ProductName: 'Guaraná Fantástica',
        SupplierID: 10,
        CategoryID: 1,
        QuantityPerUnit: '12 - 355 ml cans',
        UnitPrice: 4.5,
        UnitsInStock: 20,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: true,
        Category: {
            CategoryID: 1,
            CategoryName: 'Beverages',
            Description: 'Soft drinks, coffees, teas, beers, and ales'
        }
    },
    {
        ProductID: 25,
        ProductName: 'NuNuCa Nuß-Nougat-Creme',
        SupplierID: 11,
        CategoryID: 3,
        QuantityPerUnit: '20 - 450 g glasses',
        UnitPrice: 14.0,
        UnitsInStock: 76,
        UnitsOnOrder: 0,
        ReorderLevel: 30,
        Discontinued: false,
        Category: {
            CategoryID: 3,
            CategoryName: 'Confections',
            Description: 'Desserts, candies, and sweet breads'
        }
    },
    {
        ProductID: 26,
        ProductName: 'Gumbär Gummibärchen',
        SupplierID: 11,
        CategoryID: 3,
        QuantityPerUnit: '100 - 250 g bags',
        UnitPrice: 31.23,
        UnitsInStock: 15,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 3,
            CategoryName: 'Confections',
            Description: 'Desserts, candies, and sweet breads'
        }
    },
    {
        ProductID: 27,
        ProductName: 'Schoggi Schokolade',
        SupplierID: 11,
        CategoryID: 3,
        QuantityPerUnit: '100 - 100 g pieces',
        UnitPrice: 43.9,
        UnitsInStock: 49,
        UnitsOnOrder: 0,
        ReorderLevel: 30,
        Discontinued: false,
        Category: {
            CategoryID: 3,
            CategoryName: 'Confections',
            Description: 'Desserts, candies, and sweet breads'
        }
    },
    {
        ProductID: 28,
        ProductName: 'Rössle Sauerkraut',
        SupplierID: 12,
        CategoryID: 7,
        QuantityPerUnit: '25 - 825 g cans',
        UnitPrice: 45.6,
        UnitsInStock: 26,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: true,
        Category: {
            CategoryID: 7,
            CategoryName: 'Produce',
            Description: 'Dried fruit and bean curd'
        }
    },
    {
        ProductID: 29,
        ProductName: 'Thüringer Rostbratwurst',
        SupplierID: 12,
        CategoryID: 6,
        QuantityPerUnit: '50 bags x 30 sausgs.',
        UnitPrice: 123.79,
        UnitsInStock: 0,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: true,
        Category: {
            CategoryID: 6,
            CategoryName: 'Meat/Poultry',
            Description: 'Prepared meats'
        }
    },
    {
        ProductID: 30,
        ProductName: 'Nord-Ost Matjeshering',
        SupplierID: 13,
        CategoryID: 8,
        QuantityPerUnit: '10 - 200 g glasses',
        UnitPrice: 25.89,
        UnitsInStock: 10,
        UnitsOnOrder: 0,
        ReorderLevel: 15,
        Discontinued: false,
        Category: {
            CategoryID: 8,
            CategoryName: 'Seafood',
            Description: 'Seaweed and fish'
        }
    },
    {
        ProductID: 31,
        ProductName: 'Gorgonzola Telino',
        SupplierID: 14,
        CategoryID: 4,
        QuantityPerUnit: '12 - 100 g pkgs',
        UnitPrice: 12.5,
        UnitsInStock: 0,
        UnitsOnOrder: 70,
        ReorderLevel: 20,
        Discontinued: false,
        Category: {
            CategoryID: 4,
            CategoryName: 'Dairy Products',
            Description: 'Cheeses'
        }
    },
    {
        ProductID: 32,
        ProductName: 'Mascarpone Fabioli',
        SupplierID: 14,
        CategoryID: 4,
        QuantityPerUnit: '24 - 200 g pkgs.',
        UnitPrice: 32.0,
        UnitsInStock: 9,
        UnitsOnOrder: 40,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
            CategoryID: 4,
            CategoryName: 'Dairy Products',
            Description: 'Cheeses'
        }
    },
    {
        ProductID: 33,
        ProductName: 'Geitost',
        SupplierID: 15,
        CategoryID: 4,
        QuantityPerUnit: '500 g',
        UnitPrice: 2.5,
        UnitsInStock: 112,
        UnitsOnOrder: 0,
        ReorderLevel: 20,
        Discontinued: false,
        Category: {
            CategoryID: 4,
            CategoryName: 'Dairy Products',
            Description: 'Cheeses'
        }
    },
    {
        ProductID: 34,
        ProductName: 'Sasquatch Ale',
        SupplierID: 16,
        CategoryID: 1,
        QuantityPerUnit: '24 - 12 oz bottles',
        UnitPrice: 14.0,
        UnitsInStock: 111,
        UnitsOnOrder: 0,
        ReorderLevel: 15,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: 'Beverages',
            Description: 'Soft drinks, coffees, teas, beers, and ales'
        }
    },
    {
        ProductID: 35,
        ProductName: 'Steeleye Stout',
        SupplierID: 16,
        CategoryID: 1,
        QuantityPerUnit: '24 - 12 oz bottles',
        UnitPrice: 18.0,
        UnitsInStock: 20,
        UnitsOnOrder: 0,
        ReorderLevel: 15,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: 'Beverages',
            Description: 'Soft drinks, coffees, teas, beers, and ales'
        }
    },
    {
        ProductID: 36,
        ProductName: 'Inlagd Sill',
        SupplierID: 17,
        CategoryID: 8,
        QuantityPerUnit: '24 - 250 g  jars',
        UnitPrice: 19.0,
        UnitsInStock: 112,
        UnitsOnOrder: 0,
        ReorderLevel: 20,
        Discontinued: false,
        Category: {
            CategoryID: 8,
            CategoryName: 'Seafood',
            Description: 'Seaweed and fish'
        }
    },
    {
        ProductID: 37,
        ProductName: 'Gravad lax',
        SupplierID: 17,
        CategoryID: 8,
        QuantityPerUnit: '12 - 500 g pkgs.',
        UnitPrice: 26.0,
        UnitsInStock: 11,
        UnitsOnOrder: 50,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
            CategoryID: 8,
            CategoryName: 'Seafood',
            Description: 'Seaweed and fish'
        }
    },
    {
        ProductID: 38,
        ProductName: 'Côte de Blaye',
        SupplierID: 18,
        CategoryID: 1,
        QuantityPerUnit: '12 - 75 cl bottles',
        UnitPrice: 263.5,
        UnitsInStock: 17,
        UnitsOnOrder: 0,
        ReorderLevel: 15,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: 'Beverages',
            Description: 'Soft drinks, coffees, teas, beers, and ales'
        }
    },
    {
        ProductID: 39,
        ProductName: 'Chartreuse verte',
        SupplierID: 18,
        CategoryID: 1,
        QuantityPerUnit: '750 cc per bottle',
        UnitPrice: 18.0,
        UnitsInStock: 69,
        UnitsOnOrder: 0,
        ReorderLevel: 5,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: 'Beverages',
            Description: 'Soft drinks, coffees, teas, beers, and ales'
        }
    },
    {
        ProductID: 40,
        ProductName: 'Boston Crab Meat',
        SupplierID: 19,
        CategoryID: 8,
        QuantityPerUnit: '24 - 4 oz tins',
        UnitPrice: 18.4,
        UnitsInStock: 123,
        UnitsOnOrder: 0,
        ReorderLevel: 30,
        Discontinued: false,
        Category: {
            CategoryID: 8,
            CategoryName: 'Seafood',
            Description: 'Seaweed and fish'
        }
    },
    {
        ProductID: 41,
        ProductName: "Jack's New England Clam Chowder",
        SupplierID: 19,
        CategoryID: 8,
        QuantityPerUnit: '12 - 12 oz cans',
        UnitPrice: 9.65,
        UnitsInStock: 85,
        UnitsOnOrder: 0,
        ReorderLevel: 10,
        Discontinued: false,
        Category: {
            CategoryID: 8,
            CategoryName: 'Seafood',
            Description: 'Seaweed and fish'
        }
    },
    {
        ProductID: 42,
        ProductName: 'Singaporean Hokkien Fried Mee',
        SupplierID: 20,
        CategoryID: 5,
        QuantityPerUnit: '32 - 1 kg pkgs.',
        UnitPrice: 14.0,
        UnitsInStock: 26,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: true,
        Category: {
            CategoryID: 5,
            CategoryName: 'Grains/Cereals',
            Description: 'Breads, crackers, pasta, and cereal'
        }
    },
    {
        ProductID: 43,
        ProductName: 'Ipoh Coffee',
        SupplierID: 20,
        CategoryID: 1,
        QuantityPerUnit: '16 - 500 g tins',
        UnitPrice: 46.0,
        UnitsInStock: 17,
        UnitsOnOrder: 10,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: 'Beverages',
            Description: 'Soft drinks, coffees, teas, beers, and ales'
        }
    },
    {
        ProductID: 44,
        ProductName: 'Gula Malacca',
        SupplierID: 20,
        CategoryID: 2,
        QuantityPerUnit: '20 - 2 kg bags',
        UnitPrice: 19.45,
        UnitsInStock: 27,
        UnitsOnOrder: 0,
        ReorderLevel: 15,
        Discontinued: false,
        Category: {
            CategoryID: 2,
            CategoryName: 'Condiments',
            Description: 'Sweet and savory sauces, relishes, spreads, and seasonings'
        }
    },
    {
        ProductID: 45,
        ProductName: 'Rogede sild',
        SupplierID: 21,
        CategoryID: 8,
        QuantityPerUnit: '1k pkg.',
        UnitPrice: 9.5,
        UnitsInStock: 5,
        UnitsOnOrder: 70,
        ReorderLevel: 15,
        Discontinued: false,
        Category: {
            CategoryID: 8,
            CategoryName: 'Seafood',
            Description: 'Seaweed and fish'
        }
    },
    {
        ProductID: 46,
        ProductName: 'Spegesild',
        SupplierID: 21,
        CategoryID: 8,
        QuantityPerUnit: '4 - 450 g glasses',
        UnitPrice: 12.0,
        UnitsInStock: 95,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 8,
            CategoryName: 'Seafood',
            Description: 'Seaweed and fish'
        }
    },
    {
        ProductID: 47,
        ProductName: 'Zaanse koeken',
        SupplierID: 22,
        CategoryID: 3,
        QuantityPerUnit: '10 - 4 oz boxes',
        UnitPrice: 9.5,
        UnitsInStock: 36,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 3,
            CategoryName: 'Confections',
            Description: 'Desserts, candies, and sweet breads'
        }
    },
    {
        ProductID: 48,
        ProductName: 'Chocolade',
        SupplierID: 22,
        CategoryID: 3,
        QuantityPerUnit: '10 pkgs.',
        UnitPrice: 12.75,
        UnitsInStock: 15,
        UnitsOnOrder: 70,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
            CategoryID: 3,
            CategoryName: 'Confections',
            Description: 'Desserts, candies, and sweet breads'
        }
    },
    {
        ProductID: 49,
        ProductName: 'Maxilaku',
        SupplierID: 23,
        CategoryID: 3,
        QuantityPerUnit: '24 - 50 g pkgs.',
        UnitPrice: 20.0,
        UnitsInStock: 10,
        UnitsOnOrder: 60,
        ReorderLevel: 15,
        Discontinued: false,
        Category: {
            CategoryID: 3,
            CategoryName: 'Confections',
            Description: 'Desserts, candies, and sweet breads'
        }
    },
    {
        ProductID: 50,
        ProductName: 'Valkoinen suklaa',
        SupplierID: 23,
        CategoryID: 3,
        QuantityPerUnit: '12 - 100 g bars',
        UnitPrice: 16.25,
        UnitsInStock: 65,
        UnitsOnOrder: 0,
        ReorderLevel: 30,
        Discontinued: false,
        Category: {
            CategoryID: 3,
            CategoryName: 'Confections',
            Description: 'Desserts, candies, and sweet breads'
        }
    },
    {
        ProductID: 51,
        ProductName: 'Manjimup Dried Apples',
        SupplierID: 24,
        CategoryID: 7,
        QuantityPerUnit: '50 - 300 g pkgs.',
        UnitPrice: 53.0,
        UnitsInStock: 20,
        UnitsOnOrder: 0,
        ReorderLevel: 10,
        Discontinued: false,
        Category: {
            CategoryID: 7,
            CategoryName: 'Produce',
            Description: 'Dried fruit and bean curd'
        }
    },
    {
        ProductID: 52,
        ProductName: 'Filo Mix',
        SupplierID: 24,
        CategoryID: 5,
        QuantityPerUnit: '16 - 2 kg boxes',
        UnitPrice: 7.0,
        UnitsInStock: 38,
        UnitsOnOrder: 0,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
            CategoryID: 5,
            CategoryName: 'Grains/Cereals',
            Description: 'Breads, crackers, pasta, and cereal'
        }
    },
    {
        ProductID: 53,
        ProductName: 'Perth Pasties',
        SupplierID: 24,
        CategoryID: 6,
        QuantityPerUnit: '48 pieces',
        UnitPrice: 32.8,
        UnitsInStock: 0,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: true,
        Category: {
            CategoryID: 6,
            CategoryName: 'Meat/Poultry',
            Description: 'Prepared meats'
        }
    },
    {
        ProductID: 54,
        ProductName: 'Tourtière',
        SupplierID: 25,
        CategoryID: 6,
        QuantityPerUnit: '16 pies',
        UnitPrice: 7.45,
        UnitsInStock: 21,
        UnitsOnOrder: 0,
        ReorderLevel: 10,
        Discontinued: false,
        Category: {
            CategoryID: 6,
            CategoryName: 'Meat/Poultry',
            Description: 'Prepared meats'
        }
    },
    {
        ProductID: 55,
        ProductName: 'Pâté chinois',
        SupplierID: 25,
        CategoryID: 6,
        QuantityPerUnit: '24 boxes x 2 pies',
        UnitPrice: 24.0,
        UnitsInStock: 115,
        UnitsOnOrder: 0,
        ReorderLevel: 20,
        Discontinued: false,
        Category: {
            CategoryID: 6,
            CategoryName: 'Meat/Poultry',
            Description: 'Prepared meats'
        }
    },
    {
        ProductID: 56,
        ProductName: 'Gnocchi di nonna Alice',
        SupplierID: 26,
        CategoryID: 5,
        QuantityPerUnit: '24 - 250 g pkgs.',
        UnitPrice: 38.0,
        UnitsInStock: 21,
        UnitsOnOrder: 10,
        ReorderLevel: 30,
        Discontinued: false,
        Category: {
            CategoryID: 5,
            CategoryName: 'Grains/Cereals',
            Description: 'Breads, crackers, pasta, and cereal'
        }
    },
    {
        ProductID: 57,
        ProductName: 'Ravioli Angelo',
        SupplierID: 26,
        CategoryID: 5,
        QuantityPerUnit: '24 - 250 g pkgs.',
        UnitPrice: 19.5,
        UnitsInStock: 36,
        UnitsOnOrder: 0,
        ReorderLevel: 20,
        Discontinued: false,
        Category: {
            CategoryID: 5,
            CategoryName: 'Grains/Cereals',
            Description: 'Breads, crackers, pasta, and cereal'
        }
    },
    {
        ProductID: 58,
        ProductName: 'Escargots de Bourgogne',
        SupplierID: 27,
        CategoryID: 8,
        QuantityPerUnit: '24 pieces',
        UnitPrice: 13.25,
        UnitsInStock: 62,
        UnitsOnOrder: 0,
        ReorderLevel: 20,
        Discontinued: false,
        Category: {
            CategoryID: 8,
            CategoryName: 'Seafood',
            Description: 'Seaweed and fish'
        }
    },
    {
        ProductID: 59,
        ProductName: 'Raclette Courdavault',
        SupplierID: 28,
        CategoryID: 4,
        QuantityPerUnit: '5 kg pkg.',
        UnitPrice: 55.0,
        UnitsInStock: 79,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 4,
            CategoryName: 'Dairy Products',
            Description: 'Cheeses'
        }
    },
    {
        ProductID: 60,
        ProductName: 'Camembert Pierrot',
        SupplierID: 28,
        CategoryID: 4,
        QuantityPerUnit: '15 - 300 g rounds',
        UnitPrice: 34.0,
        UnitsInStock: 19,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 4,
            CategoryName: 'Dairy Products',
            Description: 'Cheeses'
        }
    },
    {
        ProductID: 61,
        ProductName: "Sirop d'érable",
        SupplierID: 29,
        CategoryID: 2,
        QuantityPerUnit: '24 - 500 ml bottles',
        UnitPrice: 28.5,
        UnitsInStock: 113,
        UnitsOnOrder: 0,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
            CategoryID: 2,
            CategoryName: 'Condiments',
            Description: 'Sweet and savory sauces, relishes, spreads, and seasonings'
        }
    },
    {
        ProductID: 62,
        ProductName: 'Tarte au sucre',
        SupplierID: 29,
        CategoryID: 3,
        QuantityPerUnit: '48 pies',
        UnitPrice: 49.3,
        UnitsInStock: 17,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 3,
            CategoryName: 'Confections',
            Description: 'Desserts, candies, and sweet breads'
        }
    },
    {
        ProductID: 63,
        ProductName: 'Vegie-spread',
        SupplierID: 7,
        CategoryID: 2,
        QuantityPerUnit: '15 - 625 g jars',
        UnitPrice: 43.9,
        UnitsInStock: 24,
        UnitsOnOrder: 0,
        ReorderLevel: 5,
        Discontinued: false,
        Category: {
            CategoryID: 2,
            CategoryName: 'Condiments',
            Description: 'Sweet and savory sauces, relishes, spreads, and seasonings'
        }
    },
    {
        ProductID: 64,
        ProductName: 'Wimmers gute Semmelknödel',
        SupplierID: 12,
        CategoryID: 5,
        QuantityPerUnit: '20 bags x 4 pieces',
        UnitPrice: 33.25,
        UnitsInStock: 22,
        UnitsOnOrder: 80,
        ReorderLevel: 30,
        Discontinued: false,
        Category: {
            CategoryID: 5,
            CategoryName: 'Grains/Cereals',
            Description: 'Breads, crackers, pasta, and cereal'
        }
    },
    {
        ProductID: 65,
        ProductName: 'Louisiana Fiery Hot Pepper Sauce',
        SupplierID: 2,
        CategoryID: 2,
        QuantityPerUnit: '32 - 8 oz bottles',
        UnitPrice: 21.05,
        UnitsInStock: 76,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 2,
            CategoryName: 'Condiments',
            Description: 'Sweet and savory sauces, relishes, spreads, and seasonings'
        }
    },
    {
        ProductID: 66,
        ProductName: 'Louisiana Hot Spiced Okra',
        SupplierID: 2,
        CategoryID: 2,
        QuantityPerUnit: '24 - 8 oz jars',
        UnitPrice: 17.0,
        UnitsInStock: 4,
        UnitsOnOrder: 100,
        ReorderLevel: 20,
        Discontinued: false,
        Category: {
            CategoryID: 2,
            CategoryName: 'Condiments',
            Description: 'Sweet and savory sauces, relishes, spreads, and seasonings'
        }
    },
    {
        ProductID: 67,
        ProductName: 'Laughing Lumberjack Lager',
        SupplierID: 16,
        CategoryID: 1,
        QuantityPerUnit: '24 - 12 oz bottles',
        UnitPrice: 14.0,
        UnitsInStock: 52,
        UnitsOnOrder: 0,
        ReorderLevel: 10,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: 'Beverages',
            Description: 'Soft drinks, coffees, teas, beers, and ales'
        }
    },
    {
        ProductID: 68,
        ProductName: 'Scottish Longbreads',
        SupplierID: 8,
        CategoryID: 3,
        QuantityPerUnit: '10 boxes x 8 pieces',
        UnitPrice: 12.5,
        UnitsInStock: 6,
        UnitsOnOrder: 10,
        ReorderLevel: 15,
        Discontinued: false,
        Category: {
            CategoryID: 3,
            CategoryName: 'Confections',
            Description: 'Desserts, candies, and sweet breads'
        }
    },
    {
        ProductID: 69,
        ProductName: 'Gudbrandsdalsost',
        SupplierID: 15,
        CategoryID: 4,
        QuantityPerUnit: '10 kg pkg.',
        UnitPrice: 36.0,
        UnitsInStock: 26,
        UnitsOnOrder: 0,
        ReorderLevel: 15,
        Discontinued: false,
        Category: {
            CategoryID: 4,
            CategoryName: 'Dairy Products',
            Description: 'Cheeses'
        }
    },
    {
        ProductID: 70,
        ProductName: 'Outback Lager',
        SupplierID: 7,
        CategoryID: 1,
        QuantityPerUnit: '24 - 355 ml bottles',
        UnitPrice: 15.0,
        UnitsInStock: 15,
        UnitsOnOrder: 10,
        ReorderLevel: 30,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: 'Beverages',
            Description: 'Soft drinks, coffees, teas, beers, and ales'
        }
    },
    {
        ProductID: 71,
        ProductName: 'Flotemysost',
        SupplierID: 15,
        CategoryID: 4,
        QuantityPerUnit: '10 - 500 g pkgs.',
        UnitPrice: 21.5,
        UnitsInStock: 26,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 4,
            CategoryName: 'Dairy Products',
            Description: 'Cheeses'
        }
    },
    {
        ProductID: 72,
        ProductName: 'Mozzarella di Giovanni',
        SupplierID: 14,
        CategoryID: 4,
        QuantityPerUnit: '24 - 200 g pkgs.',
        UnitPrice: 34.8,
        UnitsInStock: 14,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 4,
            CategoryName: 'Dairy Products',
            Description: 'Cheeses'
        }
    },
    {
        ProductID: 73,
        ProductName: 'Röd Kaviar',
        SupplierID: 17,
        CategoryID: 8,
        QuantityPerUnit: '24 - 150 g jars',
        UnitPrice: 15.0,
        UnitsInStock: 101,
        UnitsOnOrder: 0,
        ReorderLevel: 5,
        Discontinued: false,
        Category: {
            CategoryID: 8,
            CategoryName: 'Seafood',
            Description: 'Seaweed and fish'
        }
    },
    {
        ProductID: 74,
        ProductName: 'Longlife Tofu',
        SupplierID: 4,
        CategoryID: 7,
        QuantityPerUnit: '5 kg pkg.',
        UnitPrice: 10.0,
        UnitsInStock: 4,
        UnitsOnOrder: 20,
        ReorderLevel: 5,
        Discontinued: false,
        Category: {
            CategoryID: 7,
            CategoryName: 'Produce',
            Description: 'Dried fruit and bean curd'
        }
    },
    {
        ProductID: 75,
        ProductName: 'Rhönbräu Klosterbier',
        SupplierID: 12,
        CategoryID: 1,
        QuantityPerUnit: '24 - 0.5 l bottles',
        UnitPrice: 7.75,
        UnitsInStock: 125,
        UnitsOnOrder: 0,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: 'Beverages',
            Description: 'Soft drinks, coffees, teas, beers, and ales'
        }
    },
    {
        ProductID: 76,
        ProductName: 'Lakkalikööri',
        SupplierID: 23,
        CategoryID: 1,
        QuantityPerUnit: '500 ml',
        UnitPrice: 18.0,
        UnitsInStock: 57,
        UnitsOnOrder: 0,
        ReorderLevel: 20,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: 'Beverages',
            Description: 'Soft drinks, coffees, teas, beers, and ales'
        }
    },
    {
        ProductID: 77,
        ProductName: 'Original Frankfurter grüne Soße',
        SupplierID: 12,
        CategoryID: 2,
        QuantityPerUnit: '12 boxes',
        UnitPrice: 13.0,
        UnitsInStock: 32,
        UnitsOnOrder: 0,
        ReorderLevel: 15,
        Discontinued: false,
        Category: {
            CategoryID: 2,
            CategoryName: 'Condiments',
            Description: 'Sweet and savory sauces, relishes, spreads, and seasonings'
        }
    }
];
```  
### 3. create categories for data  
`app/dummyData/data.categories.ts`  
```typescript
export class Category {
    public text: string = '';
    public value: number | null = 0;
}

export const categories: Category[] = [
    { text: 'Beverages', value: 1 },
    { text: 'Condiments', value: 2 },
    { text: 'Confections', value: 3 },
    { text: 'Dairy Products', value: 4 },
    { text: 'Grains/Cereals', value: 5 },
    { text: 'Meat/Poultry', value: 6 },
    { text: 'Produce', value: 7 },
    { text: 'Seafood', value: 8 }
];
```  
### 4. create a service for this  
```sh
ng g s service/product.service.ts
```  
#### `app/service/product.service.ts`:  
```typescript
import {Injectable} from '@angular/core';
import {DataResult, orderBy, process, SortDescriptor} from '@progress/kendo-data-query';
import {Observable, of} from 'rxjs';

import {products} from '../dummyData/data.products';

@Injectable()
export class ProductService {
  public getProducts( skip: number, pageSize: number, sortDescriptor: SortDescriptor[],
                      filterTerm: number|null): Observable<DataResult> {

    let data;

    if (filterTerm) {
      data = process(orderBy(products, sortDescriptor), {
               filter: {
                 logic: 'and',
                 filters:
                     [{field: 'CategoryID', operator: 'eq', value: filterTerm}]
               }
             }).data;
    } else {
      data = orderBy(products, sortDescriptor);
    }

    return of({data: data.slice(skip, skip + pageSize), total: data.length});
    
  }
}
```  
### 5. Apply dropdown to grid (Optional)  
```sh
ng add @progress/kendo-angular-dropdowns
```  
unable animation for dropdown  
`app.config.ts` / `app-routing.module.ts`    
```typescript
// config file: standalone project
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideAnimations} from '@angular/platform-browser/animations';   // 🔄: import here
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations()  // 🔄: add there
  ]
};
```  
### 6. Finally implementing Component  
`app.component.ts`  
```typescript
import { Component } from '@angular/core';
import { KENDO_DATEINPUTS } from '@progress/kendo-angular-dateinputs';
import { GridDataResult, KENDO_GRID, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { categories, Category } from './dummyData/data.categories';
import { ProductService } from './service/product.service';
import { CommonModule } from '@angular/common';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';

@Component({
    selector: 'app-root',
    imports: [CommonModule, KENDO_GRID, KENDO_DROPDOWNS],
    providers: [ProductService],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    public title = "Kendo UI for Angular Quick Start";
    public dropDownItems: Category[] = categories;
    public defaultItem: Category = { text: 'Filter by Category', value: null };

    public gridItems: Observable<GridDataResult> | undefined;
    public pageSize: number = 10;
    public skip: number = 0;
    public sortDescriptor: SortDescriptor[] = [];
    public filterTerm: number | null = null;

    constructor(private service: ProductService) {
        this.loadGridItems();
    }

    public pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadGridItems();
    }

    private loadGridItems(): void {
        this.gridItems = this.service.getProducts(this.skip, this.pageSize, this.sortDescriptor, this.filterTerm);
    }

    public handleSortChange(descriptor: SortDescriptor[]): void {
        this.sortDescriptor = descriptor;
        this.loadGridItems();
    }

    public handleFilterChange(item: Category): void {
        this.filterTerm = item.value;
        this.skip = 0;
        this.loadGridItems();
    }
}
```  
#### `app.component.html`  
```html
<h1>{{title}}</h1>
<hr />
<kendo-dropdownlist
    [data]="dropDownItems"
    textField="text"
    valueField="value"
    [defaultItem]="defaultItem"
    (valueChange)="handleFilterChange($event)"
    [style.width.px]="170"
>
</kendo-dropdownlist>
<hr />

<kendo-grid
    [data]="(gridItems | async)!"
    [pageSize]="pageSize"
    [skip]="skip"
    [pageable]="true"
    (pageChange)="pageChange($event)"
    [sortable]="true"
    [sort]="sortDescriptor"
    (sortChange)="handleSortChange($event)"
    [height]="475"
    [style.width.px]="1000"
>
    <kendo-grid-column field="ProductID" title="ID" [width]="50"> </kendo-grid-column>
    <kendo-grid-column field="ProductName" title="Product Name"> </kendo-grid-column>
    <kendo-grid-column field="Category.CategoryName" title="Category"> </kendo-grid-column>
    <kendo-grid-column field="UnitPrice" title="Unit Price" [width]="140" format="{0:c}"> </kendo-grid-column>
    <kendo-grid-column field="Discontinued" [width]="140" filter="boolean">
        <ng-template kendoGridCellTemplate let-dataItem>
            <input type="checkbox" [checked]="dataItem.Discontinued" disabled />
        </ng-template>
    </kendo-grid-column>
</kendo-grid>
```  