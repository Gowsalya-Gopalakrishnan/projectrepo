const products = [
    {name:"CHRISTIAN LOUBOUTIN",price:599.99,description:"CHRISTIAN LOUBOUTIN SPORTY KATE 85 LEATHER PUMP",image:'./assets/shoes christian louboutin 599.png',oldPrice:845.00,category:"GUCCI"},
    {name:"MANOLO BLAHNIK",price:759.99,description:"MANOLO BLAHNIK HANGISI 90 SATIN PUMP",image:'./assets/shoes manolo blahnik 759.png',oldPrice:1195.00,category:"CHRISTIAN"},
    {name:"SAINT LAURENT",price:699.99,description:"GUCCI BLONDIE MINI LEATHER SHOULDER shoes",image:'./assets/shoes saint 699.png',oldPrice:1790.00,category:"VALENTINOBYMARIO"},
    {name:"CHRISTIAN LOUBOUTIN",price:895.00,description:"CHRISTIAN LOUBOUTIN HOT CHICK SLING 70 PATENT SLINGBACL PUMP",image:'./assets/shoes christian 579.png',oldPrice:895.00,category:"CHRISTIAN"},
    {name:"CHRISTIAN LOUBOUTIN",price:995.00,description:"GUCCI SYLVIE SMALL SHOULDER shoes LEATHER CLUTCH shoes",image:'./assets/shoes christian 619.png',oldPrice:2630.00,category:"GUCCI"},
    {name:"CHRISTIAN LOUBOUTIN",price:629.99,description:"BOTTEGA VENETA WOMEN'S W/WOVEN DETAIL BLACK",image:'./assets/shoes christian 629.png',oldPrice:950.00,category:"BOTTEGA VENETA"},
    {name:"CHRISTIAN LOUBOUTIN",price:599.99,description:"SAINT LAURENT KATE SMALL SHINY GRAINED LEATHER SHOULDER shoes",image:'./assets/shoes christian louboutin 599.png',oldPrice:2150.00,category:"SAINT LAURENT"},
    {name:"CHRISTIAN LOUBOUTIN",price:579.99,description:"TOM FORD WOMEN'S EMBOSSED CROCODILE LEATHER MINI CLUTCH",image:'./assets/shoes christian 579.png',oldPrice:1225.00,category:"CHIRISTIAN"},
    {name:"CHRISTIAN LOUBOUTIN",price:539.99,description:"GUCCI TORCHON DOUBLE G LEATHER SHOULDER shoes",image:'./assets/shoes christian 539.png',oldPrice:1323.00,category:"GUCCI"},
    {name:"MANOLO BLAHNIK",price:719.99,description:"GUCCI GG MARMONT SMALL LEATHER CROSSBODY",image:'./assets/shoes manolo 719.png',oldPrice:3350.00,category:"GUCCI"},
    {name:"VALENTINO",price:569.99,description:"GUCCI INTERLOCKING G GG SUPREME CANVAS & LEATHER SHOULDER shoes",image:'./assets/shoes valentino 569.png',oldPrice:860.00,category:"GUCCI"},
    {name:"TOM FORD",price:1260.00,description:"TOM FORD WOMENS EVENING HOBO shoes IN BLACK",image:'./assets/shoes tomford 1260.png',oldPrice:1390.00,category:"BALENCIAGA"},
    {name:"CHIRISTIAN LOUBOUTIN",price:599.99,description:"THE ATTICO WOMEN'S MIRROR- EFFECT SUNRISE SHOULDER shoes",image:'./assets/shoes christian louboutin red color heels 599.png',oldPrice:845.00,category:"BALENCIAGA"},
    {name:"DIOR",price:1034.99,description:"DIOR LEATHER TOTE",image:'./assets/shoes 659.png',oldPrice:6900.00,category:"DIOR"},
    {name:"CHRISTIAN LOUBOUTIN",price:699.99,description:"DIOR BOOK LARGE CANVAS TOTE",image:'./assets/shoes dior 1034.png',oldPrice:1190.00,category:"DIOR"},
    {name:"VALENTINO",price:659.99,description:"TOM FORD WOMENS CHAIN LINK STRAP SHOULDER shoes IN BLACK",image:'./assets/shoes chiristian 699.png',oldPrice:1350.00,category:"BALENCIAGA"},
    {name:"VALENTINO",price:799.99,description:"BOTTEGA VENETA MEN'S LEATHER BACKPACK",image:'./assets/shoes valentino 659.png',oldPrice:795.00,category:"BOTTEGA VENETA"},
    {name:"CHRISTIAN LOUBOUTIN",price:629.99,description:"3.1 PHILLIP LIM SOLEIL MINI DRAWSTRING LEATHER BUCKET shoes",image:'./assets/shoes valentino 854.png',oldPrice:1190.00,category:"BALENCIAGA"},
    {name:"DIOR",price:949.99,description:"TOM FORD WOMENS GRAINED LEATHER CHAIN CLUTCH IN BLACK",image:'./assets/shoes christian louboutin black color heels 629.png',oldPrice:945.00,category:"BALENCIAGA"},
    {name:"CHRISTIAN LOUBOUTIN",price:599.99,description:"TOM FORD WOMEN'S WHITNEY MINI BUCKET shoes IN",image:'./assets/shoes dior 949.png',oldPrice:1045.00,category:"BALENCIAGA"},
    {name:"CHRISTIAN LOUBOUTIN",price:799.99,description:"BOTTEGA VENETA TOP HANDLE LEATHER BRIEFCASE BLACK",image:'./assets/shoes christian purple color 599.png',oldPrice:995.00,category:"BOTTEGA VENETA"},
    {name:"CHRISTIAN LOUBOUTIN",price:779.99,description:"GUCCI LUCE SMALL CANVAS & LEATHER SHOULDER shoes",image:'./assets/shoes chiristian 799.png',oldPrice:1050.00,category:"GUCCI"},
    {name:"SAINT LAURENT",price:699.99,description:"CHLOE MINI LEATHER CROSSBODY CAPE shoes",image:'./assets/shoes christian 779.png',oldPrice:1560.00,category:"VALENTINOBYMARIO"},
    {name:"VALENTINO",price:629.99,description:"DIOR DIORIVERA LADY D-JOY SMALL LEATHER SHOULDER shoes",image:'./assets/shoes saint 699.png',oldPrice:1190.00,category:"DIOR"},
    {name:"ALAIA",price:750.00,description:"DIOR BOOK LARGE TOTE",image:'./assets/shoes valentino 629.png',oldPrice:1480.00,category:"DIOR"},
    {name:"BOTTEGA VENETA",price:329.99,description:"DIOR CARO SMALL LEATHER SHOULDER shoes",image:'./assets/shoes alaia 748.png',oldPrice:1950.00,category:"DIOR"},
    {name:"ALEXANDER MCQUEEN",price:149.99,description:"VALENTINO VLOGO LEATHER BUCKET shoes(AUTHENTIC PRE- OWNED)",image:'./assets/shoes bottega 329.png',oldPrice:1090.00,category:"VALENTINO"},
    {name:"VERSACE",price:192.99,description:"FERRAGAMO LEATHER SHOULDER shoes",image:'./assets/shoes 149 old 1090.png',oldPrice:1475.00,category:"FERRAGAMO"},
    {name:"MOSCHINO",price:449.99,description:"FERRAGAMO WOMENS GANCINI MEDIUM TOP HANDLE shoes",image:'./assets/shoes 192.png',oldPrice:895.00,category:"FERRAGAMO"},
    {name:"FERRAGAMO",price:409.99,description:"FERRAGAMO WOMENS VARA BOW SMOOTH LEATHER TOTE",image:'./assets/shoes 449.png',oldPrice:695.00,category:"FERRAGAMO"},
    {name:"GUCCI",price:483.99,description:"CELINE TRIOMPHE MINAUDIERE LEATHER CLUTCH",image:'./assets/shoes 409.png',oldPrice:1100.00,category:"VALENTINOBYMARIO"},
    {name:"VALENTINO",price:659.99,description:"FERRAGAMO WOMEN'S shoesS.. BLACK",image:'./assets/shoes 483.png',oldPrice:1950.00,category:"VALENTINOBYMARIO"},
   
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

