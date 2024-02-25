//import render function and call it
import render from "./render.js";
//import store from "./store.js";
import { addTodo, deleteTodo, toggleCompleted } from "./store.js";

window.addEventListener("todoschange", () => {
  render(); //function render
});

const storeFromLocalStorage = JSON.parse(localStorage.getItem("store"));
  //console.log(storeFromLocalStorage);
  if(storeFromLocalStorage?.todos.length > 0 ){
    storeFromLocalStorage.todos = storeFromLocalStorage.todos;
  } else {
    localStorage.setItem("store", JSON.stringify(store));
    render(); //initial render
  }
//store.todos = [];

//Array : [] arrays are always in a [] so we need to change when we want to chnage the data of store


//form get
const from = document.querySelector("#www");
const todoTitleInput = document.querySelector(".input-todo-list");
from.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoTitle = todoTitleInput.value;
  const newTodo = {
    id: crypto.randomUUID(),
    title: todoTitle,
    completed: false,
  };
  addTodo(newTodo);
});

const todos = document.querySelector(".todos");

todos.addEventListener("click", (e) => {
  const target = e.target;
 if(target.classList.contains("delete")){
  const id =  target.closest(".todo").dataset.id;
  deleteTodo(id);
 }

});

todos.addEventListener("change", (e) => { 
  const target = e.target;
 if(target.classList.contains("todo-checkbox")){
  const id =  target.closest(".todo").dataset.id;
  const completed = target.checked;
  //console.log(target.checked);
  //console.log(id);
  toggleCompleted(id, completed);
 

 }
});
//store.todos = [];
//when we using defer in out html file for link js script file so we able to call render function directly
//render();
//but when we don;t use defer then we have to use that method to call render function
/*document.addEventListener("DOMContentLoaded", () =>{
    render();
})
*/
/*
//here we know about data when we use data in out html file so we able to access for that elements easily
const totowork = document.querySelector(".todo");
//here we take and access the data with the help of dataset element
console.log(totowork.dataset);
*/
