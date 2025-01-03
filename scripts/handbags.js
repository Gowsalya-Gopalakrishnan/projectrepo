const products = [
    {name:"GUCCI",price:800,description:"GUCCI WOMEN'S PYTHON SOFT STIRRUP CLUTCH BAG",image:'./assets/handbagsgucci1455.png',oldPrice:2400},
    {name:"MULBERRY",price:1500,description:"MULBERRY MINI IRIS HANDBAG",image:'./assets/handbags mulberry 684.png',oldPrice:1240},
    {name:"TOM FORD",price:400,description:"TOM FORD WOMENS QUILTED SHOULDER BAG IN BLACK",image:'./assets/handbags tomford 1110.png',oldPrice:2990},
    {name:"GUCCI",price:1526.00,description:"GUCCI SYLVIE SMALL SHOULDER BAG",image:'./assets/handbagsgucci 1526.png',oldPrice:2630.00}
];

let filteredProducts = [...products];

function renderProducts(productsToRender){
    const productDetails = document.getElementById("product-details");
    productDetails.innerHTML='';

    productsToRender.forEach(product =>{
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML=`
        <img src="${product.image}" alt="product-image">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <span>$${product.oldPrice.toFixed(2)}</span> $${product.price.toFixed(2)}</p>
        `;

        productDetails.appendChild(productDiv)
    });
}
function operations(){
    let sortBySelect = document.getElementById("select");
    sortBySelect.addEventListener("change",function(){
        const sortValue = sortBySelect.value;
        if(sortValue === "atoz"){
            filteredProducts.sort((a,b)=> a.name.localeCompare(b.name));
        }
        else if(sortValue === "ztoa"){
            filteredProducts.sort((a,b)=> b.name.localeCompare(a.name));
        }
        else if(sortValue === "htl"){
            filteredProducts.sort((a,b)=> b.price - a.price);
        }
        else if(sortValue === "lth"){
            filteredProducts.sort((a,b)=> a.price - b.price);
        }

        renderProducts(filteredProducts);
    });
}

renderProducts(filteredProducts);
operations();

