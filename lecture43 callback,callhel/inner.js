


    // CODE CALLHELL KA PROMISS ME LIKH DIYA HU SAMJHNA

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

searchPizza().then(function (price){
return addToCart(price)
}).then(function(price){
    return payment(price)
}).then(function(){
    console.log("Bss aa hi gya pizza");
}).catch(function(err){
  console.log(err);
})

