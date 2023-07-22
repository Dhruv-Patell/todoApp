const todoList = [];

function addTodo() {
    const inputElement = document.querySelector('.js-name-input1');
    const name = inputElement.value;
    todoList.push(name);
    console.log(todoList);
    inputElement.value = '';
}

function addTodoPage() {
    const inputElement2 = document.querySelector('.js-name-input2');
    const name = inputElement2.value;
    if (name) {
        todoList.push(name);
    }
    inputElement2.value = '';
    showOnPage();
}


function showOnPage() {
    let todoListHTML = '';
    console.log(todoList);
    for(index = 0; index < todoList.length; index++) {
        const todo = todoList[index];
        todoListHTML += `
            <p>${todo}
                <button onclick="
                    todoList.splice(${index},1);
                    showOnPage();
                    ">Delete</button>
            </p>`;
    }
    console.log(todoListHTML);

    document.querySelector('.js-todo-result').innerHTML = todoListHTML;
}
