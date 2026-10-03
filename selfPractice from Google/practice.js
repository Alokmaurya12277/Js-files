            // PROJECT 1

let users = [
    {
        id: 1,
        name: "Rahul",
        isActive: true,
        role: "admin"
    },
    {
        id: 2,
        name: "Amit",
        isActive: false,
        role: "user"
    },
    {
        id: 3,
        name: "Priya",
        isActive: true,
        role: "user"
    },
    {
        id: 4,
        name: "Sneha",
        isActive: false,
        role: "admin"
    },
    {
        id: 5,
        name: "Vikram",
        isActive: true,
        role: "user"
    }
];
/* 1 */
  const works = users.filter((isActiveCheck) => {
    const logicPerfome = isActiveCheck.isActive === true;
    return logicPerfome;
})
// console.log(works);

/* 2 */
const namVale = works.map((nam) => {
const isActiveName = nam.name;
return isActiveName;
   
})
// console.log(namVale);

    //  PROJECT 2
const expenses = [
    {
        id: 1,
        title: "Internet Bill",
        amount: 700,
        category: "Utility"
    },
    {
        id: 2,
        title: "Tea & Snacks",
        amount: 150,
        category: "Food"
    },
    {
        id: 3,
        title: "New Shoes",
        amount: 2500,
        category: "Shopping"
    },
    {
        id: 4,
        title: "Bus Ticket",
        amount: 200,
        category: "Travel"
    },
    {
        id: 5,
        title: "Swiggy Dinner",
        amount: 650,
        category: "Food"
    }
];
const totalCast = expenses.reduce((initial, next) => {
    const calculate = initial + next.amount;
    return calculate;
},0)
// console.log(totalCast);

for(let item of expenses){
    if(item.amount > 500){
        // console.log("Mahnga kharcha",  item.title);
    }
}

    //   PROJECT 3

    const student = [
        {
            id: 1,
            name: "Aman",
            marks: 75
        },
        {
            id: 2,
            name: "Riya",
            marks: 45
        },
        {
            id: 3,
            name: "Vikram",
            marks: 88
        },
        {
            id: 4,
            name: "Shweta",
            marks: 32
        }
    ];
    function checkStatus(mark){
       if(mark >= 50){
        return "Pass";
       } else{
        return "Fail"
       }
    }
   const numberDO =  checkStatus(54);
//    console.log(numberDO);

const student2 = student.map((allObject) => {
    return {...allObject , status: checkStatus(allObject.marks)}
})
// console.log(student2);

        // PROJECT 4
const inventory = {
    mobile: 40,
    laptop: 15,
    headphone: 25
}
for(let keys in inventory){
    // console.log(keys);
}

const selesElectronic = [
    {
        item: "laptop",
        quantity: 2
    },
    {
        item: "mobile",
        quantity: 5
    },
    {
        item: "headphone",
        quantity: 3
    },
    {
        item: "bluetooth",
        quantity: 4
    }
];
const totalQuantitySell = selesElectronic.reduce((initial,start) => {
  const contain = initial + start.quantity;
  return contain;
},0)
// console.log(totalQuantitySell);

    // PROJECT 5
    const rawNumber = [3,8,4,1,6,9,17,2]
    const execution1 = rawNumber.filter((element)=> {
        const store = element > 5;
        return store;
    })
    // console.log(execution1);

    const execution2 = execution1.map((output) => {
        return output * 3 ;
    })
    // console.log(execution2);

    const execution3 = execution2.reduce((phlaNumber , nextNumber) => {
        return phlaNumber + nextNumber
    },0)
    // console.log(execution3);

        //  SHORT FORM 
    
        const finalAnswer = rawNumber
        .filter((element) => element > 5)
        .map((output) => output * 3)
        .reduce((phlaNumber , nextNumber) => phlaNumber + nextNumber , 0)
        // console.log(finalAnswer);
       
        const deatils = [
            {
                name: "ram",
                adderse: "mau",
                role: "student",
                age: 19,
                isStudy: true
            }
        ];
        // console.log(Object.keys(deatils[0]));

        const jobs = [
            {id: 1,
                title: "Frontend Developer",
                company: "Google",
                location: "Noida",
                salary: 70000 ,
                type: "Full-Time"
            },
            {id: 1,
                title: "Node.js Developer",
                company: "Amazone",
                location: "Bangalore",
                salary: 95000 ,
                type: "Full-Time"
            },
            {id: 1,
                title: "React Intern",
                company: "zomato",
                location: "Noida",
                salary: 25000 ,
                type: "Intership"
            },
            {id: 1,
                title: "OA Engineer",
                company: "Paytm",
                location: "Noida",
                salary: 55000 ,
                type: "Full-Time"
            },
            {id: 1,
                title: "Data Analyst",
                company: "TCS",
                location: "Delhi",
                salary: 45000 ,
                type: "Full-Time"
            }
        ];

        function addNewJob(newJobData){
            jobs.push(newJobData)
        };
        addNewJob({id: 6, title: "Backend Developer", location: 
                "Noida", salary: 120000, type: "Full-Time"});
        // console.log(jobs);

        function choose(findLocation, minsalary){
         const   filterList = jobs.filter((jobsItem) => {
         return  jobsItem.location === findLocation && (jobsItem.salary >= minsalary)  
            }) ;
            return filterList
        }
        const store = choose("Noida", 50000);
        // console.log(store);

            // TASK 

        const moviesDeatils = [
            {id: 1,
            title: "Inception",
            genre: "Sci-Fi",
            rating: 8.8,
            language: "English"
            },
            {id: 2,
            title: "The Dark Knight",
            genre: "Action",
            rating: 9.0,
            language: "English"
            },
            {id: 3,
            title: "Dangal",
            genre: "Drama",
            rating: 8.4,
            language: "Hindi"
            },
            {id: 4,
            title: "KGF 2",
            genre: "Action",
            rating: 8.2,
            language: "Kannada"
            },
            {id: 5,
            title: "3 Idiots" ,
            genre: "Drama",
            rating: 8.1 ,
            language: "Hindi"
            },
        ];
         addnewMovie ({id: 6, title: "Fighter", genre: "Action", rating: 9.3,
            language: "Hindi"
        })
        function addnewMovie(deatils){
            const optration = moviesDeatils.push(deatils)
            return optration;
        }
        console.log(...moviesDeatils);

        // 2
        function recommendMovie(Action, minrating){
           const store = moviesDeatils.filter((deati) => {
            return deati.genre === Action && (deati.rating >= minrating)
           })
           return store;
        }
        const stores = recommendMovie("Drama", 8.0);
        console.log(stores);

        // 3
        const mapvala = stores.map((data) => {
            return data.title
        })
        console.log(mapvala);

    
         

    
