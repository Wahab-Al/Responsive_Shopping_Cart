var getAllProducts = document.querySelectorAll(".card");
var getPriceBtn = document.querySelector("#getPrice");

var productContent = document.querySelector("#product-content");
var totalPrice = 0;
var conunter = 0;

getAllProducts.forEach((product)=>{
    product.onclick= ()=>{
        conunter++;
        productContent.innerHTML += conunter + "." + product.textContent +  "<br>";
        totalPrice += +(product.getAttribute("price"));
        if(productContent.innerHTML !=""){
            getPriceBtn.style.display = "block";
        }
    }
})

getPriceBtn.onclick= ()=>{
    console.log("total price is: " + totalPrice);
    document.querySelector("#total-products-price").innerHTML =  "total price is: " + totalPrice + "€";
}