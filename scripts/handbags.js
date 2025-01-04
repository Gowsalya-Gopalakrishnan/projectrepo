const products = [
    {name:"GUCCI",price:800,description:"GUCCI WOMEN'S PYTHON SOFT STIRRUP CLUTCH BAG",image:'./assets/handbagsgucci1455.png',oldPrice:2400,category:"GUCCI"},
    {name:"MULBERRY",price:1500,description:"MULBERRY MINI IRIS HANDBAG",image:'./assets/handbags mulberry 684.png',oldPrice:1240,category:"CHRISTIAN"},
    {name:"TOM FORD",price:400,description:"TOM FORD WOMENS QUILTED SHOULDER BAG IN BLACK",image:'./assets/handbags tomford 1110.png',oldPrice:2990,category:"CHRISTIAN"},
    {name:"GUCCI",price:1526.00,description:"GUCCI SYLVIE SMALL SHOULDER BAG LEATHER CLUTCH BAG",image:'./assets/handbagsgucci 1526.png',oldPrice:2630.00,category:"GUCCI"},
    {name:"BOTTEGA VENETA",price:345.00,description:"BOTTEGA VENETA WOMEN'S W/WOVEN DETAIL BLACK",image:'./assets/bottega venetta 345.png',oldPrice:950.00,category:"BOTTEGA VENETA"},
    {name:"SAINT LAURENT",price:1599.99,description:"SAINT LAURENT KATE SMALL SHINY GRAINED LEATHER SHOULDER BAG",image:'./assets/saint laurent 1599.png',oldPrice:2150.00,category:"SAINT LAURENT"},
    {name:"TOM FORD",price:1556.00,description:"TOM FORD WOMEN'S EMBOSSED CROCODILE LEATHER MINI CLUTCH",image:'./assets/tom ford 1556.png',oldPrice:1942.00,category:"CHIRISTIAN"},
    {name:"GUCCI",price:1599.99,description:"GUCCI TORCHON DOUBLE G LEATHER SHOULDER BAG",image:'./assets/gucci 1599 red color bag.png',oldPrice:2690.00,category:"GUCCI"},
    {name:"GUCCI",price:1799.99,description:"GUCCI GG MARMONT SMALL LEATHER CROSSBODY",image:'./assets/gucci 1799.png',oldPrice:2500.00,category:"GUCCI"},
    {name:"GUCCI",price:1099.99,description:"GUCCI INTERLOCKING G GG SUPREME CANVAS & LEATHER SHOULDER BAG",image:'./assets/gucci 1099.png',oldPrice:1400.00,category:"GUCCI"},
    {name:"TOM FORD",price:1240.00,description:"TOM FORD WOMENS EVENING HOBO BAG IN BLACK",image:'./assets/tom ford 1240.png',oldPrice:3290.00,category:"BALENCIAGA"},
    {name:"THE ATTICO",price:701.00,description:"THE ATTICO WOMEN'S MIRROR- EFFECT SUNRISE SHOULDER BAG",image:'./assets/the attico 701.png',oldPrice:1343.00,category:"BALENCIAGA"},
    {name:"DIOR",price:5699.99,description:"DIOR LEATHER TOTE",image:'./assets/dior 5699.png',oldPrice:6900.00,category:"DIOR"},
    {name:"DIOR",price:3199.99,description:"DIOR BOOK LARGE CANVAS TOTE",image:'./assets/dior 3199.png',oldPrice:3800.00,category:"DIOR"},
    {name:"TOM FORD",price:1380.00,description:"TOM FORD WOMENS CHAIN LINK STRAP SHOULDER BAG IN BLACK",image:'./assets/tom ford 1380.png',oldPrice:3690.00,category:"BALENCIAGA"},
    {name:"BOTTEGA VENETA",price:548.00,description:"BOTTEGA VENETA MEN'S LEATHER BACKPACK",image:'./assets/bottega veneta 548.png',oldPrice:1213.00,category:"BOTTEGA VENETA"},
    {name:"PHILLIP LIM",price:239.99,description:"3.1 PHILLIP LIM SOLEIL MINI DRAWSTRING LEATHER BUCKET BAG",image:'./assets/philip lim 239.png',oldPrice:650.00,category:"BALENCIAGA"},
    {name:"TOM FORD",price:750.00,description:"TOM FORD WOMENS GRAINED LEATHER CHAIN CLUTCH IN BLACK",image:'./assets/tom ford 750.png',oldPrice:2350.00,category:"BALENCIAGA"},
    {name:"TOM FORD",price:1826.00,description:"TOM FORD WOMEN'S WHITNEY MINI BUCKET BAG IN",image:'./assets/tom ford 1826.png',oldPrice:2285.00,category:"BALENCIAGA"},
    {name:"BOTTEGA VENETA",price:187.00,description:"BOTTEGA VENETA TOP HANDLE LEATHER BRIEFCASE BLACK",image:'./assets/bottega veneta 1187.png',oldPrice:2711.00,category:"BOTTEGA VENETA"},
    {name:"GUCCI",price:1999.99,description:"GUCCI LUCE SMALL CANVAS & LEATHER SHOULDER BAG",image:'./assets/gucci 1999.png',oldPrice:3200.00,category:"GUCCI"},
    {name:"CHLOE",price:999.99,description:"CHLOE MINI LEATHER CROSSBODY CAPE BAG",image:'./assets/chloe 999.png',oldPrice:1560.00,category:"VALENTINOBYMARIO"},
    {name:"DIOR",price:4399.99,description:"DIOR DIORIVERA LADY D-JOY SMALL LEATHER SHOULDER BAG",image:'./assets/dior 4399.png',oldPrice:4900.00,category:"DIOR"},
    {name:"DIOR",price:6999.99,description:"DIOR BOOK LARGE TOTE",image:'./assets/dior 6999.png',oldPrice:7980.00,category:"DIOR"},
    {name:"DIOR",price:5899.99,description:"DIOR CARO SMALL LEATHER SHOULDER BAG",image:'./assets/dior 5899.png',oldPrice:6800.00,category:"DIOR"},
    {name:"VALENTINO",price:834.99,description:"VALENTINO VLOGO LEATHER BUCKET BAG(AUTHENTIC PRE- OWNED)",image:'./assets/valentino 834.png',oldPrice:1290.00,category:"VALENTINO"},
    {name:"FERRAGAMO",price:809.99,description:"FERRAGAMO LEATHER SHOULDER BAG",image:'./assets/ferragamo 809.png',oldPrice:1480.00,category:"FERRAGAMO"},
    {name:"FERRAGAMO",price:1373.99,description:"FERRAGAMO WOMENS GANCINI MEDIUM TOP HANDLE BAG",image:'./assets/ferragamo 1373.png',oldPrice:2190.00,category:"FERRAGAMO"},
    {name:"FERRAGAMO",price:1248.99,description:"FERRAGAMO WOMENS VARA BOW SMOOTH LEATHER TOTE",image:'./assets/ferragamo 1248.png',oldPrice:2100.00,category:"FERRAGAMO"},
    {name:"CELINE",price:2003.99,description:"CELINE TRIOMPHE MINAUDIERE LEATHER CLUTCH",image:'./assets/celine 2003.png',oldPrice:2990.00,category:"VALENTINOBYMARIO"},
    {name:"GUCCI",price:1229.99,description:"GUCCI BLONDIE MINI LEATHER SHOULDER BAG",image:'./assets/gucci 1229.png',oldPrice:1790.00,category:"VALENTINOBYMARIO"},
    {name:"FERRAGAMO",price:1854.00,description:"FERRAGAMO WOMEN'S BAGS.. BLACK",image:'./assets/ferragamo 1854.png',oldPrice:2413.00,category:"VALENTINOBYMARIO"},
   
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


//filter by category
let filterByCategory = document.getElementById("filterbybrand");
filterByCategory.addEventListener("change",function(){
    let selectedCategory = filterByCategory.value;

    if(selectedCategory === ""){
        filteredProducts = [...products];
    }else if(selectedCategory === "GUCCI"||selectedCategory === "CHIRISTIAN"||selectedCategory === "BOTTEGA VENETA"||selectedCategory === "SAINT LAURENT"
        ||selectedCategory === "BALENCIAGA"||selectedCategory === "VALENTINOBYMARIO"||selectedCategory === "DIOR"||selectedCategory === "VALENTINO"||selectedCategory === "FERRAGAMO")
    {
        filteredProducts =  products.filter(product=> product.category === selectedCategory);
    }else{
        filteredProducts=[...products];
    }
    renderProducts(filteredProducts,filterByCategory);
    operations();
    // filterby();

});

