import React from "react";
import styles from "./DeleteScreen.module.scss";
import { MyButton } from "../../../../common/Button/MyButton";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { deleteUser } from "../../../../../store/usersSlise";
import { domain } from "../../../../../constants/config";

export const DeleteScreen = ({active, setIsDel,role,id,email}) => {
  const dispatch = useDispatch();
  const delUser = () => {
    axios
      .delete(`${domain}/api/admin/users/${id}`)
      .then((response) => {
        dispatch(
          deleteUser(id)
        );
      })
      .catch((error) => {
        console.log(error);
      });
      setIsDel(true)
  };
  return (
    <div className={styles.body} onClick={()=>setIsDel(true)}>
      <div className={styles.content} onClick={e=>e.stopPropagation()}>
        <div className={styles.container}>
          <h2 className={styles.header}>Вы точно хотите удалить {role}?</h2>
          <div className={styles.text}>
          Будет удалён доступ: {email}
          </div>
          <div className={styles.buttons}>
            <MyButton onClick={()=>setIsDel(true)} redButton>Отмена</MyButton>
            <MyButton whiteButton onClick={delUser}>
              Удалить
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};
