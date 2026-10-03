



// class user{
//      constructor(name,email){
//             this.name = name,
//             this.email = email
//         }
//         login(){console.log("login");}
//         logOut(){console.log("logOut");}
// }

//     class customer extends user{
//         cart = []
//         constructor(name,email,password){
//             super(name,email)
//             this.password = password
//             // this.name = name,
//             // this.email = email
//         }

//         buyProduct(){console.log("buy products");}
//         addToCart(item){this.cart.push(item)}
//         showItem(){console.log(this.cart);}
//         // login(){}
//         // logOut(){}
//     }

//     class seller extends user{
//         // constructor(name,email){
//         // //   this.name = name,
//         // //   this.email = email
//         // }

//         sellProduct(){console.log("sell product");}
//         // login(){}
//         // logOut(){}
//     }

//     class admin extends user{
//         // constructor(name,email){
//         // //    this.name = name,
//         // //    this.email = email
//         // }
//         hideProduct(){console.log("manage products");}
//         // login(){}
//         // logOut(){}
//     }

//     const c1 = new customer("alok","alok12@gmail.com",1233233)
//     // const s1 = new seller("ram","alok12@gmail.com")
//     // const a1 = new admin("aadi","alok12@gmail.com")
//     console.log(c1);
//     // console.log(s1);
//     // console.log(a1);
//     c1.addToCart("book")

//     class primiumCustomer extends customer{
//         constructor(name,email){
//             super(name,email)
//         }
//     }


    let user1 = {
        name: "alok",
        age: 19,
        printName(){
            console.log(`hello i am ${this.name}`);
        }
    }

    let user2 = {
        name: "mohan",
        age: 20,
        // printName(){
        //     console.log(`hello i am ${this.name}`);
        // }
    }
    user1.printName.call(user2)
    // user1.printName.call()
   
