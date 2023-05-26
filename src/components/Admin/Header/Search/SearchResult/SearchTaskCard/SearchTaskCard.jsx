import React from 'react'
import styles from "./TaskCard.module.scss"
export const SearchTaskCard = ({category,address,id,date}) => {
  return (
    <div className={styles.body}>

    <div className={styles.content}>
      <div className={styles.categories}>{category}
      </div>

      <div className={styles.address}>{address}</div>
    </div>
    <div className={styles.number}>
      <div className={styles.id}>{id}</div>
      <div className={styles.date}>{date.substr(0, 5)}</div>
    </div>
  </div>
  )
}
