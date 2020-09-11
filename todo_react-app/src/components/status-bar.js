import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faHouseUser} size="3x" />;
const checkIcon = <FontAwesomeIcon icon={faCheckSquare} size="3x" />;

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
              <img
                style={styles.profileImg}
                src={profile.avatarImg}
                alt="hooded african-american cartoon"
              ></img>
              <br />
              {profile.userName}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Status;

let styles = {
  profileImg: {
    width: "70px",
  },
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

let profile = {
  userName: "Jaylen",
  avatarImg:
    "https://1001freedownloads.s3.amazonaws.com/vector/thumb/99709/THE_HOOD_II.png",
};
