import { configureStore } from "@reduxjs/toolkit";
import authReduser from "./authSlise";
import usersReduser from "./usersSlise";
export const store = configureStore({
  reducer: { 
    auth: authReduser, 
    users:usersReduser,
  },
});
