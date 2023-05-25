import React from 'react'
import styles from "./CommentsPage.module.scss"
import { observer } from 'mobx-react-lite'
import { SearchStore, searchStore } from '../../mobxStore/store';
import { SearchResult } from '../../components/Admin/Header/Search/SearchResult/SearchResult';

export const CommentsPage = observer(() => {
  
  const array=searchStore.reviews.result
  return (
    <div><SearchResult/></div>
  )
});
