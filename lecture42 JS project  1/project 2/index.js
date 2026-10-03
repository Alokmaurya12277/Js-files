// const { createElement } = require("react");


let boxes = document.querySelectorAll(".box")
let body = document.querySelector("#body")
let h2 = document.querySelector(".h2")
let bothButton = document.querySelector("#bothButton")


let allPosibleWay = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
];

let turnO = true;



function enable() {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

function disabled() {
    for (let box of boxes) {
        box.disabled = true;
    }
}


boxes.forEach((box) => {
    box.addEventListener("click", (e) => {

        if (turnO) {
           box.innerText = "O";
           box.classList.add("text-red-600" , "text-4xl");
            turnO = false;

        } else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;


        checkWinner();


    })
})

function checkWinner() {
    for (let innerArray of allPosibleWay) {
        let val1 = boxes[innerArray[0]].innerText;
        let val2 = boxes[innerArray[1]].innerText
        let val3 = boxes[innerArray[2]].innerText

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
            
                shoWinner(val1)
            }
        }
    }

}

// function color(text){
//     let p = document.createElement("p");
//     p.innerHTML = ` ${text}`
//     p.className = `red`
// }

function shoWinner(winner) {
    h2.innerText = `Congratulations , winner 🎉 : ${winner}`
    h2.classList.remove("hidden")
    disabled();

}

bothButton.addEventListener("click", (e) => {
    turnO = true;
    enable();
    h2.classList.add("hidden")
})

// resetbtn.addEventListener("click", (e) =>{
//     turnO = true;
//     enable();
//      h2.classList.add("hidden")
// })