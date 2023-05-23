import React from "react";
import styles from "./AddUser.module.scss";
import { MyButton } from "../../../common/Button/MyButton";
import { Input } from "../../../common/Input/Input";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addUser } from "../../../../store/usersSlise";

export const AddUser = ({ role, roleName, isActive }) => {
  const [login, setLogin] = React.useState("");
  const [email, setEmail] = React.useState("");
  const dispatch = useDispatch();

  let data = {
    email: email,
    role: role,
    name: login,
  };
  const sendData = () => {
    console.log(data);
    axios
      .post("https://msk-postamat.ru/api/admin/users", data)
      .then((response) => {
        dispatch(addUser(data));
        isActive(false);
      })
      .catch((error) => {
        console.error(error);
        isActive(false);
      });
  };
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <div className={styles.container}>
          <h2 className={styles.header}>Добавление {roleName}</h2>
          <div className={styles.inputs}>
            <Input
              placeholder={"Введите имя"}
              type="text"
              onChange={(e) => setLogin(e.target.value)}
            ></Input>
            <Input
              placeholder={"Введите почту"}
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
          </div>
          <div className={styles.text}>
            Пароль будет сгенерирован автоматически и отправлен пользователю на
            почту
          </div>
          <div className={styles.buttons}>
            <MyButton onClick={() => sendData()} redButton>
              Добавить
            </MyButton>
            <MyButton whiteButton onClick={() => isActive(false)}>
              Отмена
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};