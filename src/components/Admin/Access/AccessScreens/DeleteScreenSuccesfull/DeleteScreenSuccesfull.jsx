
    import React from 'react'
    import styles from "./DeleteScreenSuccesfull.module.scss"
import { xmark } from '../../../../../assets/img';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../../../../store/usersSlise';
    export const DeleteScreenSuccesfull = ({SetSuccesLoading, email}) => {
        const dispatch=useDispatch()
      return (
        <div className={styles.body}>
        <div className={styles.content}>
          <div>
            <div className={styles.header}>Пользователь удалён</div>
            <div className={styles.text}>Пользователь {email} утратил доступ</div>
          </div>
          <div>
            <button onClick={() => dispatch(closeModal(false))} className={styles.button}>
              <img src={xmark} alt="" srcset="" />
            </button>
          </div>
        </div>
      </div>
    );
  };
  
   