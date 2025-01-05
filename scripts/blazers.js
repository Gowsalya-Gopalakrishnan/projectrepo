const products = [
    {name:"ALICE + OLIVIA",price:599.99,description:"CHRISTIAN LOUBOUTIN SPORTY KATE 85 LEATHER PUMP",image:'./assets/blazers alice+olivia 242.png',oldPrice:845.00,category:"GUCCI"},
    {name:"ZADIG & VOLTAIRE",price:759.99,description:"MANOLO BLAHNIK HANGISI 90 SATIN PUMP",image:'./assets/blazers zadig&voltaire 152.png',oldPrice:1195.00,category:"CHRISTIAN"},
    {name:"BEULAH",price:699.99,description:"GUCCI BLONDIE MINI LEATHER SHOULDER women blazers",image:'./assets/blazers beulah 89.png',oldPrice:1790.00,category:"VALENTINOBYMARIO"},
    {name:"GUCCI",price:895.00,description:"CHRISTIAN LOUBOUTIN HOT CHICK SLING 70 PATENT SLINGBACL PUMP",image:'./assets/blazers gucci 899.png',oldPrice:895.00,category:"CHRISTIAN"},
    {name:"DOLCE & GABBANA",price:995.00,description:"GUCCI SYLVIE SMALL SHOULDER women blazers LEATHER CLUTCH women blazers",image:'./assets/blazers dolce& garbbana 2180.png',oldPrice:2630.00,category:"GUCCI"},
    {name:"VERSACE JEANS COUTURE",price:629.99,description:"BOTTEGA VENETA WOMEN'S W/WOVEN DETAIL BLACK",image:'./assets/blazers versace jeans couture 273.png',oldPrice:950.00,category:"BOTTEGA VENETA"},
    {name:"GUCCI",price:599.99,description:"SAINT LAURENT KATE SMALL SHINY GRAINED LEATHER SHOULDER women blazers",image:'./assets/blazers gucci 2024.png',oldPrice:2150.00,category:"SAINT LAURENT"},
    {name:"MAX MARA",price:579.99,description:"TOM FORD WOMEN'S EMBOSSED CROCODILE LEATHER MINI CLUTCH",image:'./assets/blazers zadig&voltaire 242.png',oldPrice:1225.00,category:"CHIRISTIAN"},
    {name:"MAX MARA",price:539.99,description:"GUCCI TORCHON DOUBLE G LEATHER SHOULDER women blazers",image:'./assets/blazers max mara 539.png',oldPrice:1323.00,category:"GUCCI"},
    {name:"PHILLIP LIM",price:719.99,description:"GUCCI GG MARMONT SMALL LEATHER CROSSBODY",image:'./assets/blazers phillip lim 349.png',oldPrice:3350.00,category:"GUCCI"},
    {name:"IRO",price:569.99,description:"GUCCI INTERLOCKING G GG SUPREME CANVAS & LEATHER SHOULDER women blazers",image:'./assets/blazers iro 249.png',oldPrice:860.00,category:"GUCCI"},
    {name:"LAFAYETTE 148 NEW YORK",price:1260.00,description:"TOM FORD WOMENS EVENING HOBO women blazers IN BLACK",image:'./assets/blazers anne klein 59.png',oldPrice:1390.00,category:"BALENCIAGA"},
    {name:"HUGO BOSS",price:599.99,description:"THE ATTICO WOMEN'S MIRROR- EFFECT SUNRISE SHOULDER women blazers",image:'./assets/blazers ba&sh 179.png',oldPrice:845.00,category:"BALENCIAGA"},
    {name:"THEORY",price:1034.99,description:"DIOR LEATHER TOTE",image:'./assets/blazers lafayette148newyork 254.png',oldPrice:6900.00,category:"DIOR"},
    {name:"EILEEN FISHER",price:699.99,description:"DIOR BOOK LARGE CANVAS TOTE",image:'./assets/blazers hugo boss 187.png',oldPrice:1190.00,category:"DIOR"},
    {name:"MAJE",price:659.99,description:"TOM FORD WOMENS CHAIN LINK STRAP SHOULDER women blazers IN BLACK",image:'./assets/blazers theory 152.png',oldPrice:1350.00,category:"BALENCIAGA"},
    {name:"ZADIG & VOLTAIRE",price:799.99,description:"BOTTEGA VENETA MEN'S LEATHER BACKPACK",image:'./assets/blazers eileen fisher 98.png',oldPrice:795.00,category:"BOTTEGA VENETA"},
    {name:"VINCE",price:629.99,description:"3.1 PHILLIP LIM SOLEIL MINI DRAWSTRING LEATHER BUCKET women blazers",image:'./assets/blazers maje 899.png',oldPrice:1190.00,category:"BALENCIAGA"},
    {name:"VINCE",price:949.99,description:"TOM FORD WOMENS GRAINED LEATHER CHAIN CLUTCH IN BLACK",image:'./assets/blazers zadig&voltaire 261.png',oldPrice:945.00,category:"BALENCIAGA"},
    {name:"ST.JOHN",price:599.99,description:"TOM FORD WOMEN'S WHITNEY MINI BUCKET women blazers IN",image:'./assets/blazers vince 349.pmg.webp',oldPrice:1045.00,category:"BALENCIAGA"},
    {name:"THE SEI",price:799.99,description:"BOTTEGA VENETA TOP HANDLE LEATHER BRIEFCASE BLACK",image:'./assets/blazers vince 305.png',oldPrice:995.00,category:"BOTTEGA VENETA"},
    {name:"ZADIG & VOLTAIRE",price:779.99,description:"GUCCI LUCE SMALL CANVAS & LEATHER SHOULDER women blazers",image:'./assets/blazers st john 759.png',oldPrice:1050.00,category:"GUCCI"},
    {name:"VINCE",price:699.99,description:"CHLOE MINI LEATHER CROSSBODY CAPE women blazers",image:'./assets/blazers the sei 349.png',oldPrice:1560.00,category:"VALENTINOBYMARIO"},
    {name:"LAFAYETTE 148 NEW YORK",price:629.99,description:"DIOR DIORIVERA LADY D-JOY SMALL LEATHER SHOULDER women blazers",image:'./assets/blazers zadig&voltaire 479.png',oldPrice:1190.00,category:"DIOR"},
    {name:"ZADIG & VOLTAIRE",price:750.00,description:"DIOR BOOK LARGE TOTE",image:'./assets/blazers vince 316.png',oldPrice:1480.00,category:"DIOR"},
    {name:"KOBI HALPERIN",price:329.99,description:"DIOR CARO SMALL LEATHER SHOULDER women blazers",image:'./assets/blazers lafayette148newyork 399.png',oldPrice:1950.00,category:"DIOR"},
    {name:"PESERICO",price:149.99,description:"VALENTINO VLOGO LEATHER BUCKET women blazers(AUTHENTIC PRE- OWNED)",image:'./assets/blazers zadig&voltaire 179.png',oldPrice:1090.00,category:"VALENTINO"},
    {name:"ZADIG & VOLTAIRE",price:192.99,description:"FERRAGAMO LEATHER SHOULDER women blazers",image:'./assets/blazers kobi halperin 113.png',oldPrice:1475.00,category:"FERRAGAMO"},
    {name:"ZADIG & VOLTAIRE",price:449.99,description:"FERRAGAMO WOMENS GANCINI MEDIUM TOP HANDLE women blazers",image:'./assets/blazers peserico 283.png',oldPrice:895.00,category:"FERRAGAMO"},
    {name:"ZADIG & VOLTAIRE",price:409.99,description:"FERRAGAMO WOMENS VARA BOW SMOOTH LEATHER TOTE",image:'./assets/blazers zadig&voltaire 251.png',oldPrice:695.00,category:"FERRAGAMO"},
    {name:"SAINT LAURENT",price:483.99,description:"CELINE TRIOMPHE MINAUDIERE LEATHER CLUTCH",image:'./assets/blazers zadig&voltaire 242 old 698.png',oldPrice:1100.00,category:"VALENTINOBYMARIO"},
    {name:"GUCCI",price:659.99,description:"FERRAGAMO WOMEN'S women blazersS.. BLACK",image:'./assets/blazers zadig&voltaire 242.png',oldPrice:1950.00,category:"VALENTINOBYMARIO"},
   
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

