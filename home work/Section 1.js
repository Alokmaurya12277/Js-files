// Section 1 Variables & Operator 
// Basic Calculator

let a = 10;
let b = 20;
console.log("a =" , a);
console.log("b =" , b);

let oth = a;
a = b;
b = oth;
console.log("a =", a);
console.log("b =", b);

// Student Marks

let math = 90;
let physics = 70;
let chemistry = 80;
console.log("Total marks", math + physics + chemistry);
console.log("Average marks",(math + physics + chemistry)/3 );
console.log("Percentage", ((math + physics + chemistry)/300)*100);

// Shoping Bill
let productPrice = 200;
let quantity = 2;
let discount = 10;
console.log("Original bill", productPrice * quantity);
console.log("Discount amount",((productPrice * quantity)*discount)/100 );
console.log("Final bill",( productPrice * quantity) - ((productPrice * quantity)*discount)/100 );

// Area Calculator

let length = 40;
let width = 30;
console.log("Area", length * width);
console.log("Perimreter", 2*(length + width));