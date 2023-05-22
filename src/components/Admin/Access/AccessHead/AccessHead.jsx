import React from "react";
import styles from "./AccessHead.module.scss";
import { useSelector } from "react-redux";
import { Plus } from "../../../../assets/img";

export const AcessHead = () => {
  const userRoot = useSelector((state) => state.auth.root);
  return (
    <div className={styles.head}>
      <button className={styles.button}><img src={Plus} alt="" srcset="" /> <p className={styles.btnText}>Добавить Пользователя</p></button>
      {userRoot==="root"?<></>:<button className={styles.button}> <img src={Plus} alt="" srcset="" /><p className={styles.btnText}>Добавить Администратора</p></button>}
    </div>
  );
};
