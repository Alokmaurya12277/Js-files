

    //   Before EC6

//   function product(name,price){
//     this.name= name
//     this.price = price
//     // return this
//   }

//    let p1 = new product("ai",45345)
//    let p2 = product("nova",76867)

//    console.log(p1);
//    console.log(p2);

class User{
    constructor(){
        this.name = "alok"
    }
}

// const u1 =new User()
// console.log(u1);


class Bank{
    #balance
    constructor(initialBalance){
        this.#balance = initialBalance;
     }
    get(){
   console.log(this.#balance);
    }
    withdraw(amount){
    if(amount > this.#balance ){
        console.log("Insuficient balance");
        return
    }
    this.#balance = this.#balance - amount
    }
    deposit(amount){
       this.#balance = this.#balance + amount
    }
}


let intial = new Bank(500)
// console.log(get);
// intial.get()
intial.withdraw(499)
intial.get()
intial.deposit(35345);
intial.get()

intial.balance = 653563456;
intial.get()

