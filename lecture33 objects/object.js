// Object

let product = {
    name : "pen",
    price : 9,
    rating : 4.3,
    isSell : true,
    323 : "cap",
    productName : "i am student of wevdev",
    printProductName : function(){
        console.log(this.rating);
    }
}

// let math = {
//     abs(){},
//     floor(){},
//     ceil(){}
// }
// console.log(Object.keys(product));
// console.log(Object.values(product));
// console.log(Object.entries(product));

// for(value in product){
//     console.log(value);
// }

// // Destructuring
// let product1 = [5646 , 3.4 , 75 , "iphone"];
// const [price , reting , item] = [5999 , 3.4 , 75 , "iphone"];
// console.log(item);
   
// let {price,productName, name,isSell} = product;
// console.log(name,price,isSell);

// for([keys , value] of Object.entries(product)){
//   console.log(keys , value); 
// }

let arr = [67,434,45,56,767,3443,23,5.53];
// console.log(arr);
// console.log(...arr);
// console.log(Math.min(...arr));
 
let a = [2,5];
let b = [3,6];
console.log(...a , ...b);



// math.abs()
// console.log(product[323]);
// product.price
// product.peintProductName()
// let answ = product.peintProductName();
// console.log(answ);



