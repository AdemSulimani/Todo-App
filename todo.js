let todoList = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [];

rendertodoList();

function rendertodoList() {
  let todoHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
      <div class="todo-item">
        <p>${name} - ${dueDate}</p>
        <button class="edit" onclick="editTodo(${i});">Edit</button>
        <button onclick="deleteTodo(${i});">Delete</button>
      </div>`;
    todoHTML += html;
  }
  document.querySelector('.show-result').innerHTML = todoHTML;
}

function addTodo() {
  const todoName = document.getElementById('todoName').value.trim();
  const todoDate = document.getElementById('todoDate').value;
  if (todoName === '' || todoDate === '') {
    alert('Please fill out both fields.');
    return;
  }
  const todoItem = { name: todoName, dueDate: todoDate };
  todoList.push(todoItem);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  rendertodoList();
  document.getElementById('todoName').value = '';
  document.getElementById('todoDate').value = '';
}

function editTodo(index) {
  const newName = prompt("Enter new todo name:");
  const newDate = prompt("Enter new due date:");
  if (newName !== null && newDate !== null) {
    todoList[index].name = newName;
    todoList[index].dueDate = newDate;
    localStorage.setItem('todoList', JSON.stringify(todoList));
    rendertodoList();
  }
}

function deleteTodo(index) {
  if (confirm("Are you sure you want to delete this todo?")) {
    todoList.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(todoList));
    rendertodoList();
  }
}