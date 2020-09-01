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
    <div className="topBar">
      
      <h1 className="titleText">Task It</h1>
    </div>
    <div className =" user-container">
    <p>{profile.username}</p>
    <img src={profile.avatarImg} alt="hooded cartoon charterç" />

    </div>
      <h2 className="dateText">Tuseday, August 26 </h2>
        <p className= "quoteText">
          "Change will not come if we waint for some other person or if we wait for other time. 
          We are the ones we've been waiting for. We are the change that we seek."
          <br/>
          <br/>
          -Barack Obama
         </p>
         <ul>
           {toDoList.map((tasks) => {
             return (
               <li className= "taskBox">
                <p>{tasks.name}</p>
                <p>{tasks.description}</p>
                <input type="checkbox"  checked={tasks.completed} />
               </li>
             )
           })}
         </ul>

     
      </body>
    
  );
}

export default App;
