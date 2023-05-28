import React from "react";
import { MainPage } from "../pages/MainPage/MainPage";
import { AccessPage } from "../pages/AccessPage/AccessPage";
import { TasksPage } from "../pages/TasksPage/TasksPage";
import { CommentsPage } from "../pages/CommentsPage/CommentsPage";
import { AnalyticsPage } from "../pages/AnalyticsPage/AnalyticsPage";
import { main,comments,Tasks,Analytics,Access } from "../assets/img";


export const navRoutes = [
  {
    path: "/",
    element: <MainPage />,
    icon: main,
    name:"Главная"
  },
  {
    path: "/Comments",
    element: <CommentsPage />,
    icon: comments,
    name:"Комментарии"
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
