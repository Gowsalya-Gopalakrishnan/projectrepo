const products = [
    {name:"STELLA MCCARTNEY",price:599.99,description:"CHRISTIAN LOUBOUTIN SPORTY KATE 85 LEATHER PUMP",image:'./assets/trending dresses stella mccartney 287.png',oldPrice:845.00,category:"GUCCI"},
    {name:"RHODE",price:759.99,description:"MANOLO BLAHNIK HANGISI 90 SATIN PUMP",image:'./assets/trendingdresses rhode 595.png',oldPrice:1195.00,category:"CHRISTIAN"},
    {name:"ZADIG & VOLTAIRE",price:699.99,description:"GUCCI BLONDIE MINI LEATHER SHOULDER trending dresses",image:'./assets/trendingdresses zadig&voltaire 170.png',oldPrice:1790.00,category:"VALENTINOBYMARIO"},
    {name:"SAMANTHA SUNG",price:895.00,description:"CHRISTIAN LOUBOUTIN HOT CHICK SLING 70 PATENT SLINGBACL PUMP",image:'./assets/trendingdresses samantha sung 359.png',oldPrice:895.00,category:"CHRISTIAN"},
    {name:"MAC DUGGAL",price:995.00,description:"GUCCI SYLVIE SMALL SHOULDER trending dresses LEATHER CLUTCH trending dresses",image:'./assets/trendingdresses mac duggal 269.png',oldPrice:2630.00,category:"GUCCI"},
    {name:"ZADIG & VOLTAIRE",price:629.99,description:"BOTTEGA VENETA WOMEN'S W/WOVEN DETAIL BLACK",image:'./assets/trendingdresses zadig&voltaire 296.png',oldPrice:950.00,category:"BOTTEGA VENETA"},
    {name:"TADASHI SHOJI",price:599.99,description:"SAINT LAURENT KATE SMALL SHINY GRAINED LEATHER SHOULDER trending dresses",image:'./assets/trendingdresses tadashi shoji 165.png',oldPrice:2150.00,category:"SAINT LAURENT"},
    {name:"KOBI HALPERIN",price:579.99,description:"TOM FORD WOMEN'S EMBOSSED CROCODILE LEATHER MINI CLUTCH",image:'./assets/trendingdresses kobi halperin 84.png',oldPrice:1225.00,category:"CHIRISTIAN"},
    {name:"MARCHESA NOTTE",price:539.99,description:"GUCCI TORCHON DOUBLE G LEATHER SHOULDER trending dresses",image:'./assets/trendingdresses marchesa notte 149.png',oldPrice:1323.00,category:"GUCCI"},
    {name:"RENE RUIZ",price:719.99,description:"GUCCI GG MARMONT SMALL LEATHER CROSSBODY",image:'./assets/trendingdresses rene ruiz 316.png',oldPrice:3350.00,category:"GUCCI"},
    {name:"BGL",price:569.99,description:"GUCCI INTERLOCKING G GG SUPREME CANVAS & LEATHER SHOULDER trending dresses",image:'./assets/trendingdresses bgl 299.png',oldPrice:860.00,category:"GUCCI"},
    {name:"BADGLEY MISCHKA",price:1260.00,description:"TOM FORD WOMENS EVENING HOBO trending dresses IN BLACK",image:'./assets/trendingdresses badgley mischka 279.png',oldPrice:1390.00,category:"BALENCIAGA"},
    {name:"BADGLEY MISCHKA",price:599.99,description:"THE ATTICO WOMEN'S MIRROR- EFFECT SUNRISE SHOULDER trending dresses",image:'./assets/trendingdresses badgley mischka 212.png',oldPrice:845.00,category:"BALENCIAGA"},
    {name:"BEULAH",price:1034.99,description:"DIOR LEATHER TOTE",image:'./assets/trendingdresses beulah 89.png',oldPrice:6900.00,category:"DIOR"},
    {name:"ANNE KLEIN",price:699.99,description:"DIOR BOOK LARGE CANVAS TOTE",image:'./assets/trendingdresses anne klein 59.png',oldPrice:1190.00,category:"DIOR"},
    {name:"HUTCH",price:659.99,description:"TOM FORD WOMENS CHAIN LINK STRAP SHOULDER trending dresses IN BLACK",image:'./assets/trendingdresses hutch 159.png',oldPrice:1350.00,category:"BALENCIAGA"},
    {name:"NICHOLAS",price:799.99,description:"BOTTEGA VENETA MEN'S LEATHER BACKPACK",image:'./assets/trendingdresses nicholas 179.png',oldPrice:795.00,category:"BOTTEGA VENETA"},
    {name:"RAMY BROOK",price:629.99,description:"3.1 PHILLIP LIM SOLEIL MINI DRAWSTRING LEATHER BUCKET trending dresses",image:'./assets/trendingdresses ramy brook 170.png',oldPrice:1190.00,category:"BALENCIAGA"},
    {name:"ALICE + OLIVIA",price:949.99,description:"TOM FORD WOMENS GRAINED LEATHER CHAIN CLUTCH IN BLACK",image:'./assets/trendingdresses alice+olivia 206.png',oldPrice:945.00,category:"BALENCIAGA"},
    {name:"RENE RUIZ",price:599.99,description:"TOM FORD WOMEN'S WHITNEY MINI BUCKET trending dresses IN",image:'./assets/trendingdresses rene ruiz 214.png',oldPrice:1045.00,category:"BALENCIAGA"},
    {name:"MARCHESA NOTTE",price:799.99,description:"BOTTEGA VENETA TOP HANDLE LEATHER BRIEFCASE BLACK",image:'./assets/trendingdresses marchesa notte 269.png',oldPrice:995.00,category:"BOTTEGA VENETA"},
    {name:"STAUD",price:779.99,description:"GUCCI LUCE SMALL CANVAS & LEATHER SHOULDER trending dresses",image:'./assets/trendingdresses staud 495.png',oldPrice:1050.00,category:"GUCCI"},
    {name:"LAFAYETTE 48 NEW YORK",price:699.99,description:"CHLOE MINI LEATHER CROSSBODY CAPE trending dresses",image:'./assets/trendingdresses lafayette148newyork 215.png',oldPrice:1560.00,category:"VALENTINOBYMARIO"},
    {name:"RONNY KOBO",price:629.99,description:"DIOR DIORIVERA LADY D-JOY SMALL LEATHER SHOULDER trending dresses",image:'./assets/trendingdresses ronny kobo 169.png',oldPrice:1190.00,category:"DIOR"},
    {name:"MAC DUGGAL",price:750.00,description:"DIOR BOOK LARGE TOTE",image:'./assets/trendingdresses mac duggal 209.png',oldPrice:1480.00,category:"DIOR"},
    {name:"ALBERTA FERRETTI",price:329.99,description:"DIOR CARO SMALL LEATHER SHOULDER trending dresses",image:'./assets/trendingdresses alberta ferretti 289.png',oldPrice:1950.00,category:"DIOR"},
    {name:"MAC DUGGAL",price:149.99,description:"VALENTINO VLOGO LEATHER BUCKET trending dresses(AUTHENTIC PRE- OWNED)",image:'./assets/trendingdresses mac duggal 167.png',oldPrice:1090.00,category:"VALENTINO"},
    {name:"FARM RIO",price:192.99,description:"FERRAGAMO LEATHER SHOULDER trending dresses",image:'./assets/trendingdresses farm rio 360.png',oldPrice:1475.00,category:"FERRAGAMO"},
    {name:"LAFAYETTE 148 NEW YORK",price:449.99,description:"FERRAGAMO WOMENS GANCINI MEDIUM TOP HANDLE trending dresses",image:'./assets/trendingdresses lafayette148newyork 269.png',oldPrice:895.00,category:"FERRAGAMO"},
    {name:"MAC DUGGAL",price:409.99,description:"FERRAGAMO WOMENS VARA BOW SMOOTH LEATHER TOTE",image:'./assets/trendingdresses mac duggal 283.png',oldPrice:695.00,category:"FERRAGAMO"},
    {name:"ZADIG & VOLTAIRE",price:483.99,description:"CELINE TRIOMPHE MINAUDIERE LEATHER CLUTCH",image:'./assets/trendingdresses zadig&voltaire 260.png',oldPrice:1100.00,category:"VALENTINOBYMARIO"},
    {name:"MARCHESA NOTTE",price:659.99,description:"FERRAGAMO WOMEN'S trending dressesS.. BLACK",image:'./assets/trendingdresses marchesa notte 138.png',oldPrice:1950.00,category:"VALENTINOBYMARIO"},
   
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

