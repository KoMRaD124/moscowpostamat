import React from "react";
import styles from "./Header.module.scss";
import { Logout } from "../../../assets/img";
import { ExitScreen } from "../Access/AccessScreens/ExitScreen/ExitScreen";

export const Header = () => {
  const [isExit, setIsExit] = React.useState(true);

  return (
    <>
      <div onClick={() => setIsExit(false)} className={styles.body}>
        <div className={styles.button}>
          <img src={Logout} alt="Кнопка выхода" srcSet="" />
          <p className={styles.buttonText}>Выход</p>
        </div>
      </div>
      {isExit?<></>:<ExitScreen active={isExit} setIsExit={setIsExit}/>}
    </>
  );
};
