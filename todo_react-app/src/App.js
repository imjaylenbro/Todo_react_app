import React from "react";
import TodoList from "./components/Items";
import Welcome from "./components/Text";
import "./App.css";
import Status from "./components/Status";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const plusSign = <FontAwesomeIcon icon={faPlusCircle} size="6x" />;


class App extends React.Component {
 state = {
    list:
    [
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
      {
        name: "Working out",
        description: "Gotta have that summer body",
        completed: false,
      },
    ]
}
  

  render () {
    return (
      <>
        <Status />
        <Welcome />
        <ul>
          {this.state.list.map((tasks) => {
            return <TodoList list={tasks} />;
          })}
        </ul>
        <input type="text"/>
        <button>Add</button>
      </>
    );
  }
  
}

export default App;
