
    //  1st 

 let user ={
    name: "Rahul",
    email: "rahul123@gmail.com",
    role: "developer"
}
// console.log(user);

    //  2nd 

   const  product ={
      name: "Laptop",
      price: 18000,
      category: "Electronics"
    }

    // console.log(`name - ${product.name} , price - ${product.price}`);

            // 3rd 

    const user2 = {
        name: "Alok",
        email: "alok123@gmail.com"
    }

    // console.log(user2["email"]);

    //   4th 
      
    let stor = "name"
    let stor0 = "email"
    // console.log(user2[stor]);
    // console.log(user2[stor0]);


    //   5th 

    const update = { 
        name: "Alok",
        role: "student"
    }

    //  update.role = "developer"
 update.role = "developer"
//  console.log(update);
    
    //    6th 

    const profile ={
        name: "Alok",
        rmail: "alok123@gmail.com"
    }
    profile.isLoggdIn = true
    // console.log(profile);

    //  7th 

    const information = { 
        name: "Alok",
        email: "alok12@gmail.com",
        role: "developerStudent"

    }
      let stor1 = Object.keys(information)

            //  8th 

      let stor2 = Object.values(information)
    //   console.log(stor1,stor2);
                  
            //  9th 

    let stor3 = Object.entries(information)
    // console.log(stor3);

            // 9th 

        const destuchering = {
            name: "Alok",
            email: "alok123@gmail.com",
            role: "developer"
        }

        let {name,email,role} = destuchering;       //destruchering kai veriable ko ak me stor krana
        console.log(destuchering);
    