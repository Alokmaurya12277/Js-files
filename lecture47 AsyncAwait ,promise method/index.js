

// async function fun2() {
//     return 10;
// }

// function fun1(){
//     // console.log("hello");
// //    return Promise.resolve(13)
// return 34
// }

// // console.log(fun2());
// fun2().then((value) =>{
//     console.log(value);
// })
// console.log(fun1());

//    Await 

// async function fun3() {
//     return "hello ji"
// }
// function fun4(){
//     return Promise.resolve("hii")
// }
// console.log("1");

// async function fun5() {
//     // fun3().then(value =>{
//     //     console.log(value);
//     // })
//      console.log("2");
//     let data = await fun3()
//     console.log("3");
//     let data1 = await fun4()
//     console.log("4");
//     console.log(data , data1);

// }
// console.log("alok");
// fun5()
// console.log("5");


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

    let isPaymentSucssfull = true;
    if(isPaymentSucssfull){
      console.log(`Payment Completed Succesfully : Amount ${price}`);
    resolve(price)
    }else{
        reject("Payment is fail")
    }
    
   },6000)
  })
}
//  const res = p.then(function onFullfil(val){
//  console.log(val);
//  }).then(function onFullfil(val){
//  console.log(val);
//  }).then(function onFullfil(val){
//  console.log(val);
//  }).catch(function onReject(val){
//     console.log(val);
//  }).finally(function (){
//     console.log("ye hmesa chlega");
//  })

async function orderFood() {
       try {
        let price = await searchPizza()
        await addToCart(price);
        await payment(price)
       } catch (error) {
         console.log(error);
       }    
}
orderFood()