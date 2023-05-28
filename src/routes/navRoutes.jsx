import React from "react";
import { MainPage } from "../pages/MainPage/MainPage";
import { AccessPage } from "../pages/AccessPage/AccessPage";
import { TasksPage } from "../pages/TasksPage/TasksPage";
import { ReviewListPage } from "../pages/ReviewListPage/ReviewListPage";
import { AnalyticsPage } from "../pages/AnalyticsPage/AnalyticsPage";
import { main,comments,Tasks,Analytics,Access,postamats } from "../assets/img";
import {PostamatListPage} from "../pages/PostamatListPage/PostamatListPage";


export const navRoutes = [
  {
    path: "/Home",
    element: <MainPage />,
    icon: main,
    name:"Главная"
  },
  {
    path: "/postamats",
    element: <PostamatListPage />,
    icon: postamats,
    name:"Постаматы"
  },
  {
    path: "/reviews",
    element: <ReviewListPage />,
    icon: comments,
    name:"Отзывы"
  },
  {
    path: "/Tasks",
    element: <TasksPage/>,
    icon: Tasks,
    name:"Задачи"
  },
  {
    path: "/Analytics",
    element: <AnalyticsPage/>,
    icon: Analytics,
    name:"Аналитика"
  },
  {
    path: "/Access",
    element: <AccessPage />,
    icon: Access,
    name:"Доступы"
  },
];
