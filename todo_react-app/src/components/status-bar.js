import React from 'react'

function Status(bar) {
    return (
        <div  style={styles.topBar}>
            <div style={styles.hamburger}> </div>
            <div style={styles.hamburger}> </div>
            <div style={styles.hamburger}> </div>
           
        </div>
    )
};
 
export default Status

let styles = {
    hamburger: {
        backgroundColor:"black",
        height: "7px",
        width: "40px",
       margin: "8px" ,
    


    },
    profileImg:{
        width: "100%",
    },
    topBar: {
        backgroundColor:"#1BBCE0",
        textAlign:"left",
        height: "50px",
        width:"100%",
        padding:"10px",
        zIndex: "1",
        top: "3.4em",

    },
};

let profile = {
    userName: "Jaylen",
    avatarImg:
      "https://1001freedownloads.s3.amazonaws.com/vector/thumb/99709/THE_HOOD_II.png",
  };  

 let NavBar = [
     {
        name: "Home",
        icon: "",
    },
    {
        name: "Profile",
        icon: "",
    },
    {
        name: "Completed",
        icon: ""
    }
 ]