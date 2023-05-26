import React from "react";
import styles from "./CommentsPage.module.scss";
import { observer } from "mobx-react-lite";

import { CommentCardPage } from "../CommentCardPage/CommentCardPage";

export const CommentsPage = observer(() => {
  return (
    <div>
      <CommentCardPage
        id={1233121}
        comment={
          "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl."
        }
        source={"Озон"}
        rating={4}
        name={"Вася пупкин"}
        tel={88005553535}
        date={"22.08.2023"}
        postamatId={"T228322"}
        adress={"Артемовск, там где нужны снаряды"}
        tags={["постамат","жалобы","нехватка снарядов"]}
        taskId={"T-472443"}
      />
    </div>
  );
});
