import React from 'react';

let profile = {
    userName: "Jaylen",
    avatarImg:
      "https://1001freedownloads.s3.amazonaws.com/vector/thumb/99709/THE_HOOD_II.png",
  };  

function Welcome(com){
    return ( 
    <>
        <h1 style={styles.titleText}>Task It</h1>
        <img className="avtarImg"
                style={styles.profileImg}
                src={profile.avatarImg}
                alt="hooded african-american cartoon"
              ></img>
         <p style={styles.mainText}> Welcome back {profile.userName}!</p>
        <p style={styles.mainText}>
            "Change will not come if we wait for some other person or if we wait for
            other time. We are the ones we've been waiting for. We are the change
            that we seek."
            <br />
            <br />
            -Barack Obama
        </p>  
      </>
    );
}
export default Welcome


const styles = {
    titleText:{
        fontSize: "40px",
        textAlign: "center",
    },
    mainText:{
        padding:"4%",
        textAlign: "center",
        fontSize: "19px",
    },
    dateText: {
        textAlign: "center",
    } ,
    profileImg: {
        width: "100px",
        },

};

