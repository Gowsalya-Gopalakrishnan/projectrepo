const products = [
    {name:"GUCCI",price:599.99,description:"CHRISTIAN LOUBOUTIN SPORTY KATE 85 LEATHER PUMP",image:'./assets/sunglasses gucci 194.png',oldPrice:845.00,category:"GUCCI"},
    {name:"BALENCHIAGA",price:759.99,description:"MANOLO BLAHNIK HANGISI 90 SATIN PUMP",image:'./assets/sunglasses balenciaga 128.png',oldPrice:1195.00,category:"CHRISTIAN"},
    {name:"BALENCHIAGA",price:699.99,description:"GUCCI BLONDIE MINI LEATHER SHOULDER sunglasses",image:'./assets/sunglasses balenciaga 221.png',oldPrice:1790.00,category:"VALENTINOBYMARIO"},
    {name:"SAINT LAURENT",price:895.00,description:"CHRISTIAN LOUBOUTIN HOT CHICK SLING 70 PATENT SLINGBACL PUMP",image:'./assets/sunglasses saint 163.png',oldPrice:895.00,category:"CHRISTIAN"},
    {name:"GUCCI",price:995.00,description:"GUCCI SYLVIE SMALL SHOULDER sunglasses LEATHER CLUTCH sunglasses",image:'./assets/sunglasses gucci 162.png',oldPrice:2630.00,category:"GUCCI"},
    {name:"GUCCI",price:629.99,description:"BOTTEGA VENETA WOMEN'S W/WOVEN DETAIL BLACK",image:'./assets/sunglasses gucci 249.png',oldPrice:950.00,category:"BOTTEGA VENETA"},
    {name:"CHLOE",price:599.99,description:"SAINT LAURENT KATE SMALL SHINY GRAINED LEATHER SHOULDER sunglasses",image:'./assets/sunglasses chloe 164.png',oldPrice:2150.00,category:"SAINT LAURENT"},
    {name:"GUCCI",price:579.99,description:"TOM FORD WOMEN'S EMBOSSED CROCODILE LEATHER MINI CLUTCH",image:'./assets/sunglasses gucci 229.png',oldPrice:1225.00,category:"CHIRISTIAN"},
    {name:"SAINT LAURENT",price:539.99,description:"GUCCI TORCHON DOUBLE G LEATHER SHOULDER sunglasses",image:'./assets/sunglasses saint 172.png',oldPrice:1323.00,category:"GUCCI"},
    {name:"GUCCI",price:719.99,description:"GUCCI GG MARMONT SMALL LEATHER CROSSBODY",image:'./assets/sunglasses gucci 160.png',oldPrice:3350.00,category:"GUCCI"},
    {name:"CHLOE",price:569.99,description:"GUCCI INTERLOCKING G GG SUPREME CANVAS & LEATHER SHOULDER sunglasses",image:'./assets/sunglasses chloe 178.png',oldPrice:860.00,category:"GUCCI"},
    {name:"CHLOE",price:1260.00,description:"TOM FORD WOMENS EVENING HOBO sunglasses IN BLACK",image:'./assets/sunglasses chloe 172.png',oldPrice:1390.00,category:"BALENCIAGA"},
    {name:"CHLOE",price:599.99,description:"THE ATTICO WOMEN'S MIRROR- EFFECT SUNRISE SHOULDER sunglasses",image:'./assets/sunglasses chloe 178 old price 595.png',oldPrice:845.00,category:"BALENCIAGA"},
    {name:"CARTIER",price:1034.99,description:"DIOR LEATHER TOTE",image:'./assets/sunglasses cartier 324.png',oldPrice:6900.00,category:"DIOR"},
    {name:"GUCCI",price:699.99,description:"DIOR BOOK LARGE CANVAS TOTE",image:'./assets/sunglasses gucci 159.png',oldPrice:1190.00,category:"DIOR"},
    {name:"GUCCI",price:659.99,description:"TOM FORD WOMENS CHAIN LINK STRAP SHOULDER sunglasses IN BLACK",image:'./assets/sunglasses gucci 204.png',oldPrice:1350.00,category:"BALENCIAGA"},
    {name:"BALENCHIAGA",price:799.99,description:"BOTTEGA VENETA MEN'S LEATHER BACKPACK",image:'./assets/sunglasses balenciaga 185.png',oldPrice:795.00,category:"BOTTEGA VENETA"},
    {name:"SAINT LAURENT",price:629.99,description:"3.1 PHILLIP LIM SOLEIL MINI DRAWSTRING LEATHER BUCKET sunglasses",image:'./assets/sunglasses saint 175.png',oldPrice:1190.00,category:"BALENCIAGA"},
    {name:"THOM BROWNE",price:949.99,description:"TOM FORD WOMENS GRAINED LEATHER CHAIN CLUTCH IN BLACK",image:'./assets/sunglasses thom 174.png',oldPrice:945.00,category:"BALENCIAGA"},
    {name:"BALENCIAGA",price:599.99,description:"TOM FORD WOMEN'S WHITNEY MINI BUCKET sunglasses IN",image:'./assets/sunglasses balenciaga 160.png',oldPrice:1045.00,category:"BALENCIAGA"},
    {name:"GUCCI",price:799.99,description:"BOTTEGA VENETA TOP HANDLE LEATHER BRIEFCASE BLACK",image:'./assets/sunglasses gucci 231.png',oldPrice:995.00,category:"BOTTEGA VENETA"},
    {name:"CARTIER",price:779.99,description:"GUCCI LUCE SMALL CANVAS & LEATHER SHOULDER sunglasses",image:'./assets/sunglasses cartier 269.png',oldPrice:1050.00,category:"GUCCI"},
    {name:"SAINT LAURENT",price:699.99,description:"CHLOE MINI LEATHER CROSSBODY CAPE sunglasses",image:'./assets/sunglasses saint 137.png',oldPrice:1560.00,category:"VALENTINOBYMARIO"},
    {name:"SAINT LAURENT",price:629.99,description:"DIOR DIORIVERA LADY D-JOY SMALL LEATHER SHOULDER sunglasses",image:'./assets/sunglasses saint 177.png',oldPrice:1190.00,category:"DIOR"},
    {name:"BALENCHIAGA",price:750.00,description:"DIOR BOOK LARGE TOTE",image:'./assets/sunglasses balenciaga 175.png',oldPrice:1480.00,category:"DIOR"},
    {name:"GUCCI",price:329.99,description:"DIOR CARO SMALL LEATHER SHOULDER sunglasses",image:'./assets/sunglasses gucci 172.png',oldPrice:1950.00,category:"DIOR"},
    {name:"GUCCI",price:149.99,description:"VALENTINO VLOGO LEATHER BUCKET sunglasses(AUTHENTIC PRE- OWNED)",image:'./assets/sunglasses gucci 172 old price 520.png',oldPrice:1090.00,category:"VALENTINO"},
    {name:"GUCCI",price:192.99,description:"FERRAGAMO LEATHER SHOULDER sunglasses",image:'./assets/sunglasses gucci 172 old 495.png',oldPrice:1475.00,category:"FERRAGAMO"},
    {name:"BOTTEGA VENETA",price:449.99,description:"FERRAGAMO WOMENS GANCINI MEDIUM TOP HANDLE sunglasses",image:'./assets/sunglasses bottega 160.png',oldPrice:895.00,category:"FERRAGAMO"},
    {name:"GUCCI",price:409.99,description:"FERRAGAMO WOMENS VARA BOW SMOOTH LEATHER TOTE",image:'./assets/sunglasses 377.png',oldPrice:695.00,category:"FERRAGAMO"},
    {name:"SAINT LAURENT",price:483.99,description:"CELINE TRIOMPHE MINAUDIERE LEATHER CLUTCH",image:'./assets/sunglasses 186.png',oldPrice:1100.00,category:"VALENTINOBYMARIO"},
    {name:"GUCCI",price:659.99,description:"FERRAGAMO WOMEN'S sunglassesS.. BLACK",image:'./assets/sunglasses 353.png',oldPrice:1950.00,category:"VALENTINOBYMARIO"},
   
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

