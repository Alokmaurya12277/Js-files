


const todoform = document.querySelector("#Todo-form")
const todoinput = document.querySelector("#todo-input")
const todolist = document.querySelector("#todo-list")
const formBtn = document.querySelector("#form-btn")
const taskCount = document.querySelector("#task-count")
const completeCount = document.querySelector("#complete-count")


let todos = JSON.parse(localStorage.getItem("todos") ) || []

let editTodoId = null;

todoform.addEventListener("submit", (e) => {
    e.preventDefault();

    const todovalue = todoinput.value.trim()

    console.log({ editTodoId, todovalue });

    if (editTodoId) {
        todos = todos.map((todo) => {
            if (todo.id === Number(editTodoId)) {
                return {
                    ...todo,
                    text: todovalue
                }
                
            }
            // formBtn.textContent = `Add`
            // editTodoId = null;
            return todo;
         })
          localStorage.setItem("todos", JSON.stringify(todos))
    } else {
        let newTodo = {
            id: Date.now(),
            text: todovalue,
            isComplete: false
        }

        todos.push(newTodo)
        localStorage.setItem("todos", JSON.stringify(todos))
    }

    if (!todovalue) {
        return
    }


    todoinput.value = ""
    addTodo()

})

function addTodo() {
    todolist.innerHTML = "";

    todos.forEach((todo) => {
        const li = document.createElement("li")
        li.className = `flex border border-slate-300 rounded-xl p-4 gap-2`
        li.dataset.id = todo.id;
        li.innerHTML =
            ` <input data-action = "toggle" ${todo.isComplete ? "checked" : ""} type="checkbox">
                   <p class="flex-1 ${todo.isComplete ? "line-through text-red-500 opacity-60" : ""}">${todo.text}</p>
                   <div class="flex gap-3 ">
                      <button data-action ="edit">Edit</button>
                      <button data-action ="delete">Delete</button>
                 </div>`

        todolist.append(li)
    })

    taskCount.textContent = `TASK (${todos.length}) `
    completeCount.textContent = `COMPLETED : ${todos.filter((todo) => todo.isComplete).length}`

}

addTodo();

todolist.addEventListener('click', (e) => {
    e.stopPropagation();

    const li = e.target.closest('li')
    const id = li.dataset.id
    let action = e.target.dataset.action

    if (action === "delete") {
        deleteTodo(id)
    }

    if (action === "edit") {
        startEdit(id)

    }


    if (action === "toggle") {
        todos = todos.map((todo) => {
            if (todo.id === Number(id)) {
                console.log("hii");
                return {
                    ...todo,
                    isComplete: !todo.isComplete
                }
            }
             localStorage.setItem("todos", JSON.stringify(todos))

            return todo
        })
             localStorage.setItem("todos", JSON.stringify(todos))
            addTodo()
    }



})

function deleteTodo(id) {
    todos = todos.filter((todo) => {
        if (todo.id !== Number(id)) {
            return todo
        }
    })
     localStorage.setItem("todos", JSON.stringify(todos))
    addTodo()
}

function startEdit(id) {
    editTodoId = id;
    let currentTodo = todos.find((todo) => {
        if (todo.id === Number(id)) {
            return todo
        }

    })
    todoinput.value = currentTodo.text
    formBtn.textContent = "Update";
}