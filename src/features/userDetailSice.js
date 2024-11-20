import { createSlice } from "@reduxjs/toolkit";
import { createUser, deleteUser, showUsers, updateUser } from "../services/user/userRequsets";

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
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
      state.status = false;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
      state.status = true;
      state.error = null;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
      state.status = false;
    });

    builder.addCase(showUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(showUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = null;
    });
    builder.addCase(showUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });

    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = null;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });

    builder.addCase(deleteUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload && action.payload.id) {
        const { id } = action.payload;
        state.users = state.users.filter((element) => element.id !== id);
        console.log("Deleted user ID:", id);
      } else {
        console.error("Payload is missing or invalid:", action.payload);
      }
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { searchData } = userDetail.actions;
export default userDetail.reducer;
