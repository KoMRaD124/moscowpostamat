import React from "react";
import styles from "./AdminPage.module.scss";
import { SideBar } from "../../components/Admin/SideBar/SideBar";
import { Header } from "../../components/Admin/Header/Header";
import { Route, Routes } from "react-router-dom";
import { navRoutes } from "../../routes/navRoutes";

export const AdminPage = () => {

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
