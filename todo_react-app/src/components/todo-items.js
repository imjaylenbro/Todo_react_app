import React from 'react';

function TodoList(props){
    return (
        <li style={taskBox}>
        <p> { props.list.name} </p>
        <p> {props.list.description} </p>
        <input type="checkbox" checked={props.list.completed}  />
       </li>
    )
}

const taskBox = {
    height: "150px",
    width: "200px",
    backgroundColor: "#B39DDB",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",
    
  }

  export default TodoList 