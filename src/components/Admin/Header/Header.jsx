import React from "react";
import styles from "./Header.module.scss";
import { Logout, video } from "../../../assets/img";
import { ExitScreen } from "../Access/AccessScreens/ExitScreen/ExitScreen";
import { SearchField } from "./Search/SearchField";

export const Header = () => {
  const [isExit, setIsExit] = React.useState(true);

  return (
    <>
      <div className={styles.body}>
        <SearchField />
        <div className={styles.buttonBlock}>
          <a href="https://www.mos.ru/city/projects/postamat/" className={styles.video}>
            <img src={video} alt="" srcset="" />
            Обучение
          </a>
          <div className={styles.button} onClick={() => setIsExit(false)}>
            <img src={Logout} alt="Кнопка выхода" srcSet="" />
            <p className={styles.buttonText}>Выход</p>
          </div>
        </div>
        {/* <a href="" className={styles.video}><img src={video} alt="" srcset="" />Обучение</a>
        <div className={styles.button} onClick={()=>setIsExit(false)}>
          <img src={Logout} alt="Кнопка выхода" srcSet="" />
          <p className={styles.buttonText}>Выход</p>
        </div> */}
      </div>
      {isExit ? <></> : <ExitScreen active={isExit} setIsExit={setIsExit} />}
    </>
  );
};
