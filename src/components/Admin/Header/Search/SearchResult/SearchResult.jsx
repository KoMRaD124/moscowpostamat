import React from "react";
import styles from "./SearchResult.module.scss";
import { observer } from "mobx-react-lite";
import { SearchStore, searchStore } from "../../../../../mobxStore/store";
import { Divider } from "../../../../common/Divider/Divider";
import { Arrow } from "../../../../../assets/img";
import { CommentCard } from "./CommentCard/CommentCard";
export const SearchResult = observer(() => {
  
  let reviewsArray=[]
  console.log("ревью"+searchStore.reviews.result[0].id)
  if(Object.keys(searchStore.reviews).length > 0){
    reviewsArray=searchStore.reviews.result.slice(0,3)
    console.log("ревью"+searchStore.reviews.result)
  }
  console.log(searchStore.reviews.result[0])
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <h2 className={styles.head}>Результаты поиска</h2>{" "}
        <button className={styles.button}>X</button>
      </header>
      <div className={styles.divider}></div>
      <div className={styles.subHead}>Комментарии</div>
      <button className={styles.subHeadText}>
        <p>Посмотреть все комментарии ({searchStore.reviews.total_count})</p>{" "}
        <img src={Arrow} alt="" srcset="" />
      </button>
      <div className={styles.cardBlock}>
        {reviewsArray.map((el)=><CommentCard id={el.id} adress={el.address} rating={el.rating} types={el.category_ids} date={el.date.substr(0, 5)}/>)}
      </div>
    </div>
  );
});
