import React from "react";
import styles from "./AdminPage.module.scss";
import { SideBar } from "../../components/Admin/SideBar/SideBar";
import { Header } from "../../components/Admin/Header/Header";
import { Route, Routes } from "react-router-dom";
import { navRoutes } from "../../routes/navRoutes";

import { observer } from "mobx-react-lite";
import { searchStore } from "../../mobxStore/store";
import { SearchResult } from "../../components/Admin/Header/Search/SearchResult/SearchResult";


export const AdminPage = observer(() => {

  return (
    <>
      <div className={styles.body}>
        <SideBar />
        <div className={styles.content}>
          <Header />
          <Routes>
            {navRoutes.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            ))}
            
            <Route
                path="/search"
                element={<SearchResult/>}
              />
          </Routes>
        </div>
      </div>
    </>
  );
});
