//Task 1
const inventory = [
 { name: 'Wireless Earbuds', price: 100, quantity: 60, lowStockLevel: 15 },
 { name: 'Smartwatch', price: 255, quantity: 10, lowStockLevel: 2 },   
 { name: 'Gaming laptop', price: 1300, quantity: 11, lowStockLevel: 4 },
{ name: 'Wireless Router', price: 130, quantity: 25, lowStockLevel: 9 },
{ name: 'Bluetooth Speaker', price: 150, quantity: 25, lowStockLevel: 5 }
  ];
  console.log(inventory);

//Task 2
const product = {
    name: "Smartwatch",
    price: 255,
    quantity: 10,
    lowStockLevel: 2
};
function displayProductDetails() {
const product = inventory.find(inventory => inventory.name === 'Smartwatch')
let stockStatus = product.quantity >= product.lowStockLevel ? "In Stock" : "Low Stock";
    
    console.log(`Product Name: ${product.name}`);
    console.log(`Price: ${product.price}`);
    console.log(`Quantity in Stock: ${product.quantity}`);
    console.log(`Stock Status: ${stockStatus}`);
}
console.log(displayProductDetails());

//Task 3
function updateStock(product,unitssold){
    let stockAfter = product.quantity - unitssold;
     if (stockAfter === 0 || unitssold > product.quantity   )
        return (`Product "${product.name}" is now Out of Stock.`);
    else if (stockAfter <= product.lowStockLevel  ) 
        return (`Product "${product.name}" is now Low Stock.`);
    
    }
    console.log(updateStock(product,8));
//Task 4
function checkLowStock()
{
    let newinventory = inventory.filter(product => product.quantity <= product.lowStockLevel);
    newinventory.forEach(object => console.log(object.name));
}
    console.log(checkLowStock());

//Task 5 
    
        





