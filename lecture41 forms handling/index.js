

const form = document.querySelector("#form")
const username = document.querySelector("#username")
const password = document.querySelector("#password")
const email = document.querySelector("#email")
const bio = document.querySelector("#bio")
const count = document.querySelector("#chr-count") 
const checkbox = document.querySelector("#checkbox") 
const country = document.querySelector("#country")
// const passwordHint = document.querySelector("#password-hint")
const password_error = document.querySelector(".passwordError")
const alertMassege = document.querySelector(".alert-massege")
const email_error = document.querySelector(".emailError")
const bio_error = document.querySelector(".bio-message")

function showError(input , alertMassege){
  input.parentElement.querySelector(".alert-massege").textContent = alertMassege
}

  function cleanError(input){
    input.parentElement.querySelector(".alert-massege").textContent = "";
  }

 function vailedUsername(username){
     if(username.value.trim().length === 0){
        alertMassege.textContent = "Please enter your name"
        return false
    }
    if(username.value.trim().length < 3){
    showError(username , "username must be greater than 3 char")
    return false
    }
    cleanError(username)
    return true
    }

              // EMAILcheack

       function showErrorEmail(input, email_error){
        input.parentElement.querySelector(".emailError").textContent = email_error
       }       

       function cleanErrorEmail(input){
        input.parentElement.querySelector(".emailError").textContent = ""
       }

       function validEmail(email){
        if(email.value.trim().length === 0){
          email_error.textContent = "Please enter your email"
          return false
        }
        if(email.value.trim().length < 11){
          showErrorEmail(email,"Email is must be greater than 10")
          return false
        }
        cleanErrorEmail(email)
        return true
         }       

        //  PASSWORD 

          function showErrorPassword(input, password_error){
            input.parentElement.querySelector(".passwordError").textContent = password_error
          }
          function cleanErrorPassword(input){
            input.parentElement.querySelector(".passwordError").textContent = ""
          }

        function validPassword (password){
          if(password.value.trim().length === 0){
         password_error.textContent = "Enter your password"
            return false
          }
          if(password.value.trim().length < 9){
            showErrorPassword(password , "password is must be greater than 8 chr")
            return false
          }
          cleanErrorPassword(password)
          return true
        }

          //  BIO MESSAGE 

          function showErrorBio(bioMessage , bio_error){
            bioMessage.parentElement.querySelector(".bio-message").textContent = bio_error
          }

          function cleanErrorBio(bioMessage){
            bioMessage.parentElement.querySelector(".bio-message").textContent = ""
          }
          
          function validBio(bioMessage){
            if(bioMessage.value.trim().length === 0){
             bio_error.textContent = "Please enter your bio"
             return false
            }
            if(bioMessage.value.trim().length < 30){
              showErrorBio(bioMessage , "bio is greater than 30 cha")
              return false
            }
            cleanErrorBio(bioMessage)
            return true
          }
          

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    // console.log("hi");
    // const name = document.querySelector("#name").value
      
  const isUserNameValid = vailedUsername(username)
  const isEmailValid = validEmail(email)
  const isPasswordValid = validPassword(password)
  const isbiovalid = validBio(bio)
  
  if(isUserNameValid && isEmailValid && isPasswordValid && isbiovalid){
   document.querySelector("h1").classList.remove("hidden")
  }

    // const email = document.querySelector("#email").value
    //    const password = document.querySelector("#password").value

    // console.log({usename: usename.value ,password:password.value,email});
})
bio.addEventListener("input" , (e) => {
    const remaining = 150 - bio.value.length
   count.textContent = `${remaining} character remaining`
})

// username.addEventListener("change", (e) =>{
//     console.log("change event", username.value);
// })

// username.addEventListener("input", (e) =>{
//     console.log("input event", username.value);
// })

// checkbox.addEventListener("change", (e) => {
//     console.log(checkbox.checked);
// })

// country.addEventListener("change" , (e) =>{
//     console.log(country.value);
// })

// usename.addEventListener("focus", (e) =>{
//     console.log("focus");
// })
// usename.addEventListener("blur", (e) =>{
//     console.log("blur");
// })

// password.addEventListener("focus" , (e) =>{
//     passwordHint.classList.remove("hidden")
// })
// password.addEventListener("blur",(e) =>{
//     passwordHint.classList.add("hidden")
// })