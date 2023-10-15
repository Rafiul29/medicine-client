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

// register action

// login action
export const registerUserAction = createAsyncThunk(
  "users/register",
  async ({fullname, email, password }, { rejectWithValue, getState, dispatch }) => {
    try {
      // make the http request
      
      const { data } = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/users/register`,{
        fullname,
        email,
        password,
      });
      // save the user into localstorage
      localStorage.setItem("userInfo",JSON.stringify(data));
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

// login action
export const loginUserAction = createAsyncThunk(
  "users/login",
  async ({ email, password }, { rejectWithValue, getState, dispatch }) => {
    try {
      // make the http reques
      
      const { data } = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/users/login`,{
        email,
        password,
      });
      // save the user into localstorage
      localStorage.setItem("userInfo",JSON.stringify(data));
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
    // handle action
    // login
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

    // register
    builder.addCase(registerUserAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(registerUserAction.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(registerUserAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

//generate reducer
const usersReducer = userSlice.reducer;
export default usersReducer;
