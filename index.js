// References
const addTodo = document.getElementById('add-todo'); // define form
const todoList = document.getElementById('todo-list'); // define list

// Tasks - Clickable events
addTodo.addEventListener('submit', function (e){ // 'submit' event listener
   e.preventDefault();

   const input = addTodo.querySelector('input'); // define user input
   const taskInput = input.value.trim(); // define removing extra spaces

   if (taskInput !== '') {
      const li = document.createElement('li');  // create task as a listed item
      const button = document.createElement('button'); //create button

      button.textContent = taskInput; // button gets the user input?

      li.appendChild(button); // puts button inside of li
      todoList.appendChild(li); // puts task into todoList

      input.value = ''; // clears the input after adding task

      button.addEventListener('click', function () {  // Event listener for strike through and removing task
         if (button.style.textDecoration !== 'line-through') { // clicking to add a strikethrough for task
            button.style.textDecoration = 'line-through';
         } else {
            li.remove(); // remove task if there is a strikethrough
         }
      })
   }
})