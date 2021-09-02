import React from "react";

// Icons
import { RiCloseFill } from "react-icons/ri";

// Styles
import {
  section,
  container,
  header,
  iconContainer,
  icon,
  reactorsContainer,
  reactorWrapper,
  imgContainer,
  profile,
  likeIcon,
} from "./Reactors.module.scss";

const Reactors = ({ reactors, setToShowReactors }) => {
  return (
    <div className={section}>
      <div className={container}>
        <div className={header}>
          <h4>Like{reactors.length > 1 && "s"}</h4>
          <div
            className={iconContainer}
            onClick={() => setToShowReactors(false)}
          >
            <RiCloseFill className={icon} />
          </div>
        </div>
        <div className={reactorsContainer}>
          {reactors.map((reactor) => (
            <div key={reactor.reactorID} className={reactorWrapper}>
              <div className={imgContainer}>
                <img src={reactor.photoURL} alt="" className={profile} />
                <img
                  src="https://scontent.xx.fbcdn.net/m1/v/t6/An8TxrncfS4U_evP89c2GTGoBe2r0S9YacO1JWgXsSujyi44y6BPf9kkfnteC4B3wzEXsYS1dwFIG3UcC1c_CnQTTPxJ2zIXeAxTrhL8YV0Sp8quSZo.png?ccb=10-5&amp;oh=576c59c4ad095e6dc4d59194bee5329d&amp;oe=61363C56&amp;_nc_sid=55e238"
                  alt=""
                  style={{ height: "16px", width: "16px" }}
                  className={likeIcon}
                />
              </div>
              <h3>{reactor.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reactors;
