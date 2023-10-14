import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// initalState
const initialState = {
  loading: false,
  error: null,
  users: [],
  user: {},
  profile: {},
  userAuth: {
    loading: false,
    error: null,
    userInfo: {},
  },
};

// login action
export const loginUserAction = createAsyncThunk(
  "users/login",
  async ({ email, password }, { rejectWithValue, getState, dispatch }) => {
    try {
      // make the http reques
      const { data } = await axios.post(`${process.env.BASE_URL}/users/login`,{
        email,
        password,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

// user slice
const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginUserAction.pending, (state, action) => {
      state.userAuth.loading = true;
    });
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.userAuth.userInfo = action.payload;
      state.userAuth.loading = false;
    });
    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.userAuth.error = action.payload;
      state.userAuth.loading = false;
    });
  },
});

//generate reducer
const usersReducer = userSlice.reducer;
export default usersReducer;
