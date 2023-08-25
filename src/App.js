import React from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  
  // Add the handlesubmit code here
  function handleSubmit(e) {
    e.preventDefault();
  
    const newTodo = {
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false,
    };
  
    if (newTodo.text.length > 0) {
      setTodos([...todos].concat(newTodo));
    } else {
      alert("Invalid Task");
    }
    setTodo("");
  }
  
  // Add the deleteToDo code here
  function deleteTodo(id) {
    setTodos([...todos].filter((todo) => todo.id !== id));
  }

  // Add the toggleComplete code here

  
  // Add the submitEdits code here

  
  return(
    <div className ="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type ="text"
          align ="right"
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add your new task"
          value={todo}  
        />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo) =>
        <div className="todo" key={todo.id}>
          <div>{todo.text}</div>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>  
        </div>
      )}
    </div>
  );
};
export default App;