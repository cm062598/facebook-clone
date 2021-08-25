import React from "react";

// Styles
import {
  createRoomContainer,
  iconContainer,
  icon,
  userContainer,
  active,
  userWrapper,
} from "./CreateRoom.module.scss";

// Data
import { lists } from "./data";

const CreateRoom = () => {
  const url =
    "https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/wpPOMYDgx50.png?_nc_eui2=AeEsESsDuPA50Gi9MPnrw5yQqefX6xArP5Kp59frECs_kks6FCivsWqpBI8ORluVZNSZODYe46LhmCsZCDeQlqWO";

  return (
    <div className={createRoomContainer}>
      <div className={iconContainer}>
        <i
          data-visualcompletion="css-img"
          style={{
            backgroundImage: `url(${url})`,
            backgroundPosition: "0 -219px",
            backgroundSize: "auto",
            width: "24px",
            height: "24px",
            backgroundRepeat: "no-repeat",
            display: "inline-block",
          }}
          className={icon}
        ></i>
        <p>Create Room</p>
      </div>

      <div className={userContainer}>
        {lists.map(({ name, url }, index) => (
          <div
            key={index}
            className={userWrapper}
            style={{ backgroundImage: url }}
          >
            <div className={active}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateRoom;
