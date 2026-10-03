// let student ={
//     name: "alok",
//     roll: 34,
//     subject: ["math" , "english" ,"hindi"]
// }
// let {subject,roll} = student;
// console.log(student);
// console.log(student);
let obj1 = {
    name: "ram",
    mobiNo: 7565767,
    isColloge:true
}
let obj2 ={
    collageName:"nahi",
    roll:65
}

// let obj3 ={...obj1, ...obj2}
// console.log(obj3);

     // Array & Object Update 

     let arr = [45,"ajay", 786, "product",324]
     arr[3]= 76;
    //  console.log(arr);

    let deati = {
        color:"violet",
        game: "cricket"
    }
    
    deati ={
        fabrate: "box",
        and: "swiming",
        address: null
    }
    // deati["and"]="bothing in pond";
    // delete (deati["and"]);
    // console.log(deati);
    // console.log(deati.address?.street);

        // Shift, Unshift,push,pop,splice 

        let array = [32,34,5,74,76,2,54];
        // array.pop();
        // console.log(array);

        // array.push(564);
        // console.log(array);
        // console.log(array.length);

        // array.splice(0,6);    // kha se start krna hai aur kitna object
        // console.log(array);

        // array.shift(); 
        // console.log(array);

        // array.unshift(6756);
        // console.log(array);

        //   Muaitibility & Immuatibility

        let arrayMuat = [32,34,5,74,76,2,54];
        // let muatibili= arrayMuat.splice(1,3);
        // console.log(muatibili); 

        // console.log(arrayMuat.indexOf(56));
                 
            //    Find function

        let ans = arrayMuat.find((value) =>{
                          return value == 5;
        })
            //  console.log(ans); 
        // let immutibili = arrayMuat.splice(0,4);  // INITIAL SE ,, US LENGTH TK KE ELEMENT REMAIN
        // console.log(immutibili); 

                //    Flat functiion
         
        // let arr3 = [433,34,5,8,[23, 45,54,[34,65,7,2] , 7]];    
        // // console.log(arr3.flat(Infinity));
        