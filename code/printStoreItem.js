let store = [
  { category: "Fruits", items: ["Apple", "Banana"] },
  { category: "Snacks", items: ["Chips", "Biscuits"] }
];

for (i = 0; i < store.length; i++) {
   // console.log(store[i]);
    for (let j = 0; j < store[i].items.length; j++) {
       console.log(store[i].items[j]);
       
        
    }
    
}