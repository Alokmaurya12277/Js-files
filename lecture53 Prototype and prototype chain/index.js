

// let user = {
//     name: "alok",
//     age: 19
// }

// // console.log(user);

// // Array.prototype.printItem = function(){
// //     for(let i=0 ; i< this.length ; i++){
// //         console.log(this[i]);
// //     }
// // }


// let arr = [1,2,3,4,5]
// console.log(arr.__proto__);

// // arr.printItem()

// let color = ["red","green","orange"]
// // color.printItem()


// String.prototype.firstTwoCharacters = function(){
//      console.log(this[0]+this[1]);
// }

// "Alok".firstTwoCharacters()



const obj = {
    name: "alok",
    age: 19,
    great: function(){
        console.log("hello how are you");
    }
};

console.log(obj);


const obj2 = {
    price: 299,
}

obj2.__proto__ = obj

console.log(obj2.name);