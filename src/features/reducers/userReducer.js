//Create User
export const CreateUserPending = (state) => {
  state.loading = true;
  state.status = false;
};

export const CreateUserFulfilled = (state, action) => {
  state.loading = false;
  state.users.push(action.payload);
  state.status = true;
  state.error = null;
};

export const CreateUserRejected = (state, action) => {
  state.loading = false;
  state.users = [];
  state.error = action.error.message;
  state.status = false;
};

//Show Users
export const showUsersPending = (state) => {
  state.loading = true;
};
export const showUsersFulfilled = (state, action) => {
  state.loading = false;
  state.users = action.payload;
  state.error = null;
};
export const showUsersRejected = (state, action) => {
  state.loading = false;
  state.users = [];
  state.error = action.error.message;
};

//Update Users
export const updateUserPending = (state) => {
  state.loading = true;
};
export const updateUserFulfilled = (state, action) => {
  state.loading = false;
  state.users = action.payload;
  state.error = null;
};
export const updateUserRejected = (state, action) => {
  state.loading = false;
  state.users = [];
  state.error = action.error.message;
};

//Delete User

export const deleteUserPending = (state) => {
  state.loading = true;
};
export const deleteUserFulfilled = (state, action) => {
  state.loading = false;
  if (action.payload && action.payload.id) {
    const { id } = action.payload;
    state.users = state.users.filter((element) => element.id !== id);
    console.log("Deleted user ID:", id);
  } else {
    console.error("Payload is missing or invalid:", action.payload);
  }
};
export const deleteUserRejected = (state, action) => {
  state.loading = false;
  state.error = action.error.message;
};
