import React from "react";
import styles from "./CommentCard.module.scss";
export const CommentCard = ({ rating, types, address, id, date }) => {
  return (
    <div className={styles.body}>
      <div className={styles.rating}>{rating}</div>
      <div className={styles.content}>
        <div className={styles.categories}>
          {types.map((i) => (
            <span className={styles.type}>кат {i}</span>
          ))}
        </div>

        <div className={styles.adress}>{address}</div>
      </div>
      <div className={styles.number}>
        <div className={styles.id}>{id}</div>
        <div className={styles.date}>{date}</div>
      </div>
    </div>
  );
};
