import React from "react";
import styles from "./AccessPage.module.scss";
import { AcessHead } from "../../components/Admin/Access/AccessHead/AccessHead";
import { Divider } from "../../components/common/Divider/Divider";
import { UserCard } from "../../components/Admin/Access/UserCard/UserCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../store/usersSlise";

export const AccessPage = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.users.users);
  const adminArray=  usersData.filter((el)=>el.role!=="user")
  const userArray=  usersData.filter((el)=>el.role==="user")
  const getUsers = () => {
    axios
      .get("https://msk-postamat.ru/api/admin/users")
      .then((response) => {
        dispatch(setUsers(response.data));

        console.log(response.data);
      })
      .catch((error) => {
        console.log("запрос пользователей " + error);
      });
  };
  React.useEffect(() => getUsers, []);
  return (
    <div className={styles.body}>
      <AcessHead />
      <Divider />
      <h1 className={styles.h1}>Администрация</h1>
      <div className={styles.dataArray}>
        {adminArray.map((el) => (
          <UserCard
            name={el.name}
            email={el.email}
            id={el.id}
            role={"администратора"}
            key={el.id + el.name}
          />
        ))}
      </div>
      <h1 className={styles.h1}>Пользователи</h1>
      <div className={styles.dataArray}>
        {userArray.map((el) => (
          <UserCard
            name={el.name}
            email={el.email}
            id={el.id}
            role={"пользователя"}
            key={el.id + el.name}
          />
        ))}
      </div>
    </div>
  );
};
