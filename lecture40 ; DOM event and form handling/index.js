
// let div = document.querySelector("#reveil")
// let em = document.querySelector("#gift")

// let btn = document.querySelector("#btn")

// function reveilgift(event){
//     // console.log("hellooo hellooo");
//     em.classList.add("visible")
//     em.classList.remove("hidden")
//     console.log(event);
//     console.log(event.type);
//     console.log('target', event.target);
//     console.log('CurentTarget', event.currentTarget);

// }
// // let btn = document.querySelector("#reveil")
// div.addEventListener('click', reveilgift)

// btn.addEventListener('click', (e) => {
//     console.log(e);
//     console.log(e.key);
//     console.log(e.clientX);
//     console.log(e.clientY);
// })

// let outter = document.querySelector("#outter")
// let inner = document.querySelector("#inner")

// let btn2 = document.querySelector("#btn2")

// outter.addEventListener('click', (e) =>{
//     console.log("outter");
// })
// inner.addEventListener('click', (e) =>{
//     console.log("inner");
// })
// btn2.addEventListener('click', (e) =>{
//     console.log("btn2");
// })



let products = [
    {
        id: "1",
        name: "ai nova",
        price: 9999
    },
    {
        id: "2",
        name: "maicromax",
        price: 7999
    },
    {
        id: "3",
        name: "lava",
        price: 12999
    },
    {
        id: "4",
        name: "nokia",
        price: 1199
    },

]


let productlist = document.querySelector("#product-list")

products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("style");

    card.dataset.productId  = product.id
    const dltbtn = document.createElement("BUTTON");
    const addToCart = document.createElement("BUTTON")
    dltbtn.textContent = "Remove product btn"
    addToCart.textContent = "Add to Cart"

    // dltbtn.addEventListener("click", (e) => {
    //     card.remove()
    // })

    card.innerHTML = `<div>
    <img src= "https://m.media-amazon.com/images/I/51rmAP8wN4L._AC_UY218_.jpg" alt="">
</div>
 <div id="deati">
    <p>${product.name}</p>
    <p>${product.price}</p>
                    </div>`

    card.append(dltbtn)
    card.append(addToCart)
    productlist.append(card)
})

productlist.addEventListener("click",(e) =>{
    e.stopPropagation();
    console.log(e.target.parentElement);
    console.log(e.target.tagName);
    console.log(e.target.textContent);

    // if(e.target.tagName === "BUTTON"){
    //     e.target.parentElement.remove()
    // }

    console.log(e.target.parentElement.dataset.productId);
        if(e.target.textContent === "Remove product btn"){
        // e.target.parentElement.remove()
        dltbtn.closesest(".style")
    }

})