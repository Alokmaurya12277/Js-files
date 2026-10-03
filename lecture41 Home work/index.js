

const form = document.querySelector("#form")
const usernames = document.querySelector("#names")
const h1 = document.querySelector("h1")
const btn = document.querySelector("button")
                  //  3RD 
const js_cheack = document.querySelector("#js")
const js_form = document.querySelector("#jsform")
const h2Pr = document.querySelector("h2")


form.addEventListener("submit" , (e) =>{
    e.preventDefault()

    const username = usernames.value 
    if(username.trim() !== ""){
  document.querySelector("h1").classList.remove("hidden")
  return true
    }
            //  3RD 

      const jsValeKo = js_cheack.value;
      if(jsValeKo === "JavaScript"){
        h2Pr.textContent = "You entered JavaScript"
        return true
      }else{
        h2Pr.textContent = "Enter correct input"
        return false
      }
})

          //  4TH 

const form2 = document.querySelector("#form2")
const optionSelect = document.querySelector("#optionSelect")
const languageHold = document.querySelector("#languageHold")                            


form2.addEventListener("change" , (e) =>{
  e.preventDefault();

  const optionChoose = optionSelect.value
  
  if(optionChoose){
  languageHold.classList.remove("hidden")
  languageHold.innerHTML ="Selected language" + " " + optionChoose
}else{
  languageHold.classList.add("hidden")
}
})

          //  5TH 
const work5 = document.querySelector("#work5")
const password = document.querySelector("#password")
const passLength = document.querySelector("#passLengthCheck")


password.addEventListener("focus" , (e) =>{
password.style.backgroundColor = "red"

})
 
function validPass(input){
  if(input.value.trim().length < 6){
   passLength.querySelector("#passLengthCheck").textContent = "Password must be at least 6 char"
   return false
  }
}

work5.addEventListener("input", (e) =>{
  e.preventDefault()

  const isValidPassword = validPass(password)

  if(isValidPassword){
    console.log("hello");
  }
})



