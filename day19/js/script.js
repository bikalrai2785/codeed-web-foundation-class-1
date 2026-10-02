const todos = document.getElementById('todos');
const addBtn = document.getElementById('addBtn');
const addTodoInput = document.querySelector('div .addTodo');

function addTask(e) {
  e.preventDefault();
  // create the first div container
  const todoContainer = document.createElement('div');

  todoContainer.classList.add('todo-container');

  // create the todo task
  const todo = document.createElement('input');

  // add a class to the todo
  todo.classList.add('todo');

  // make the todo to be readonly
  todo.setAttribute('readonly', 'readonly');

  // anything written in the add todo input, we have to capture the value
  const todoValue = addTodoInput.value;

  // insert the value into the created todo
  todo.value = todoValue;

  //append the todo to the todoContainer
  todoContainer.appendChild(todo);

  // create two buttons: edit and delete
  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  // set their text
  editBtn.innerText = 'Edit';
  deleteBtn.textContent = 'Delete';

  // set button attributes
  editBtn.setAttribute('id', 'editBtn');
  deleteBtn.setAttribute('id', 'deleteBtn');
  editBtn.setAttribute('type', 'button');
  deleteBtn.setAttribute('type', 'button');

  // add the buttons to the container
  todoContainer.appendChild(editBtn);
  todoContainer.appendChild(deleteBtn);

  // add click event to edit button
  editBtn.addEventListener('click', function () {
    if (editBtn.innerHTML === 'Edit') {
      todo.removeAttribute('readonly');

      editBtn.innerText = 'Save changes';
    } else if (editBtn.innerText === 'Save changes') {
      todo.setAttribute('readonly', 'readonly');
      editBtn.textContent = 'Edit';
    }
  });

  //   add event to deleteBtn
  deleteBtn.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    console.log(e.target.parentElement);

    // get the parent element
    const todoContainer = e.target.parentElement;

    console.log(todoContainer);

    // remove the todo container from the todos list
    todos.removeChild(todoContainer);
  });

  // append the todoContainer to the todos list
  todos.appendChild(todoContainer);
}

addBtn.addEventListener('click', addTask);
