import React from "react";
import styles from "./AdminPage.module.scss";
import { SideBar } from "../../components/Admin/SideBar/SideBar";
import { Header } from "../../components/Admin/Header/Header";
import { Route, Routes } from "react-router-dom";
import { navRoutes } from "../../routes/navRoutes";
import { useDispatch } from "react-redux";
import axios from "axios";
import { domain } from "../../constants/config";
import { setRating } from "../../store/ratingSlise";
import { setOpenTask } from "../../store/openTasksSlise";
import { setInProgressTask } from "../../store/inProgressTasksSlise";


export const AdminPage = () => {
  /* const dispatch=useDispatch()
  const allFetch = async () => {
    try {
      const avgfetch = axios.get(`${domain}/api/admin/reviews/avg-rating`);
      const openTaskfetch = axios.get(`${domain}/api/admin/tasks?status=open`);
      const inProgressTaskfetch = axios.get(`${domain}/api/admin/tasks?status=in_progress`);

      const response = await axios.all([avgfetch, openTaskfetch, inProgressTaskfetch]);
      dispatch(setRating(response[0].data));
      dispatch(setOpenTask(response[1].data));
      dispatch(setInProgressTask(response[2].data));


    } catch (error) {
      console.error(error);
    }
  };
  React.useEffect(()=>allFetch(),[]) */
    return (
    <div className={styles.body}>
      <SideBar />
      <div className={styles.content}>
        <Header />
        <Routes>
          {navRoutes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path}/>
          ))}
        </Routes>
      </div>
    </div>
  );
};
