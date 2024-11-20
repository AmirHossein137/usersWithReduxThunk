import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiClient } from "../../config/ApiClient";
import toast from "react-hot-toast";

export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ user, navigate }) => {
    try {
      await ApiClient.post("/users", user).then((res) => {
        if (res.status === 201) {
          toast.success("User Created");
          navigate("/users");
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
);

export const showUsers = createAsyncThunk("user/showUsers", async () => {
  try {
    const response = await ApiClient.get("/users");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ userId, user, navigate }) => {
    try {
      await ApiClient.put(`/users/${userId}`, user).then((res) => {
        if (res.status === 200) {
          toast.success("User Updated");
          navigate("/users");
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (userId) => {
    try {
      await ApiClient.delete(`/users/${userId}`);
      return { id: userId };
    } catch (error) {
      console.log(error);
    }
  }
);
