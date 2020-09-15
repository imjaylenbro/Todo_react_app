import React from "react";
import TodoList from "./components/Items";
import Welcome from "./components/Text";
import "./App.css";
import Status from "./components/Status";


class App extends React.Component {
  state = {
    list: [
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
    ],
    newList: "",
  };
  addNewItem = (event) => {
    this.setState({ newList: event.target.value });
  };
  addTodoItem = () => {
    this.setState((state) => {
      return {
        list: [...state.list, { name: state.newList }],
        newList: "",
      };
    });
  };
  render() {
    return (
      <>
        <Status />
        <Welcome />
        <div>
        <input type="text" onChange={this.addNewItem} value={this.state.newList} style={styles}/>
        <button onClick={this.addTodoItem}>Add</button>

        </div>
        <ul>
          {this.state.list.map((tasks) => {
            return <TodoList list={tasks} />;
          })}
        </ul>
        
      </>
    );
  }
}

export default App;

const styles = {
  marginLeft: "50px",
}