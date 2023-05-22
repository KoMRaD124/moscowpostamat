import React from "react";
import styles from "./Header.module.scss";
import { Logout } from "../../../assets/img";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuth } from "../../../store/authSlise";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const logOutButton=()=>{
      axios
      .post("https://msk-postamat.ru/api/admin/logout")
      .then((response) => {
        dispatch(setAuth({
          id: null,
          email: "",
          name: "",
          role: "",
          isAuthenticated:false
      }));
        console.log(response.data);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });

      }
  
  return (
    
    <div onClick={logOutButton} className={styles.body}>
      <div className={styles.button}>
        <img src={Logout} alt="Кнопка выхода" srcset="" />
        <p className={styles.buttonText}>Выход</p>
      </div>
    </div>
  );
};
