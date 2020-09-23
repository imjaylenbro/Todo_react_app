import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";


const element = <FontAwesomeIcon icon={faHouseUser} size="3x" />;
const checkIcon = <FontAwesomeIcon icon={faCheckSquare} size="3x" />;
const userProfile = <FontAwesomeIcon icon={faUserCircle} size="3x" />;

function Status(bar) {
  return (
    <>
      <div style={styles.topBar}>
        <ul style={styles.ul}>
          <li>
            {" "}
            <p>
              {element}
              <br /> home
            </p>
          </li>
          <li>
            <p>
              {checkIcon} <br /> Completed{" "}
            </p>
          </li>
          <li>
            <p>
              {userProfile}
              <br />
              Profile
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Status;

let styles = {
  
  topBar: {
    backgroundColor: "#1BBCE0",
    height: "100px",
    width: "100%",
    padding: "20px",
  },
  ul: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "baseline",
    postion: "absolute",
  },
};

