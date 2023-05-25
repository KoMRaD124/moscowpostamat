import React from "react";
import styles from "./MainPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Arrow } from "../../assets/img";
import { TaskCard } from "../../components/MainPage/TaskCard/TaskCard";
import { domain } from "../../constants/config";
import axios from "axios";
import { setRating } from "../../store/ratingSlise";
import classNames from "classnames";
import { setOpenTask } from "../../store/openTasksSlise";
import { setInProgressTask } from "../../store/inProgressTasksSlise";

export const MainPage = () => {
  
  const allFetch = async () => {
    try {
      const avgfetch = axios.get(`${domain}/api/admin/reviews/avg-rating`);
      const openTaskfetch = axios.get(`${domain}/api/admin/tasks?status=open`);
      const inProgressTaskfetch = axios.get(`${domain}/api/admin/tasks?status=in_progress`);

      const response = await axios.all([avgfetch, openTaskfetch, inProgressTaskfetch]);
      dispatch(setRating(response[0].data));
      dispatch(setOpenTask(response[1].data));
      dispatch(setInProgressTask(response[2].data));
      
      setAvgRating(response[0].data.month_avg)

    } catch (error) {
      console.error(error);
      
    }
  };
  const userName = useSelector((state) => state.auth.auth.name);
  const [date, setDate] = React.useState("месяц");

  const dispatch = useDispatch();

  
  
  React.useEffect(() => {

    allFetch();
    
  }, []);
  const avgRate = useSelector((state) => state.rating.rating); 
  console.log(avgRate);

  const [avgRating, setAvgRating] = React.useState(avgRate.month);


  const setAvgDate = (date, rate=avgRate.month) => {
    setDate(date);
    setAvgRating(rate);
  };
  const inProgressTask=useSelector((state)=>state.inProgressTasks.inProgressTasks.result)
  const openTask =useSelector((state)=>state.openTasks.openTasks.result)
  const openTaskArray=openTask.slice(0,4)
  return (
    <div className={styles.body}>
      <h2 className={styles.welcome}>Добро пожаловать, {userName}!</h2>
      <div className={styles.firstBlock}>
        <div className={styles.averageRatig}>
          <div className={styles.averageHead}>
            <div
              className={classNames(styles.ratingNumber, {
                [styles.ratingBad]: avgRating < 3,
                [styles.ratingNormal]: avgRating < 4,
                [styles.ratingGood]: avgRating >= 4,
              })}
            >
              {avgRating}
            </div>
            <div className={styles.ratingText}>
              Средняя оценка <br /> за {date}
            </div>
          </div>
          <div className={styles.averageData}>
            <button
              className={styles.dataButton}
              onClick={() => setAvgDate("неделю", avgRate.week)}
            >
              Неделя
            </button>
            <button
              className={styles.dataButton}
              onClick={() => setAvgDate("месяц", avgRate.month)}
            >
              Месяц
            </button>
            <button
              className={styles.dataButton}
              onClick={() => setAvgDate("год", avgRate.year)}
            >
              Год
            </button>
          </div>
          <button className={styles.averageShowAll}>
            Посмотреть подробности <img src={Arrow} alt="" />
          </button>
        </div>
        <div className={styles.taskInProgress}>
          <div className={styles.taskHead}>Задачи в работе</div>
          <div className={styles.tasks}>
            <TaskCard type={inProgressTask[0].name} date={inProgressTask[0].created_at} address={inProgressTask[0].review.address} id={inProgressTask[0].id}/>
            <TaskCard type={inProgressTask[1].name} date={inProgressTask[1].created_at} address={inProgressTask[1].review.address} id={inProgressTask[1].id}/>

          </div>
          <button className={styles.tasksShowAll}>
            Все задачи в работе <img src={Arrow} alt="" />
          </button>
        </div>
      </div>
      <div className={styles.secondBlock}>
        <div className={styles.openTask}>
          <div className={styles.taskHead}>Задачи требуют решения</div>
          <div className={styles.tasksIsOpen}>
              {openTaskArray.map((el)=>(<TaskCard type={el.name} date={el.created_at} address={el.review.address} id={el.id}/>))}
          </div>
          <button className={styles.tasksShowAll}>
            Все задачи, требующие решения <img src={Arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
