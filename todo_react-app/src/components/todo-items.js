import React from "react";

function TodoList(props) {
  return (
      <div style={styles.wrapper}>
    <li style={styles.taskBox}>
      <p style={props.list.completed ? styles.finished : styles.pending}>
        {props.list.name}
      </p>
      <p style={props.list.completed ? styles.finished : styles.pending}>
        {" "}
        {props.list.description}{" "}
      </p>
      <input type="checkbox" checked={props.list.completed} />
    </li>
    </div>
  );
}

const styles = {
  taskBox: {
    height: "150px",
    width: "200px",
    backgroundColor: "#B39DDB",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",

   
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

  wrapper:{
      display: "flex",
      flexDirection: "colum",
      flexWrap: "wrap",
      justifyContent:"center",
  }
};

export default TodoList;
