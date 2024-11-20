import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../features/userDetailSice";

const store = configureStore({
  reducer: { user: userDetail },
});

export default store;
