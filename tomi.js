const products = [
    { name: "Laptop", price: 350000, category: "Electronics", inStock: true },
    { name: "Phone", price: 120000, category: "Electronics", inStock: false },
    { name: "Chair", price: 25000, category: "Furniture", inStock: true },
    { name: "Desk", price: 80000, category: "Furniture", inStock: false },
    { name: "Headphones", price: 30000, category: "Electronics", inStock: true }
];



console.log("1. PRODUCT STRINGS:");
const productStrings = products.map(function(product) {
    return product.name + " - #" + product.price + " (" + product.category + ")";
}); 
console.log(productStrings);


console.log("2. IN-STOCK PRODUCTS:");
let inStock = products.filter(function(product) {
    return product.inStock;
});
console.log(inStock);


console.log("3. EXPENSIVE PRODUCTS (over #50,000):");
let expensive = products.filter(function(product) {
    return product.price > 50000;
});
console.log(expensive); 


// console.log(" TOTAL VALUE OF ALL PRODUCTS:");
// let total = products.reduce(func{




// console.log(" PRODUCTS GROUPED BY CATEGORY 
    // I DONT UNDERSTAND THIS


console.log("6. NUMBERED PRODUCT LIST:");
products.forEach(function(product, index) {
    console.log((index + 1) + ". " + product.name);
});



console.log("7. PRODUCTS WITH 10% DISCOUNT:");
const withDiscount = products.map(function(product) {
    let discountPrice = product.price * 0.1;
    return {
        name: product.name,
        price: product.price,
        category: product.category,
        inStock: product.inStock,
        discountPrice: discountPrice
    };
});
console.log(withDiscount);



// console.log("8. MOST EXPENSIVE PRODUCT:");
// let mostExpensive = products.reduce(function(



console.log("9. ALL PRODUCT NAMES:");
let names = products.map(function(product) {
    return product.name;
});
console.log(names);



console.log("10. OUT OF STOCK PRODUCT NAMES:");
let outOfStock = products
    .filter(function(product) {
        return !product.inStock ;
    })
    .map(function(product) {
        return product.name;
    });
console.log(outOfStock);