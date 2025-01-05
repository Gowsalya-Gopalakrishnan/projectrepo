const products = [
    {name:"JOE'S JEANS",price:599.99,description:"CHRISTIAN LOUBOUTIN SPORTY KATE 85 LEATHER PUMP",image:"./assets/denim joe's jeans 71.png",oldPrice:845.00,category:"GUCCI"},
    {name:"JOE'S JEANS",price:759.99,description:"MANOLO BLAHNIK HANGISI 90 SATIN PUMP",image:"./assets/denim joe's jeans 80.png",oldPrice:1195.00,category:"CHRISTIAN"},
    {name:"HUDSON JEANS",price:699.99,description:"GUCCI BLONDIE MINI LEATHER SHOULDER denim for her & him",image:'./assets/denim hudson jeans 80.png',oldPrice:1790.00,category:"VALENTINOBYMARIO"},
    {name:"BLACK ORCHID",price:895.00,description:"CHRISTIAN LOUBOUTIN HOT CHICK SLING 70 PATENT SLINGBACL PUMP",image:'./assets/denim black orchid 69.png',oldPrice:895.00,category:"CHRISTIAN"},
    {name:"MOTHER",price:995.00,description:"GUCCI SYLVIE SMALL SHOULDER denim for her & him LEATHER CLUTCH denim for her & him",image:'./assets/denim mother 99.png',oldPrice:2630.00,category:"GUCCI"},
    {name:"MOTHER",price:629.99,description:"BOTTEGA VENETA WOMEN'S W/WOVEN DETAIL BLACK",image:'./assets/denim mother 47,png.webp',oldPrice:950.00,category:"BOTTEGA VENETA"},
    {name:"MOTHER",price:599.99,description:"SAINT LAURENT KATE SMALL SHINY GRAINED LEATHER SHOULDER denim for her & him",image:'./assets/denim mother 99 old 258.png',oldPrice:2150.00,category:"SAINT LAURENT"},
    {name:"7 FOR ALL MANKIND",price:579.99,description:"TOM FORD WOMEN'S EMBOSSED CROCODILE LEATHER MINI CLUTCH",image:'./assets/denim 7 for all mankind 89.png',oldPrice:1225.00,category:"CHIRISTIAN"},
    {name:"MOTHER",price:539.99,description:"GUCCI TORCHON DOUBLE G LEATHER SHOULDER denim for her & him",image:'./assets/denim mother 119.png',oldPrice:1323.00,category:"GUCCI"},
    {name:"MOTHER",price:719.99,description:"GUCCI GG MARMONT SMALL LEATHER CROSSBODY",image:'./assets/denim mother 54.png',oldPrice:3350.00,category:"GUCCI"},
    {name:"ALICE + OLIVIA",price:569.99,description:"GUCCI INTERLOCKING G GG SUPREME CANVAS & LEATHER SHOULDER denim for her & him",image:'./assets/denim alice+olivia 206.png',oldPrice:860.00,category:"GUCCI"},
    {name:"MOTHER",price:1260.00,description:"TOM FORD WOMENS EVENING HOBO denim for her & him IN BLACK",image:'./assets/denim saint laurent 185.png',oldPrice:1390.00,category:"BALENCIAGA"},
    {name:"DIESEL",price:599.99,description:"THE ATTICO WOMEN'S MIRROR- EFFECT SUNRISE SHOULDER denim for her & him",image:'./assets/denim mother 99 old 258.png',oldPrice:845.00,category:"BALENCIAGA"},
    {name:"DIESEL",price:1034.99,description:"DIOR LEATHER TOTE",image:'./assets/denim alice+olivia 98.png',oldPrice:6900.00,category:"DIOR"},
    {name:"SP5DER",price:699.99,description:"DIOR BOOK LARGE CANVAS TOTE",image:'./assets/denim mother 89.png',oldPrice:1190.00,category:"DIOR"},
    {name:"JOE'S",price:659.99,description:"TOM FORD WOMENS CHAIN LINK STRAP SHOULDER denim for her & him IN BLACK",image:'./assets/denim diesel 129.png',oldPrice:1350.00,category:"BALENCIAGA"},
    {name:"AMIRI",price:799.99,description:"BOTTEGA VENETA MEN'S LEATHER BACKPACK",image:'./assets/denim diesel 119.png',oldPrice:795.00,category:"BOTTEGA VENETA"},
    {name:"DIESEL",price:629.99,description:"3.1 PHILLIP LIM SOLEIL MINI DRAWSTRING LEATHER BUCKET denim for her & him",image:'./assets/denim sp5der 97.png',oldPrice:1190.00,category:"BALENCIAGA"},
    {name:"ALICE + OLIVIA",price:949.99,description:"TOM FORD WOMENS GRAINED LEATHER CHAIN CLUTCH IN BLACK",image:"./assets/denim joe's 89.png",oldPrice:945.00,category:"BALENCIAGA"},
    {name:"MOTHER",price:599.99,description:"TOM FORD WOMEN'S WHITNEY MINI BUCKET denim for her & him IN",image:'./assets/denim amiri 502.png',oldPrice:1045.00,category:"BALENCIAGA"},
    {name:"7 FOR ALL MANKIND",price:799.99,description:"BOTTEGA VENETA TOP HANDLE LEATHER BRIEFCASE BLACK",image:'./assets/denim diesel 119 old 195.png',oldPrice:995.00,category:"BOTTEGA VENETA"},
    {name:"DL1961",price:779.99,description:"GUCCI LUCE SMALL CANVAS & LEATHER SHOULDER denim for her & him",image:'./assets/denim alice+olivia 149.png',oldPrice:1050.00,category:"GUCCI"},
    {name:"CURRENT ELLIOTT",price:699.99,description:"CHLOE MINI LEATHER CROSSBODY CAPE denim for her & him",image:'./assets/denim mother 99.png',oldPrice:1560.00,category:"VALENTINOBYMARIO"},
    {name:"DIESEL",price:629.99,description:"DIOR DIORIVERA LADY D-JOY SMALL LEATHER SHOULDER denim for her & him",image:'./assets/denim 7 for all mankind 89.png',oldPrice:1190.00,category:"DIOR"},
    {name:"JOE'S JEANS",price:750.00,description:"DIOR BOOK LARGE TOTE",image:'./assets/denim dl1962 143.png',oldPrice:1480.00,category:"DIOR"},
    {name:"HUDSON JEANS",price:329.99,description:"DIOR CARO SMALL LEATHER SHOULDER denim for her & him",image:'./assets/denim current elliott 89.png',oldPrice:1950.00,category:"DIOR"},
    {name:"MOTHER",price:149.99,description:"VALENTINO VLOGO LEATHER BUCKET denim for her & him(AUTHENTIC PRE- OWNED)",image:'./assets/denim diesel 119 old 195 diesel tepphar dark blue.webp',oldPrice:1090.00,category:"VALENTINO"},
    {name:"7 FOR ALL MANKIND",price:192.99,description:"FERRAGAMO LEATHER SHOULDER denim for her & him",image:"./assets/denim joe's jeans 80 old 188.png",oldPrice:1475.00,category:"FERRAGAMO"},
    {name:"DL1961",price:449.99,description:"FERRAGAMO WOMENS GANCINI MEDIUM TOP HANDLE denim for her & him",image:'./assets/denim hudson jeans 80 old 215.png',oldPrice:895.00,category:"FERRAGAMO"},
    {name:"MAC DUGGAL",price:409.99,description:"FERRAGAMO WOMENS VARA BOW SMOOTH LEATHER TOTE",image:'./assets/denim mother 99 old 268.png',oldPrice:695.00,category:"FERRAGAMO"},
    {name:"ZADIG & VOLTAIRE",price:483.99,description:"CELINE TRIOMPHE MINAUDIERE LEATHER CLUTCH",image:'./assets/denim 7 for all mankind 89.png',oldPrice:1100.00,category:"VALENTINOBYMARIO"},
    {name:"MARCHESA NOTTE",price:659.99,description:"FERRAGAMO WOMEN'S denim for her & himS.. BLACK",image:'./assets/denim dl1962 143.png',oldPrice:1950.00,category:"VALENTINOBYMARIO"},
   
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

