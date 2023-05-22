import React from "react";
import styles from "./login.module.scss";
import { logoRed } from "../../assets/img";
import { Input } from "../common/Input/Input";
import { MyButton } from "../common/Button/MyButton";
import axios from "axios";
import { domain } from "../../constants/config";
import { useDispatch,useSelector } from "react-redux";
import { setAuth } from "../../store/authSlise";
import { redirect, Navigate, useNavigate} from "react-router-dom";

export const Login = () => {
  let navigate=useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch=useDispatch()
  const[login,setLogin]=React.useState("")
  const[password,setPassword]=React.useState("")
  const data={
    "email":login,
    "password":password
  }
  const sendLogpass=()=>{
    console.log(data)
    axios.post("https://msk-postamat.ru/api/admin/login", data)
    .then(response => {
      dispatch(setAuth(response.data))
      navigate("/home")
    })
    .catch(error => {
      console.error(error);
    });
    
  }
  React.useEffect(()=>{
    if (isAuthenticated) {
			navigate("/", {replace: true})
		}
	}, [])
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <img src={logoRed} alt="" srcset="" />
        <div className={styles.login}>
          <div className={styles.inputText}>Почта</div>
          <Input type="text" placeholder="Введите почту" onChange={(e)=>setLogin(e.target.value)}/>
        </div>

        <div className={styles.password}>
          <div className={styles.inputText}>Пароль</div>
          <Input type="password" placeholder={"Введите пароль"} onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        <div className={styles.button}><MyButton redButton onClick={()=>sendLogpass()}>Войти</MyButton></div>
      </div>
    </div>
  );
};
