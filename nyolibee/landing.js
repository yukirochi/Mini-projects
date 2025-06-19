
window.onload = function(){
    
    fetchthemeal("maincourse.json",".content-main","product-main")
    fetchthemeal("side.json",".content-side","product-side")
    fetchthemeal("drink.json",".content-drink","product-drink")
}
let shelfpop = document.querySelector(".shelf-pop");
function openCart(){
    
    if(shelfpop.style.right === "-200%"){
        shelfpop.style.right = 0;
    }else{
        shelfpop.style.right = "-200%"
    }
}


let storepic = document.querySelector(".store-picture");

function spic1(link){
    storepic.style.backgroundImage = `url(${link})`;
}


function fetchthemeal(fetchlink,selector,loc){
    let contentDrink = document.querySelector(selector);
    fetch(fetchlink)
    .then(response => response.json())
    .then(val => {
        for (let i = 0 ; i< val.length; i++) {
            contentDrink.innerHTML += `<div class=${loc}>
                        <div class="product-pic" style="background-image: url(${val[i].img})"></div>
                        <div class="product-info">
                            <p class="name">${val[i].name}</p>
                            <p class="price">₱<span class=pricee>${val[i].price}</span></p>
                            <p class="info">${val[i].info}</p>
                        </div>
                     </div>`
                    }
                   
    })
}


document.addEventListener("click",function(event){
    
    let prodmain = event.target.closest(".product-main");
    let prodside = event.target.closest(".product-side");
    let proddrink = event.target.closest(".product-drink");
    let orders = document.querySelector(".orders-content-div")

   if(prodmain){addtocart(prodmain)}
   else if(prodside){addtocart(prodside)}   
   else if (proddrink){addtocart(proddrink)}

   function addtocart(prod){
   let orderscontent = document.querySelector(".orders-content-div");
   let ordersproduct = orderscontent.querySelectorAll(".name");
   let prodmame = prod.querySelector(".name").textContent;
   let orderavail = false
   for(let i = 0; i < ordersproduct.length; i++){
    
       if(prodmame === ordersproduct[i].textContent)
       {
        orderavail = true;
        break;
       }
   }
   
   
    if(orderavail === false){
         
        let bgimage = `${prod.querySelector(".product-pic").style.backgroundImage}`
        if(bgimage.startsWith("url(")){

            bgimage = bgimage.slice(4, -1).replace(/['"]/g, "");

        }
        
        orders.innerHTML += `
            <div class="orders-product" data-price = "${prod.querySelector(".pricee").textContent}">
                <div class="product-info-div">
                    <div class="product-main">
                        <div class="product-pic" style="background-image: url(${bgimage})"></div>
                        <div class="product-info">
                            <p class="name">${prod.querySelector(".name").textContent}</p>
                            <p class="price">₱<span class="tprice">${prod.querySelector(".pricee").textContent}</span></p>
                            <p class="info">${prod.querySelector(".info").textContent}</p>
                        </div>
                     </div>
                </div>
                <div class="product-quantity-div">
                    <span class="material-icons removeitem">remove</span>
                    <div class="quantity">1</div>
                    <span class="material-icons additem" id="additem">add</span>
                </div>
            </div>
        </div>`;
        shelfpop.style.right = 0;

    }
    
}

if (event.target.classList.contains("additem")) {
    let  quantityDiv = event.target.previousElementSibling;
    let quantity = parseInt(quantityDiv.textContent);
    let newquant = quantityDiv.textContent = quantity + 1; 
    let thisparent  = event.target.closest(".orders-product");
    let pprice = thisparent.querySelector(".tprice");
    let unitPrice = parseInt(thisparent.getAttribute("data-price"));
    let newprice = newquant* unitPrice;
    console.log(unitPrice);
    
    pprice.textContent = newprice;

    
    console.log(quantity);

    
   
}else if (event.target.classList.contains("removeitem")){
    let  quantityDiv = event.target.nextElementSibling;
    let quantity = parseInt(quantityDiv.textContent);
    let thisparent  = event.target.closest(".orders-product");
    if(quantity > 1){
        let newquant = quantity -1;
        quantityDiv.textContent = newquant;
        let pprice = thisparent.querySelector(".tprice");
        let unitPrice = parseInt(thisparent.getAttribute("data-price"));
        let newprice = newquant * unitPrice;
        pprice.textContent = newprice
        console.log(newquant);
    }else{ thisparent.remove(); }

}





let eachprice = document.querySelectorAll(".tprice")
let total = 0;
for (let i = 0; i < eachprice.length; i++){
    let thisprice = parseFloat(eachprice[i].textContent);
    total += thisprice; 
}

let totalprice = document.querySelector(".totalprice");
totalprice.textContent = total;


})










