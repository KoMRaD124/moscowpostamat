import React from "react";
import styles from "./CommentCard.module.scss";
export const CommentCard = ({rating,types,adress,id,date}) => {
  return (
    <div className={styles.body}>
      <div className={styles.rating}>{rating}</div>
      <div className={styles.content}>CommentCard</div>
      <div className={styles.number}><div className={styles.id}>{id}</div ><div className={styles.id}>date</div></div>
    </div>
  );
};
