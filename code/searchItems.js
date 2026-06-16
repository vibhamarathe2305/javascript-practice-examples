let store = [
  { category: "Fruits", items: ["Apple", "Banana"] },
  { category: "Snacks", items: ["Chips", "Biscuits"] }
];


for (let  i = 0;  i < store.length;  i++) {
   if (store[i].items.includes("Chips") ) {
    console.log(store[i].items.includes("Chips"));
    
   }
    
}