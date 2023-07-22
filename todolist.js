const todoList = [];

function addTodoPage() {
    const inputElement1 = document.querySelector('.js-name-input1');
    const dateElement = document.querySelector('.js-date');
    const name = inputElement1.value;
    const dueDate = dateElement.value;
    if (name) {
        todoList.push({name, dueDate});
    }
    inputElement1.value = '';
    dateElement.value = '';
    showOnPage();
}


function showOnPage() {
    let todoListHTML = '';
    for(index = 0; index < todoList.length; index++) {
        const todoObject = todoList[index];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate; 
        todoListHTML += `
            <div class="output-name">
                ${name}
            </div>
            <div class="output-date">
                ${dueDate}
            </div>
            <button onclick="todoList.splice(${index},1);showOnPage();" class="delete-todo-button">Delete</button>`;
    }

    document.querySelector('.js-todo-result').innerHTML = todoListHTML;
}
