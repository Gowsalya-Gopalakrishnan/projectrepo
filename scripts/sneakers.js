const products = [
    {name:"BRUNELLO CUCINELLI",price:599.99,description:"CHRISTIAN LOUBOUTIN SPORTY KATE 85 LEATHER PUMP",image:"./assets/sneakers brunello cucinelli 549.png",oldPrice:845.00,category:"GUCCI"},
    {name:"GUCCI",price:759.99,description:"MANOLO BLAHNIK HANGISI 90 SATIN PUMP",image:"./assets/sneakers gucci 337.png",oldPrice:1195.00,category:"CHRISTIAN"},
    {name:"BALENCIAGA",price:699.99,description:"GUCCI BLONDIE MINI LEATHER SHOULDER MEN'S SNEAKERS",image:'./assets/sneakers balenciaga 469.png',oldPrice:1790.00,category:"VALENTINOBYMARIO"},
    {name:"CHRISTIAN LOUBOUTIN",price:895.00,description:"CHRISTIAN LOUBOUTIN HOT CHICK SLING 70 PATENT SLINGBACL PUMP",image:'./assets/sneakers christian louboutin 572.png',oldPrice:895.00,category:"CHRISTIAN"},
    {name:"BRUNELLO CUCINELLI",price:995.00,description:"GUCCI SYLVIE SMALL SHOULDER MEN'S SNEAKERS LEATHER CLUTCH MEN'S SNEAKERS",image:'./assets/sneakers brunello cucinelli 495.png',oldPrice:2630.00,category:"GUCCI"},
    {name:"GUCCI",price:629.99,description:"BOTTEGA VENETA WOMEN'S W/WOVEN DETAIL BLACK",image:'./assets/sneakers gucci 699.png',oldPrice:950.00,category:"BOTTEGA VENETA"},
    {name:"CHRISTIAN LOUBOUTIN",price:599.99,description:"SAINT LAURENT KATE SMALL SHINY GRAINED LEATHER SHOULDER MEN'S SNEAKERS",image:'./assets/sneakers christian louboutin 728.png',oldPrice:2150.00,category:"SAINT LAURENT"},
    {name:"BALENCIAGA",price:579.99,description:"TOM FORD WOMEN'S EMBOSSED CROCODILE LEATHER MINI CLUTCH",image:'./assets/sneakers balenciaga 323.png',oldPrice:1225.00,category:"CHIRISTIAN"},
    {name:"CHRISTIAN LOUBOUTIN",price:539.99,description:"GUCCI TORCHON DOUBLE G LEATHER SHOULDER MEN'S SNEAKERS",image:'./assets/sneakers christian louboutin 710.png',oldPrice:1323.00,category:"GUCCI"},
    {name:"GUCCI",price:719.99,description:"GUCCI GG MARMONT SMALL LEATHER CROSSBODY",image:'./assets/sneakers gucci 202.png',oldPrice:3350.00,category:"GUCCI"},
    {name:"BALENCIAGA",price:569.99,description:"GUCCI INTERLOCKING G GG SUPREME CANVAS & LEATHER SHOULDER MEN'S SNEAKERS",image:'./assets/sneakers balenciaga 266.png',oldPrice:860.00,category:"GUCCI"},
    {name:"GUCCI",price:1260.00,description:"TOM FORD WOMENS EVENING HOBO MEN'S SNEAKERS IN BLACK",image:'./assets/sneakers gucci 839.png',oldPrice:1390.00,category:"BALENCIAGA"},
    {name:"GUCCI",price:599.99,description:"THE ATTICO WOMEN'S MIRROR- EFFECT SUNRISE SHOULDER MEN'S SNEAKERS",image:'./assets/sneakers gucci 379.png',oldPrice:845.00,category:"BALENCIAGA"},
    {name:"BALENCIAGA",price:1034.99,description:"DIOR LEATHER TOTE",image:'./assets/sneakers balenciaga 504.png',oldPrice:6900.00,category:"DIOR"},
    {name:"GUCCI",price:699.99,description:"DIOR BOOK LARGE CANVAS TOTE",image:'./assets/sneakers gucci 620.png',oldPrice:1190.00,category:"DIOR"},
    {name:"BALENCIAGA",price:659.99,description:"TOM FORD WOMENS CHAIN LINK STRAP SHOULDER MEN'S SNEAKERS IN BLACK",image:'./assets/sneakers balenciaga 404.png',oldPrice:1350.00,category:"BALENCIAGA"},
    {name:"BURBERRY",price:799.99,description:"BOTTEGA VENETA MEN'S LEATHER BACKPACK",image:'./assets/sneakers burberry 629.png',oldPrice:795.00,category:"BOTTEGA VENETA"},
    {name:"GUCCI",price:629.99,description:"3.1 PHILLIP LIM SOLEIL MINI DRAWSTRING LEATHER BUCKET MEN'S SNEAKERS",image:'./assets/sneakers gucci 409.png',oldPrice:1190.00,category:"BALENCIAGA"},
    {name:"DOLCE & GABBANA",price:949.99,description:"TOM FORD WOMENS GRAINED LEATHER CHAIN CLUTCH IN BLACK",image:"./assets/sneakers balenciaga 504.png",oldPrice:945.00,category:"BALENCIAGA"},
    {name:"BALENCIAGA",price:599.99,description:"TOM FORD WOMEN'S WHITNEY MINI BUCKET MEN'S SNEAKERS IN",image:'./assets/sneakers balenciaga 495.png',oldPrice:1045.00,category:"BALENCIAGA"},
    {name:"BALENCIAGA",price:799.99,description:"BOTTEGA VENETA TOP HANDLE LEATHER BRIEFCASE BLACK",image:'./assets/sneakers balenciaga 469 old 620.png',oldPrice:995.00,category:"BOTTEGA VENETA"},
    {name:"MAISON MARGIELA",price:779.99,description:"GUCCI LUCE SMALL CANVAS & LEATHER SHOULDER MEN'S SNEAKERS",image:'./assets/sneakers maison margiela 449.png',oldPrice:1050.00,category:"GUCCI"},
    {name:"GUCCI",price:699.99,description:"CHLOE MINI LEATHER CROSSBODY CAPE MEN'S SNEAKERS",image:'./assets/sneakers gucci 399.png',oldPrice:1560.00,category:"VALENTINOBYMARIO"},
    {name:"GUCCI",price:629.99,description:"DIOR DIORIVERA LADY D-JOY SMALL LEATHER SHOULDER MEN'S SNEAKERS",image:'./assets/sneakers gucci 699 old 930.png',oldPrice:1190.00,category:"DIOR"},
    {name:"CHRISTIAN LOUBOUTIN",price:750.00,description:"DIOR BOOK LARGE TOTE",image:'./assets/sneakers christian louboutin 789.png',oldPrice:1480.00,category:"DIOR"},
    {name:"DOLCE & GABBANA",price:329.99,description:"DIOR CARO SMALL LEATHER SHOULDER MEN'S SNEAKERS",image:'./assets/sneakers  dolce & gabbana 737.png',oldPrice:1950.00,category:"DIOR"},
    {name:"CHRISTIAN LOUBOUTIN",price:149.99,description:"VALENTINO VLOGO LEATHER BUCKET MEN'S SNEAKERS(AUTHENTIC PRE- OWNED)",image:'./assets/sneakers christian louboutin 827.png',oldPrice:1090.00,category:"VALENTINO"},
    {name:"KITON",price:192.99,description:"FERRAGAMO LEATHER SHOULDER MEN'S SNEAKERS",image:"./assets/sneakers kiton 566.png",oldPrice:1475.00,category:"FERRAGAMO"},
    {name:"GUCCI",price:449.99,description:"FERRAGAMO WOMENS GANCINI MEDIUM TOP HANDLE MEN'S SNEAKERS",image:'./assets/sneakers gucci 701.png',oldPrice:895.00,category:"FERRAGAMO"},
    {name:"GUCCI",price:409.99,description:"FERRAGAMO WOMENS VARA BOW SMOOTH LEATHER TOTE",image:'./assets/sneakers gucci 679.png',oldPrice:695.00,category:"FERRAGAMO"},
    {name:"BOTTEGA VENETA",price:483.99,description:"CELINE TRIOMPHE MINAUDIERE LEATHER CLUTCH",image:'./assets/sneakers  bottega veneta 671.png',oldPrice:1100.00,category:"VALENTINOBYMARIO"},
    {name:"MONCLER",price:659.99,description:"FERRAGAMO WOMEN'S MEN'S SNEAKERSS.. BLACK",image:'./assets/sneakers moncler 449.png',oldPrice:1950.00,category:"VALENTINOBYMARIO"},
   
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

