import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'




const element = <FontAwesomeIcon icon={faHouseUser} />
const checkIcon = <FontAwesomeIcon size="20%" icon={faCheckSquare}/>


function Status(bar) {
    return (
        <>
        <div  style={styles.topBar}>
        <ul style={styles.ul}>
             <li> <p>Home {element}</p></li>
             <li><p>Completed {checkIcon}</p></li>
             <li><p>{profile.userName} <img style={styles.profileImg} src={profile.avatarImg} alt="hooded african-american cartoon"></img> </p></li>
        </ul>
        </div>
        </>
    )
};
 
export default Status

let styles = {
    
    profileImg:{
        width: "5%",
    },
    topBar: {
        backgroundColor:"#1BBCE0",
        height: "50px",
        width:"100%",
        padding:"30px",
        marginTop: "10px",
      

    },
    ul:{
       
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "baseline",
        postion: "absolute",
    
        

    }
};

let profile = {
    userName: "Jaylen",
    avatarImg:
      "https://1001freedownloads.s3.amazonaws.com/vector/thumb/99709/THE_HOOD_II.png",
  };  

 