import React from "react";
import styles from "./TaskCard.module.scss";

export const TaskCard = ({ type, address, date, id }) => {
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.typeProblem}>{type}</div>
          <div className={styles.address}>{address}</div>
        </div>
        <div className={styles.date}>{date}</div>
      </div>
    </div>
  );
};
