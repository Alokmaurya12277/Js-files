// Section 5
// ATM Transaction
let balance = 10000;
let withdrawAmount = 0;
if (withdrawAmount > 0) {
    if (withdrawAmount <= balance) {
        console.log("withdrawal successfull");
        console.log("Remaining balance =", balance - withdrawAmount);
    } else {
        console.log("Insuficient balance");
    }
} else {
    console.log("Invalid amount");
}

// Move Ticket System 
let age = 77;
let numberOfTicket = 2;
let age12 = 100;
let age12_59 = 200;
let ageAbove60 = 120;
switch(true){
    case (age <= 12): console.log(age12 * numberOfTicket);
    break;
    case (age >= 12 && age <= 59): console.log(age12_59 * numberOfTicket);
    break;
    case (age >= 60): console.log(ageAbove60 * numberOfTicket);
}

// Electricity Bill
let unit = 206;
let discount = 0;
let Bill = 0;
if(unit >= 0 && unit <= 100){
    Bill = unit * 5;
}else if(unit >= 101 && unit <= 200){
    Bill = unit * 7;
}else if(unit > 200){
    Bill = unit * 10;
}
  if(Bill >= 2000){
    discount = (Bill * 10)/100;
  }else {
    discount = 0;
  }
  console.log("unit =", unit);
  console.log("Original bill =", Bill);
  console.log("discount =", discount);
console.log("final bill =", Bill - discount);

// Number Classification

let challNum = 100;
if(challNum > 0){
  console.log("positive");
}else if(challNum < 0){
  console.log("negative");
}else if(challNum === 0){
  console.log("zoro");
}
if((challNum % 2)===0){
  console.log("even");
}else{
  console.log("odd");
}
if(challNum > 100){
  console.log("greater than 100");
}else if(challNum < 100){
  console.log("less than 100");
}else{
  console.log("equal to 100");
}

// Student Result System 
let studentName = "Alok";
let rollNumber = 199;
let mathMarks = 90;
let scienceMarks = 30;
let englishMarks = 80;
let grad = 67;
let tota = mathMarks + scienceMarks + englishMarks;
console.log("Name", studentName);
console.log("Roll No", rollNumber);
console.log("Math" ,mathMarks);
console.log("Science" ,scienceMarks);
console.log("English" ,englishMarks);
console.log("Total" ,tota);
console.log("Percentage" ,(tota *100)/300);
if(grad >= 90 && grad <= 100){
  console.log("Grad = A");
}else if(grad >= 80 && grad <= 89){
  console.log("Grad = B");
}else if(grad >= 70 && grad <= 79){
  console.log("Grad = C");
}else if(grad >= 60 && grad <= 69){
  console.log("Grad = D");
}else if(grad >= 40 && grad <= 59){
  console.log("Grad = E");
}else if(grad < 40 ){
  console.log("Grad = F");
}
if(mathMarks >= 40 && scienceMarks >= 40 && englishMarks >= 40){
  console.log("Result Pass");
}else{
    console.log("Result Fail");
} 