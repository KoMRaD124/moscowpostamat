import React from "react";
import styles from "./SideBar.module.scss";
import { logoWhite } from "../../../assets/img";
import { LeftMenu } from "../LeftMenu/LeftMenu";
export const SideBar = () => {
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <img className={styles.logo} src={logoWhite} alt="" srcSet="" />
        <LeftMenu/>
      </div>
    </div>
  );
};
