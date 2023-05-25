import React from "react";
import styles from "./Search.module.scss";
import { searchButton } from "../../../../assets/img";
import axios from "axios";
import { domain } from "../../../../constants/config";
import { observer } from "mobx-react-lite";
import { searchStore } from "../../../../mobxStore/store";


export const SearchField = observer(() => {
    /* const{setReviews,setTasks,tasks,reviews}=searchStore; */
    const [searchValue, setSearchValue]=React.useState("")
    const searchFetch = () => {
     
       axios.get(`${domain}/api/admin/reviews?search=москва`)
       .then((response)=>{searchStore.reviews = response.data})
       
       
       .catch((error) => {
        console.log(error);
      });
       axios.get(`${domain}/api/admin/tasks/${searchValue}`)
       .then((response)=>searchStore.tasks=response.data)
       .catch((error) => {
        console.log(error);
      });
        
    };
  return (
    <div style={{ position: 'relative', with:"100%"}}>
      <input
        onChange={(e)=>setSearchValue(e.target.value)}
        className={styles.input}
        type="text"
        placeholder="№ комментария, почта, телефон, адрес постамата "
      />
      <button
      onClick={()=>searchFetch()}
      style={{
        position: 'absolute',
        top: '50%',
        right: '1px',
        transform: 'translateY(-50%)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
      }}
    >
        <img src={searchButton} alt="" /> 
      
    </button>
    </div>
  );
});
