import React from "react";
import TodoList from "./components/Todo-items";
import Welcome from "./components/App-com";
import "./App.css";
import Status from "./components/Status-bar";

const list = [
  {
    name: "Meditate",
    description: "Try at least two mins",
    completed: true,
  },
  {
    name: "Grocery Shopping",
    description: "Because you know your partner won't.",
    completed: false,
  },
  {
    name: "Yoga",
    description: "It's gonna help your back.",
    completed: true,
  },
];


function App() {
  return (
    <>  
      <Status/>
        <Welcome/>    
      <ul>
        {list.map((tasks) => {
          return <TodoList list={tasks} />;
        })}
      </ul>
      </>
    
  );
}




export default App;
