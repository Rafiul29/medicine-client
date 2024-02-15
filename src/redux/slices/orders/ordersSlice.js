import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// initalState
const initialState = {
  orders: [],
  order: {},
  loading: false,
  error: null,
  isAdded: false,
  isUpdated: false,
  isDeleted: false,
};

// create medicine action
export const createOrderAction = createAsyncThunk(
  "medicine/create",
  async (obj, { rejectWithValue, getState, dispatch }) => {
    try {
      const {
        name,
        email,
        address,
        city,
        phoneNumber,
        total_amount,
        medicines,
      } = obj;
      const token = getState()?.users?.userAuth?.userInfo?.token;

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/orders`,
        {
          name,
          email,
          address,
          city,
          phoneNumber,
          total_amount,
          medicines,
        },
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

//fetch all orders action
export const fetchAllOrders = createAsyncThunk(
  "orders/all",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState()?.users?.userAuth?.userInfo?.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/orders/all`,
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

//fetch SingleMedicine action
export const fetchUserOrdersAction = createAsyncThunk(
  "orders/user",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState()?.users?.userAuth?.userInfo?.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/orders/user`,
        config
      );

      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  extraReducers: (builder) => {
    //create
    builder.addCase(createOrderAction.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(createOrderAction.fulfilled, (state, action) => {
      state.loading = false;
      state.order = action.payload;
      // state.orders.orders = state.orders?.orders?.push(action.payload);
      state.isAdded = true;
    });

    builder.addCase(createOrderAction.rejected, (state, action) => {
      state.loading = false;
      state.order = null;
      state.isAdded = false;
      state.error = action.payload;
    });

    //fetch all orders
    builder.addCase(fetchAllOrders.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = action.payload;
      state.isAdded = true;
    });
    builder.addCase(fetchAllOrders.rejected, (state, action) => {
      state.loading = true;
      state.orders = null;
      state.isAdded = false;
      state.error = action.payload;
    });

    //fetch user orders 
    builder.addCase(fetchUserOrdersAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserOrdersAction.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = action.payload;
      
      state.isAdded = true;
    });
    builder.addCase(fetchUserOrdersAction.rejected, (state, action) => {
      state.loading = false;
      state.orders = null;
      state.isAdded = false;
      state.error = action.payload;
    });
  },
});

//generate the reducer
const orderReducer = orderSlice.reducer;

export default orderReducer;
