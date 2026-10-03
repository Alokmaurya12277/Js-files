

// let h2 = document.getElementById("hello")
// console.log(h2);

let h5 = document.querySelector("#hello")
// console.log(h5);
let ram = document.querySelector(".helloo")
// console.log(ram);
// let h3 = document.querySelector(".h3");
let h3 = document.querySelector("#h3")

// let h2 = document.querySelectorAll("h2")
// console.log(h2);

let p = document.querySelector(".try")
// console.log(p);

//    js se change krna 
let changeTry = document.querySelector(".try");
// changeTry.textContent = "i try my best"

// changeTry.innerHTML = "hello"

let alok = document.querySelector("p");
// console.log(alok.textContent );
// console.log(alok.innerHTML);
// console.log(alok.innerText);

// alok.setAttribute("style" , "background-color: red; font-size:30px")

let butt = document.querySelector("button")
// butt.setAttribute("disabled", "true")

// alok.classList.add("ram")
// alok.classList.remove("ram")
// alok.classList.toggle("ram")
// console.log(alok.classList.contains("ram"));

let products = [
    {
    name: "ai nova",
    price: 9999
},
{
    name: "maicromax",
    price: 7999
},
{
    name: "lava",
    price: 12999
},
{
    name: "nokia",
    price: 1199
},

]

// let div = document.createElement("div");
// div.textContent = "Hello"

// let body = document.querySelector("body")
// body.appendChild(div)

// let productlist = document.querySelector("#product-list") 
// products.forEach((product) =>{
//     const card = document.createElement("p");
//     card.textContent = `${product.name} - ${product.price}`
//     productlist.append(card)
// })

let productlist = document.querySelector("#product-list") 
products.forEach((product) =>{
    const card = document.createElement("div");
    card.classList.add("style");
    card.innerHTML = `
     <div class="style">
    <div> <img src="https://m.media-amazon.com/images/I/51rmAP8wN4L._AC_UY218_.jpg" alt=""></div>
 <div id="deati">
    <p>Ai nova</p>
    <p>1399</p>
</div>
<button> product remove </button>
 </div>`
 productlist.append(card)
})

