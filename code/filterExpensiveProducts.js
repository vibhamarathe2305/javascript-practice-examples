let products = [
  { name: "Shoes", price: 2000 },
  { name: "Cap", price: 500 }
];

let newProducts = products.filter(products => products.price <= 1000);

console.log(newProducts);
