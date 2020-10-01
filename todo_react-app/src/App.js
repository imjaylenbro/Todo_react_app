import React from "react";
import TodoList from "./components/Todo";
import Welcome from "./components/Text";
import "./App.css";
import Status from "./components/Status";

class App extends React.Component {
  state = {
    list: [
      {
        name: "Meditate",
        completed: true,
        id: 1,
      },
      {
        name: "Grocery Shopping",
        completed: false,
        id: 2,
      },
      {
        name: "Yoga",
        completed: true,
        id: 3,
      },
      {
        name: "Working out",
        completed: false,
        id: 4,
      },
    ],
    newList: "",
  };

  
  // text box
  addNewItem = (event) => {
    this.setState({ newList: event.target.value });
  };
  // button
  addTodoItem = () => {
    this.setState((state) => {
      return {
        list: [...state.list, { name: state.newList }],
        newList: "",
      };
    });
  };
  
  handleListDelete = (id) => {
    this.setState((state) => {
      const filterArray = state.list.filter((list) => {
        if (state.list.id === id) {
          return false;
        } else {
          return true;
        }
      });
      return {
        list: filterArray,
      };
    });
  };
  handleChecked = (id) => {
    this.setState((state) => {
      const newTask = state.list.map((list) => {
        if (state.list.id === id) {
          return Object.assign({}, list, {
            completed: list.completed ? false : true,
          });
        }else {
          return newTask;
        }
      });
    });
  };
  render() {
    return (
      <>
        <Status />
        <Welcome />
        <div>
          <input
            class="input"
            type="text"
            onChange={this.addNewItem}
            value={this.state.newList}
            style={styles.addText}
          />
          <button
            class="button"
            onClick={this.addTodoItem}
            style={styles.addButton}
          >
            Add
          </button>
        </div>
        <ul>
          {this.state.list.map((tasks) => {
            return <TodoList list={tasks} 
        
            />;
          })}
        </ul>
      </>
    );
  }
}

export default App;

const styles = {
  addText: {
    marginLeft: "50px",
    width: "50%",
    height: "30px",
  },
  addButton: {
    height: "34px",
    marginLeft: "5px",
    backgroundColor: "F06292",
  },
};
