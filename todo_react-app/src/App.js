import React from 'react';
import './App.css';

const toDoList = [{
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
}];

let profile = {
  username: "Jaylen",
  avatarImg: "https://1001freedownloads.s3.amazonaws.com/vector/thumb/99709/THE_HOOD_II.png",
}

function App() {
  return (
  
    <body>
    <div style= {topBar}>  
    <h1 style={titleText}>Task It</h1>
    </div>
    <div>
    <p style= {text}> Welcome back {profile.username}!
    </p>
    <img  style={profileImg} src={profile.avatarImg} alt="hooded cartoon" />

    </div>
      <h2 style={dateText}>Tuseday, August 26 </h2>
        <p style= {text}>
          "Change will not come if we wait for some other person or if we wait for other time. 
          We are the ones we've been waiting for. We are the change that we seek."
          <br/>
          <br/>
          -Barack Obama
         </p>
         <ul>
           {toDoList.map((tasks) => {
             return (
               <li style= {taskBox}>
                <p>{tasks.name}</p>
                <p>{tasks.description}</p>
                <input type="checkbox"  checked={tasks.completed} />
               </li>
             )
           })}
         </ul>
        <ul style={navBar}>
          <li> <p> Home </p> </li>
          <li> <p>Profile</p> </li>
          <li> <p> completed Task </p> </li>
        </ul>
     
      </body>
    
  );
}

const topBar = {
backgroundColor: "#1BBCE0",
textAlign: "center",
width: "100%",
padding: "1%"

};

const titleText = {
  fontSize : "40px",
  textAlign: "center",
};

const text = {
  padding: "4%",
  textAlign: "center",
  fontSize: "19px",
}

const dateText = {
  textAlign: "center",
}

const taskBox = {
  height: "150px",
  width: "200px",
  backgroundColor: "#B39DDB",
  borderRadius: "10px",
  padding: "20px",
  margin: "10px",
  
}

const profileImg = {
  width: "8em",
  

}

const navBar = {
  fontSize: "17px",
  padding: "20px",
  display: "flex",
  displayDirections: "row-revrese",
  justifyContent: "space-between",
  
}

export default App;
