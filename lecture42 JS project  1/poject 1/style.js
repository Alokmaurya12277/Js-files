

const todoForm = document.querySelector("#todoForm")
const todoInput = document.querySelector("#todoInput")
const ulAdd = document.querySelector("#ulAdd")
const btnChange = document.querySelector("#btnChange")
const  taskCount = document.querySelector("#Task-count")
const completeCount = document.querySelector("#Complete-count")

let arrayContain = [
    {
        id: Date.now() + 1,
        text: "Reading",
        isCompleted: true
    },
    {
        id: Date.now() + 2,
        text: "Revision",
        isCompleted: false
    },

]

 let  isEditId = null; 

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let todovalue = todoInput.value.trim()

    if(!todovalue){
        return
    }

    if(isEditId){
        // edit
        arrayContain =arrayContain.map((todo) =>{
            if(todo.id === Number(isEditId)){
                return {
                    ...todo,
                    text: todovalue
                }
            }
            btnChange.innerHTML = "Add"
            return todo
           
        })
        isEditId = false
    }else{
        //add
        
        let newTodo = {
        id: Date.now(),
        text: todovalue,
        isCompleted: false
    }
    arrayContain.push(newTodo);
    }

    
    newTodoStyle()
    todoInput.value = ""
   
})

function newTodoStyle() {
    ulAdd.innerHTML = ""
    arrayContain.forEach((todo) => {
        let li = document.createElement("li")
        li.dataset.id = todo.id
        li.className = `flex border border-red-300 justify-between`
        li.innerHTML = `
                    <div class="ml-2  flex gap-2">
                        <input data-action ="toggal" ${todo.isCompleted ? "checked": ""} type="checkbox">
                    <p class=" flex-1 ${todo.isCompleted ? "line-through text-red-600 opacity-50" : ""} ">${todo.text}</p>
                    </div>
                   <div class="flex ml-6 gap-5">
                     <button data-action ="edit" class="text-blue-800">edit</button>
                    <button data-action ="dlt" class="text-red-800 mr-3">dlt</button>
                   </div>
                `

        ulAdd.append(li)
    })

    taskCount.textContent= `Task (${arrayContain.length})`
    completeCount.textContent= `Completed (${arrayContain.filter((todo)=> todo.isCompleted).length})`
}
newTodoStyle()


ulAdd.addEventListener("click", (e) => {
    e.preventDefault();

    let li = e.target.closest('li')
    let id = li.dataset.id;

    let action = e.target.dataset.action


    // DELETE KRNE KE LIYE
    if (action === "dlt") {
         arrayContain = arrayContain.filter((todo) => {
            if (todo.id !== Number(id)) {
                return todo
            }
        })
        newTodoStyle()
    }



 // EDIT KE LIYE
  if(action === "edit"){
      isEditId = Number(id);      // yha se isEditid  id le rha hai jo edit me use krenge
       let editInput= arrayContain.find((todo) =>{
      if(todo.id === Number(id)){
        return todo
      }
     })
   todoInput.value = editInput.text
    btnChange.innerText = "Update"
  }



  if(action === "toggal"){
  arrayContain = arrayContain.map((todo) =>{
    if(todo.id === Number(id)){
        return { 
            ...todo,
            isCompleted: !todo.isCompleted
        }
    }
  
    return todo
    
  })
    newTodoStyle()
  }


})





