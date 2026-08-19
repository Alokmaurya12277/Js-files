//Section 2 - Comparison & logical Operator
// Even or Odd 

let num1 = 11;
if(num1 % 2 === 0){
    console.log("even");
}else {
    console.log("odd");
}

let numb1 = 0;
if(numb1 > 0) {
    console.log("positive");
} else if( numb1 < 0) {
    console.log("negative");
} else if ( numb1 ==0){
    console.log("zero");
}

let nu1 = 10;
let nu2 = 12;
console.log(nu1 > nu2);
console.log(nu1 < nu2);
console.log(nu1 == nu2);

let lrNum1 = 20;
let lrNum2 = 30;
let lrNum3 = 50;
if(lrNum1 < lrNum2 < lrNum3){
    console.log(largest);
}

// Voting Eligibility
let isAge = 17;
if(isAge >= 18){
    console.log("Eligible to vote");
}else{
    console.log("Not eligible to vote");
}

// Number Range

let number = 51;
if(number >= 10 && number <= 100){
    console.log("Number is between 10 and 100");
}else{
    console.log("flase");
}