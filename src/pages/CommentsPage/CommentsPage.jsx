import React from 'react'
import styles from "./CommentsPage.module.scss"
import { observer } from 'mobx-react-lite'
import { SearchStore } from '../../mobxStore/store';

export const CommentsPage = observer(() => {
    const{setReviews,setTasks,tasks,reviews}=SearchStore;
    console.log(reviews)
  return (
    <div>{reviews.result[0].id}</div>
  )
});
