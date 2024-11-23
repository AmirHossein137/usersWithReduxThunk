import { createSlice } from "@reduxjs/toolkit";
import {
  createUser,
  deleteUser,
  showUsers,
  updateUser,
} from "../services/user/userRequsets";
import {
  CreateUserFulfilled,
  CreateUserPending,
  CreateUserRejected,
  deleteUserFulfilled,
  deleteUserPending,
  deleteUserRejected,
  showUsersFulfilled,
  showUsersPending,
  showUsersRejected,
  updateUserFulfilled,
  updateUserPending,
  updateUserRejected,
} from "./reducers/userReducer";

const initialState = {
  users: [],
  loading: false,
  error: null,
  status: false,
  searchText: "",
};

const userDetail = createSlice({
  name: "userDetail",
  initialState,
  reducers: {
    searchData: (state, action) => {
      state.searchText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, CreateUserPending);
    builder.addCase(createUser.fulfilled, CreateUserFulfilled);
    builder.addCase(createUser.rejected, CreateUserRejected);

    builder.addCase(showUsers.pending, showUsersPending);
    builder.addCase(showUsers.fulfilled, showUsersFulfilled);
    builder.addCase(showUsers.rejected, showUsersRejected);

    builder.addCase(updateUser.pending, updateUserPending);
    builder.addCase(updateUser.fulfilled, updateUserFulfilled);
    builder.addCase(updateUser.rejected, updateUserRejected);

    builder.addCase(deleteUser.pending, deleteUserPending);
    builder.addCase(deleteUser.fulfilled, deleteUserFulfilled);
    builder.addCase(deleteUser.rejected, deleteUserRejected);
  },
});

export const { searchData } = userDetail.actions;
export default userDetail.reducer;
