const inventory = [
 { name: 'Wireless Earbuds', price: 100, quantity: 60, lowStockLevel: 15 },
 { name: 'Smartwatch', price: 255, quantity: 10, lowStockLevel: 2 },   
 { name: 'Gaming laptop', price: 1300, quantity: 11, lowStockLevel: 4 },
{ name: 'Wireless Router', price: 130, quantity: 25, lowStockLevel: 9 },
{ name: 'Bluetooth Speaker', price: 150, quantity: 25, lowStockLevel: 5 }
  ];
  console.log(inventory);

const product = {
    name: "Smartwatch",
    price: 255,
    quantity: 10,
    lowStockLevel: 2
};
function displayProductDetails(product) {
let stockStatus = product.quantity >= product.lowStockLevel ? "In Stock" : "Low Stock";
    
    console.log(`Product Name: ${product.name}`);
    console.log(`Price: ${product.price}`);
    console.log(`Quantity in Stock: ${product.quantity}`);
    console.log(`Stock Status: ${stockStatus}`);
}
console.log(displayProductDetails(product));
