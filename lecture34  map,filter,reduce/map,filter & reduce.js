

let originalPrice = [233, 299, 565, 999, 1111]
let discountPriceLeft = [];            /*bad me pta chla discountprice.push bnane ke bad  */
let discountPrice = [];
for (value of originalPrice) {
    discountPriceLeft.push(value * 0.88)       /*discount 12% , (100-12)/ = 0.88  */
    discountPrice.push((value * 12) / 100)
}
// console.log(originalPrice);
// console.log(discountPriceLeft);
// console.log(discountPrice);

const disco = originalPrice.map((value) => {
    return value * 0.88;
})
// console.log(disco);

// short form 
const discoShort = originalPrice.map((value) => value * 0.88)
// console.log(discoShort);

//    Array + Object

let student = [
    {
        name: "ram",
        roll: 43
    },
    {
        name: "alok",
        roll: 76
    },
    {
        name: "ajay",
        roll: 78
    },
    {
        name: "abhijeet",
        roll: 43
    }
]

// let studentName = [];
//  student.forEach((value) => {
//     studentName.push(value.name)
    
// });
// console.log(studentName);

        //    Short form

const studentName = student.map((allstudent) => allstudent.name)
// console.log(studentName);

const studentRoll = student.map((allRoll) => allRoll.roll)
// console.log(studentRoll);
// console.log(studentName,studentRoll);

// check

let increaseRoll = student.map((allRoll) => {
    return {...allRoll, roll: allRoll.roll + 5}
})
// console.log(increaseRoll);  

        //   Filter 
        // let niche50 = [];
        // student.forEach((allRollNumber) => {
        //     if(allRollNumber.roll <= 50){
        //         niche50.push(allRollNumber);
        //     }
        // });
        // console.log(niche50);
         
        const niche50 = student.filter((allRollNumber) => allRollNumber.roll <=50 )
        // console.log(niche50);

         const niche51 = student.filter((allRollNumber) => allRollNumber.roll <=50 ).map((student) => student.name )
        //  console.log(niche51); 
        const niche52 = student.map((studentName) => studentName.roll)
        // console.log(niche52);

        //    Reduce 
        let marks = [34,4,65,33,68,89,52];
        let totalMarks = 0;
        marks.forEach((mark) => totalMarks = totalMarks + mark)
        // console.log(totalMarks);

        const totalMarksReduce= marks.reduce((inital , marks) => {
             return inital + marks
        } ,0)  
        // console.log(totalMarksReduce);

        // let totalMarksReduce = marks.reduce((initial,marks) => initial+ marks , 0) /*SHORT FORM */
        // console.log(totalMarksReduce);


           