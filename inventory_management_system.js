//Task 1  craeted an inventory with 5 diffrent products
const inventory = [
 { name: 'Wireless Earbuds', price: 100, quantity: 60, lowStockLevel: 15 },
 { name: 'Smartwatch', price: 255, quantity: 10, lowStockLevel: 2 },   
 { name: 'Gaming laptop', price: 1300, quantity: 11, lowStockLevel: 4 },
{ name: 'Wireless Router', price: 130, quantity: 25, lowStockLevel: 9 },
{ name: 'Bluetooth Speaker', price: 150, quantity: 25, lowStockLevel: 5 }
  ];
  console.log(inventory);

//Task 2
function displayProductDetails() {
const product = inventory.find(object => object.name === 'Smartwatch'); // found the Smartwatch name within the inventory
let stockStatus = product.quantity >= product.lowStockLevel ? "In Stock" : "Low Stock"; // if product quantity is more than the stock level it will print in stock
    
    console.log(`Product Name: ${product.name}`);
    console.log(`Price: ${product.price}`);
    console.log(`Quantity in Stock: ${product.quantity}`);
    console.log(`Stock Status: ${stockStatus}`);
}
console.log(displayProductDetails());

//Task 3
function updateStock(product,unitssold){
    let stockAfter = product.quantity - unitssold;// takes product quanitity minus the function argument units sold
     if (stockAfter === 0 || unitssold > product.quantity) // before subtraction if unitssold is more than the quantity print out of stock
        return (`Product "${product.name}" is now Out of Stock.`);
    else if (stockAfter <= product.lowStockLevel  ) 
        return (`Product "${product.name}" is now Low Stock.`);
    else
        return (`Product "${product.name}" went thru.`);
    }
    const product = inventory.find(object => object.name === 'Smartwatch');
    console.log(updateStock(product,8));
//Task 4
function checkLowStock(inventory)
{
    inventory.forEach(object => {
        if (object.quantity <= object.lowStockLevel)
            return(`${object.name} is Low Stock`);
        
    });
}
    console.log(checkLowStock(inventory));

//Task 5 
function calculateInventoryValue()
{
 Productvalue = inventory.map(object => object.price * object.quantity); // takes the invetory array and each object to multiply them by their price and quanitity
 InventoryTotalValue = Productvalue.reduce((total,Productvalue) => total + Productvalue,0); // and then with the new array adds the productvalue them all together 
 return InventoryTotalValue;
}
console.log('Total Inventory Value:',calculateInventoryValue()); // checks to see if function operates

//Task 6
function processSale(x)
{
        let productName = inventory.find(object => object.name === x); // checks to see if there is an object naem in the array that matches the function argument of the obect your looking for
        if (!productName){
            return console.log("The product is not in the inventory"); // if there is no name/ false it prints not in inventory
        }
        else{
            return updateStock(product,8);
        }
}
processSale('Iphone'); // checks to see of function operates
    
        





