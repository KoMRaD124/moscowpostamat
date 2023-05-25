import React from "react";
import styles from "./SearchResult.module.scss";
import { observer } from "mobx-react-lite";
import { searchStore } from "../../../../../mobxStore/store";
import { Divider } from "../../../../common/Divider/Divider";
import { Arrow } from "../../../../../assets/img";
import { CommentCard } from "./CommentCard/CommentCard";
export const SearchResult = observer(() => {
  const { setReviews, setTasks, tasks, reviews } = searchStore;

  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <h2 className={styles.head}>Результаты поиска</h2>{" "}
        <button className={styles.button}>X</button>
      </header>
      <div className={styles.divider}></div>
      <div className={styles.subHead}>Комментарии</div>
      <button className={styles.subHeadText}>
        <p>Посмотреть все комментарии ({})</p>{" "}
        <img src={Arrow} alt="" srcset="" />
      </button>
      <div className={styles.cardBlock}>
        <CommentCard />
      </div>
    </div>
  );
});
