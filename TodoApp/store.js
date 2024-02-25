//here we storing our data in a array and use the 
const store = {
  todos: [
    {
      id: "1",
      title: "Complete Task",
      completed: false,
    },
  ],
};

//here we want to render new todos default and when user want 
//so we use proxy 
const storeHandler = { //here we create a storehandler for Proxy
get(target, property){ //the get will have two properties one is target and one is property
  //here console.log the property and  a message
  //here we return the value here take Focus for that we return which property use want only target them
  return target[property];
  /*[
    {
      id:"4",
      title: "A",
      completed: true, 
    },
  ]
  */
},
set(target, property, value){ //set will have three proprties target,value and prperty
 // console.log(target, property, value);
  //console.log("ohh you are trying to set", property);
  target[property] = value;
  if (property == "todos") {  //here we use if condition 
     window.dispatchEvent(new Event("todoschange")); //we know we have custom event's in javascript so we use todoschnage as a custom event
  }
  localStorage.setItem("store", JSON.stringify(store));
  return true;
},
};
const storeProxy = new Proxy(store, storeHandler);

function addTodo(newTodo){
  storeProxy.todos = [...storeProxy.todos, newTodo];
};

function deleteTodo(id){
    storeProxy.todos = storeProxy.todos.filter(todo => todo.id !== id)
};

function toggleCompleted(id, completed){
storeProxy.todos = storeProxy.todos.map(todo => {
  if (todo.id === id){
    return {...todo, completed: completed}
  } else {
    return todo;
  }
});

}

export { addTodo, deleteTodo, toggleCompleted };
export default storeProxy;