const products = [
    {name:"GUCCI",price:800,description:"GUCCI WOMEN'S PYTHON SOFT STIRRUP CLUTCH BAG",image:'./assets/handbagsgucci1455.png',oldPrice:2400,category:"GUCCI"},
    {name:"MULBERRY",price:1500,description:"MULBERRY MINI IRIS HANDBAG",image:'./assets/handbags mulberry 684.png',oldPrice:1240,category:"CHRISTIAN"},
    {name:"TOM FORD",price:400,description:"TOM FORD WOMENS QUILTED SHOULDER BAG IN BLACK",image:'./assets/handbags tomford 1110.png',oldPrice:2990,category:"CHRISTIAN"},
    {name:"GUCCI",price:1526.00,description:"GUCCI SYLVIE SMALL SHOULDER BAG LEATHER CLUTCH BAG",image:'./assets/handbagsgucci 1526.png',oldPrice:2630.00,category:"GUCCI"},
    {name:"BOTTEGA VENETA",price:345.00,description:"BOTTEGA VENETA WOMEN'S W/WOVEN DETAIL BLACK",image:'./assets/bottega venetta 345.png',oldPrice:950.00,category:"BOTTEGA VENETA"},
    
    {name:"CHRISTIAN LOUBOUTIN",price:599.99,description:"CHRISTIAN LOUBOUTIN SPORTY KATE 85 LEATHER PUMP",image:'./assets/shoes christian louboutin 599.png',oldPrice:845.00,category:"GUCCI"},
    {name:"MANOLO BLAHNIK",price:759.99,description:"MANOLO BLAHNIK HANGISI 90 SATIN PUMP",image:'./assets/shoes manolo blahnik 759.png',oldPrice:1195.00,category:"CHRISTIAN"},
    {name:"SAINT LAURENT",price:699.99,description:"GUCCI BLONDIE MINI LEATHER SHOULDER shoes",image:'./assets/shoes saint 699.png',oldPrice:1790.00,category:"VALENTINOBYMARIO"},
    {name:"CHRISTIAN LOUBOUTIN",price:895.00,description:"CHRISTIAN LOUBOUTIN HOT CHICK SLING 70 PATENT SLINGBACL PUMP",image:'./assets/shoes christian 579.png',oldPrice:895.00,category:"CHRISTIAN"},
    {name:"CHRISTIAN LOUBOUTIN",price:995.00,description:"GUCCI SYLVIE SMALL SHOULDER shoes LEATHER CLUTCH shoes",image:'./assets/shoes christian 619.png',oldPrice:2630.00,category:"GUCCI"},
    
    {name:"ALICE + OLIVIA",price:599.99,description:"CHRISTIAN LOUBOUTIN SPORTY KATE 85 LEATHER PUMP",image:'./assets/blazers alice+olivia 242.png',oldPrice:845.00,category:"GUCCI"},
    {name:"ZADIG & VOLTAIRE",price:759.99,description:"MANOLO BLAHNIK HANGISI 90 SATIN PUMP",image:'./assets/blazers zadig&voltaire 152.png',oldPrice:1195.00,category:"CHRISTIAN"},
    {name:"BEULAH",price:699.99,description:"GUCCI BLONDIE MINI LEATHER SHOULDER women blazers",image:'./assets/blazers beulah 89.png',oldPrice:1790.00,category:"VALENTINOBYMARIO"},
    {name:"GUCCI",price:895.00,description:"CHRISTIAN LOUBOUTIN HOT CHICK SLING 70 PATENT SLINGBACL PUMP",image:'./assets/blazers gucci 899.png',oldPrice:895.00,category:"CHRISTIAN"},
    {name:"DOLCE & GABBANA",price:995.00,description:"GUCCI SYLVIE SMALL SHOULDER women blazers LEATHER CLUTCH women blazers",image:'./assets/blazers dolce& garbbana 2180.png',oldPrice:2630.00,category:"GUCCI"},

    {name:"STELLA MCCARTNEY",price:599.99,description:"CHRISTIAN LOUBOUTIN SPORTY KATE 85 LEATHER PUMP",image:'./assets/trending dresses stella mccartney 287.png',oldPrice:845.00,category:"GUCCI"},
    {name:"RHODE",price:759.99,description:"MANOLO BLAHNIK HANGISI 90 SATIN PUMP",image:'./assets/trendingdresses rhode 595.png',oldPrice:1195.00,category:"CHRISTIAN"},
    {name:"ZADIG & VOLTAIRE",price:699.99,description:"GUCCI BLONDIE MINI LEATHER SHOULDER trending dresses",image:'./assets/trendingdresses zadig&voltaire 170.png',oldPrice:1790.00,category:"VALENTINOBYMARIO"},
    {name:"SAMANTHA SUNG",price:895.00,description:"CHRISTIAN LOUBOUTIN HOT CHICK SLING 70 PATENT SLINGBACL PUMP",image:'./assets/trendingdresses samantha sung 359.png',oldPrice:895.00,category:"CHRISTIAN"},
    {name:"MAC DUGGAL",price:995.00,description:"GUCCI SYLVIE SMALL SHOULDER trending dresses LEATHER CLUTCH trending dresses",image:'./assets/trendingdresses mac duggal 269.png',oldPrice:2630.00,category:"GUCCI"},
    
    {name:"JOE'S JEANS",price:599.99,description:"CHRISTIAN LOUBOUTIN SPORTY KATE 85 LEATHER PUMP",image:"./assets/denim joe's jeans 71.png",oldPrice:845.00,category:"GUCCI"},
    {name:"JOE'S JEANS",price:759.99,description:"MANOLO BLAHNIK HANGISI 90 SATIN PUMP",image:"./assets/denim joe's jeans 80.png",oldPrice:1195.00,category:"CHRISTIAN"},
    {name:"HUDSON JEANS",price:699.99,description:"GUCCI BLONDIE MINI LEATHER SHOULDER denim for her & him",image:'./assets/denim hudson jeans 80.png',oldPrice:1790.00,category:"VALENTINOBYMARIO"},
    {name:"BLACK ORCHID",price:895.00,description:"CHRISTIAN LOUBOUTIN HOT CHICK SLING 70 PATENT SLINGBACL PUMP",image:'./assets/denim black orchid 69.png',oldPrice:895.00,category:"CHRISTIAN"},
    {name:"MOTHER",price:995.00,description:"GUCCI SYLVIE SMALL SHOULDER denim for her & him LEATHER CLUTCH denim for her & him",image:'./assets/denim mother 99.png',oldPrice:2630.00,category:"GUCCI"},
    {name:"GUCCI",price:599.99,description:"CHRISTIAN LOUBOUTIN SPORTY KATE 85 LEATHER PUMP",image:'./assets/sunglasses gucci 194.png',oldPrice:845.00,category:"GUCCI"},
    {name:"BALENCHIAGA",price:759.99,description:"MANOLO BLAHNIK HANGISI 90 SATIN PUMP",image:'./assets/sunglasses balenciaga 128.png',oldPrice:1195.00,category:"CHRISTIAN"},
    {name:"BALENCHIAGA",price:699.99,description:"GUCCI BLONDIE MINI LEATHER SHOULDER sunglasses",image:'./assets/sunglasses balenciaga 221.png',oldPrice:1790.00,category:"VALENTINOBYMARIO"},
    {name:"SAINT LAURENT",price:895.00,description:"CHRISTIAN LOUBOUTIN HOT CHICK SLING 70 PATENT SLINGBACL PUMP",image:'./assets/sunglasses saint 163.png',oldPrice:895.00,category:"CHRISTIAN"},
    {name:"GUCCI",price:995.00,description:"GUCCI SYLVIE SMALL SHOULDER sunglasses LEATHER CLUTCH sunglasses",image:'./assets/sunglasses gucci 162.png',oldPrice:2630.00,category:"GUCCI"},
    {name:"GUCCI",price:629.99,description:"BOTTEGA VENETA WOMEN'S W/WOVEN DETAIL BLACK",image:'./assets/sunglasses gucci 249.png',oldPrice:950.00,category:"BOTTEGA VENETA"},
    {name:"CHLOE",price:599.99,description:"SAINT LAURENT KATE SMALL SHINY GRAINED LEATHER SHOULDER sunglasses",image:'./assets/sunglasses chloe 164.png',oldPrice:2150.00,category:"SAINT LAURENT"},
    
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

