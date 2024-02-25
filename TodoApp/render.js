//here we import store file and use it for render function
import store from "./store.js";

function render() { //render function for render the store data
  //  console.log(store);//when we directly take data from html 
//so now we want to take data in javascript so we write a code for li todos
const todos = document.querySelector(".todos");
/*todos.innerHTML =`<li class="todo" data-id="1">
<span class="todo-title"> Todo 1</span>
<div class="toggle">
    <input type="checkbox" class="todo-check" name="completed" id="todo-check">
    <button class="delete">X</button>
</div>
</li>`;
console.log(todos);
*/
const todoElements = store.todos.map(todo => `<li class="todo" data-id=${todo.id}>
<span class="todo-title ${todo.completed?"completed":""}"> ${todo.title} </span>
<div class="toggle">
    <input type="checkbox" class="todo-checkbox" ${todo.completed?"checked": ""}>
    <button class="delete">X</button>
</div>
</li>`)
.join("");
//console.log(todoElements);
todos.innerHTML = todoElements;
}

export default render;