const todoInput = document.getElementById('title');


function addTodo(e) {
    //Prevent natural behaviour
    e.preventDefault();
    //Create todo div
    if(todoInput.value.length<1)
    {
        alert("Lenght should be grater than 0");
        return;
    }
    const Row = document.createElement("tr");
    // Row.classList.add("todo");
    //Create list
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    col1.innerHTML = `<i class="bi bi-x-diamond-fill" style="color: red;"></i>`;
    col2.innerText = todoInput.value;
    col3.innerHTML = `<i class="bi bi-check2-square" style="font-size: 20px;"></i>`
    col4.innerHTML = `<i class="bi bi-trash text-danger delete" id="deleteRow" style="font-size: 18px;"></i>`;
    //Save to local - do this last
    //Save to local
    saveLocalTodos(todoInput.value);
    //
    // col1.classList.add("todo-item");
    Row.appendChild(col1);
    Row.appendChild(col2);
    Row.appendChild(col3);
    Row.appendChild(col4);
    todoInput.value = "";

    todoList.appendChild(Row);
    alertData("Item inserted Succuessfully!!");
  }
  
todoButton.addEventListener('click',addTodo);

todoList.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("delete"))
    {
        e.target.parentElement.parentElement.remove();
    }
    alertData("Item deleted Succuessfully!!");
});

function alertData(str){
    alert(str);
}

function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}