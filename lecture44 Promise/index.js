
// console.log("a");
// const p = new Promise(function(full,reje) {


//     // full("promise pura")
//     reje("promise brake")
//     // console.log("b");
// })
// console.log(typeof p);
// console.log("c");

// p.then(function onFullfil(val){
//     console.log(val);
// },function onReject(val){
//     console.log(val);
// })

function searchPizza(){
   return new Promise(function (resolve , reject){
     console.log("Searching Pizza...");
    setTimeout(function (){
    console.log("Here is Pizza list");
    let price = 299;
    resolve(price)
    },2000)
   })
}
function addToCart(price){
   return new Promise (function (resolve,reject){
     console.log("Pizza adding to cart...");
    setTimeout(function (){
        console.log("Add to cart");
        resolve(price)
    },2000)
   })
}
function payment (price){
  return new Promise(function(resolve,reject){
     console.log(`Payment Initiated... : Amount ${price}`);
   setTimeout(function(){

    let isPaymentSucssfull = false;
    if(isPaymentSucssfull){
      console.log(`Payment Completed Succesfully : Amount ${price}`);
    resolve(price)
    }else{
        reject("Payment is fail")
    }
    
   },6000)
  })
}
 const res = p.then(function onFullfil(val){
 console.log(val);
 }).then(function onFullfil(val){
 console.log(val);
 }).then(function onFullfil(val){
 console.log(val);
 }).catch(function onReject(val){
    console.log(val);
 }).finally(function (){
    console.log("ye hmesa chlega");
 })
                      
            //   SHORTCUT

//  const res = p.then(function onFullfil(val){
//     console.log(val);
//  })
//  .then(() =>{})
//  .then()
//  .then()
//  .catch(function onReject(val){
//     console.log(val);
//  })

// console.log("a");
// const p2 = new Promise(function(resol , rejec){
//     console.log("b");
// })
// p2.then(function f2(){   
// })
// console.log("c");