import React from 'react'
import styles from "./SearchResult.module.scss"
import { observer } from 'mobx-react-lite'
import { searchStore } from '../../../../../mobxStore/store';
export const SearchResult = observer(() => {
    const{setReviews,setTasks,tasks,reviews}=searchStore;
  return (
    <div>{tasks}</div>
  )
});
