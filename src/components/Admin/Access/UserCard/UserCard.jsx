import React from "react";
import styles from "./UserCard.module.scss";
import { ReactComponent as Delete } from "../../../../assets/img/Delete.svg";
import classNames from "classnames";

export const UserCard = ({ name, email,id }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className={styles.body}>
      <div className={styles.info}>
        <div className={styles.block}>
          <div className={styles.name}>Имя</div>
          <div className={styles.subname}>{name}</div>
        </div>
        <div className={styles.block}>
          <div className={styles.name}>Почта</div>
          <div className={styles.subname}>{email}</div>
        </div>
      </div>
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={() => console.log()}
        className={styles.button}
      >
        <Delete className={classNames({ [styles.delBtn]: !isHovered,[styles.delBtnHover]:isHovered })} />
      </div>
    </div>
  );
};
