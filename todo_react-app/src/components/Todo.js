import React from "react";

function TodoList(props) {
  
  
  
  return (
      <div style={styles.wrapper}>
    <li style={styles.taskBox}>
      <p style={props.list.completed ? styles.finished : styles.pending}>
        {props.list.name}

      <input type="checkbox" defaultChecked={props.list.completed}
      style={styles.checkbox} checked={props.list.completed}  onChange={props.list.name} />
      </p>
      
    </li>
    </div>
  );
}

const styles = {
  taskBox: {
    height: "50px",
    width: "100%px",
    backgroundColor: "#22BCCC",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",
    border: "5px dotted gray",

   
  },
  pending: {
    fontWeight: "italic",
    color: "black",
  },

  finished: {
    fontWeight: "bold",
    color: "gray",
    textDecoration: "line-through",
  },
  
};

export default TodoList;
