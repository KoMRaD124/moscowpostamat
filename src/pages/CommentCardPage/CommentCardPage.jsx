import React from "react";
import styles from "./CommentCardPage.module.scss";
import { arrowBack } from "../../assets/img";
import { Divider } from "../../components/common/Divider/Divider";
import classNames from "classnames";
export const CommentCardPage = ({
  id,
  name,
  tel,
  adress,
  date,
  comment,
  tags,
  source,
  rating,
  taskId,
  postamatId,
}) => {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <button className={styles.buttonBack}>
          <img src={arrowBack} alt="" srcset="" />
        </button>
        <div className={styles.headerText}>Комментарий — №{id} </div>
      </div>
      <Divider />
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <div className={styles.userData}>
            <div className={styles.headText}>Данные пользователя</div>
            <div className={styles.userDataConteiner}>
              <div className={styles.userDataContent}>
                <div className={styles.subText}>Имя</div>
                <div className={styles.text}>{name}</div>
                <div className={styles.subTextMob}>Телефон</div>
                <div className={styles.text}>{tel}</div>
              </div>
            </div>

            <div className={styles.commentDataHead}>Дата комментария</div>
            <div className={styles.commentDataContainer}>
              <div className={styles.dateText}>Получен</div>
              <div className={styles.date}>{date.substr(0, 5)}</div>
            </div>
            <div className={styles.postamatHead}>Постамат</div>
            <div className={styles.postamatContainer}>
              <div className={styles.postamatId}>
                <div>{postamatId}</div>
              </div>
              <div className={styles.postamatAdress}>{adress}</div>
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.headText}>Отзыв</div>
          <div className={styles.reviewContainer}>
            <div className={styles.reviewContent}>
              <div className={styles.ratingContainer}>
                <div className={classNames(styles.rating, {
                  [styles.ratingBad]: rating < 3,
                  [styles.ratingNormal]: rating ===3,
                  [styles.ratingGood]: rating >= 4,
                })}>{rating}</div>
                <div className={styles.ratingText}>
                  Оценка <br /> пользователя
                </div>
              </div>
              <Divider />
              <div className={styles.sourceContainer}>
                <div className={styles.sourceHeader}>Источник</div>
                <div className={styles.sourceText}>{source}</div>
              </div>
              <Divider />
              <div className={styles.commentContainer}>
                <div className={styles.commentHeader}>
                  Содержимое комментария:
                </div>
                <div className={styles.commentText}>{comment}</div>
              </div>
              <div className={styles.tagsContainer}>
                <div className={styles.tagsHeader}>Тэги</div>
                <div className={styles.tagsArray}>
                    {tags.map((el)=><div className={styles.tag} key={el}>{el}</div>)}
                    
                </div>
              </div>
              <div className={styles.taskHead}>Связанная задача</div>
              <div className={styles.task}>{taskId}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
