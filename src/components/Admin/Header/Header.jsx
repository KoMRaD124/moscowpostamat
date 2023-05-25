import React from "react";
import styles from "./Header.module.scss";
import { Logout } from "../../../assets/img";
import { ExitScreen } from "../Access/AccessScreens/ExitScreen/ExitScreen";
import { SearchField } from "./Search/SearchField";


export const Header = () => {
  const [isExit, setIsExit] = React.useState(true);

  return (
    <>
      <div  className={styles.body}>
        <SearchField/>
        <div className={styles.button}>
          <img src={Logout} alt="Кнопка выхода" srcSet="" />
          <p className={styles.buttonText}>Выход</p>
        </div>
      </div>
      {isExit?<></>:<ExitScreen active={isExit} setIsExit={setIsExit}/>}
    </>
  );
};
