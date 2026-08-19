//Section 3 - Student Grade

let studentGrade = 79;
if(studentGrade >= 90 && studentGrade <= 100){
    console.log("A");
}else if(studentGrade >= 80 && studentGrade <= 89){
    console.log("B");
}else if(studentGrade >= 70 && studentGrade <= 79){
    console.log("C");
}else if(studentGrade >= 60 && studentGrade <= 69){
    console.log("D");
}else if(studentGrade >= 40 && studentGrade <= 59){
    console.log("E");
}else if(studentGrade <= 40 ){
    console.log("F");
}

// Student Result 
let hindi = 80;
let english = 65;
let bio = 26;
let average = hindi + english + bio ;
if(hindi >= 40 && english >= 40 && bio >= 40){
  if((average / 3) >= 75){
    console.log("Distinction");
  }else if((average / 3) >= 60){
    console.log("First Division");
  }else if((average / 3) >= 50){
    console.log("Second Division");
  }else {
    console.log("pass");
  }
}else {
    console.log("Result Fail");
}

// Electricity Bill
// let unit = 70;
// let unit0to100 = 5;
// let unit100to200 = 7;
// let unit200to300 = 10;

// Simple Login
let username = "admin";
let password = "admin@123";
if(username === "admin" && password === "admin@123"){
    console.log("Login successful");
}else{
    console.log("Invalid username or password");
}
// Salary Bonus

let salary = 70-K;
let experience = 4-years;
 if(experience >= 10){
    console.log(s(alary*20)/100);
 }else{
    console.log("");
 }

// Age Category

let age = 35;
if(age >= 0 && age <= 12){
    console.log("Child");
}else if(age >=13 && age <=19){
    console.log("Teenager");
}else if(age >=20 && age <=59){
    console.log("Teenager");
}else if(age >=60 ){
    console.log("Teenager");
}