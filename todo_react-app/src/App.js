import React from 'react';
import './App.css';

function App() {
  return (
  
    <body>
    <div class="topBar">
      
      <h1 class="titleText">Task It</h1>
    </div>
    
      <h2 class="dateText">Tuseday, August 26 </h2>
        <p class= "quoteText">
          "Change will not come if we waint for some other person or if we wait for other time. 
          We are the ones we've been waiting for. We are the change that we seek."
          <br/>
          <br/>
          -Barack Obama
         </p>
      <ul>
        <li class="taskBox"><input type="checkbox"/>Mediatate</li>
        <br></br>
        <li class="taskBox"><input type="checkbox"/>Grocery Shopping</li>
        <br></br>
        <li class="taskBox"><input type="checkbox"/>Yoga</li>
        <br/>
        <button class="taskButton">Create New</button>
      </ul>
      <nav>
      <ul class="navContainer">
        <li><a src="#">Home</a></li>
        <li><a scr="#">History</a></li>
        <li><a scr="#">Profile</a></li>
      </ul>
    </nav>
      </body>
    
  );
}

export default App;
