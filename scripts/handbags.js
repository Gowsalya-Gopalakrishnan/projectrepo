const products = [
    { name: 'Handbags', price: 800, category: 'GUCCI' },
    { name: 'Handbags', price: 1500, category: 'MULBERRY' },
    { name: 'Handbags', price: 400, category: 'TOM FORD' },
    // { name: 'Handbags', price: 200, category: 'furniture' }
    
];
operations()
//sorting by name
let filteredProducts = [...products]
function operations(){
let sortByName = document.getElementById("sortbyname");
sortByName.addEventListener("change",function(){
    if(sortByName.value === "atoz"){
        filteredProducts.sort((a,b)=>a.name.localeCompare(b.name));

    }else if(sortByName.value === "ztoa"){
        filteredProducts.sort((a,b)=>b.name.localeCompare(a.name));
    }
    
});
}
