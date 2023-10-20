import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// initalState
const initialState = {
  medicines: [],
  medicine: {},
  loading: false,
  error: null,
  isAdded: false,
  isUpdated: false,
  isDeleted: false,
};

// create medicine action
export const createMedicineAction = createAsyncThunk(
  "medicine/create",
  async (obj, { rejectWithValue, getState, dispatch }) => {
    try {
      const { name, description, category, images, price, countInStock } = obj;
      const token = getState()?.users?.userAuth?.userInfo?.token;

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/medicines`,
        {
          name,
          description,
          category,
          images,
          price,
          countInStock,
        },
        config
      );
      return data;
    } catch (error) {
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);

// update medicine action

export const updateMedicineAction = createAsyncThunk(
  "medicine/update",
  async ({id,obj}, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState()?.users?.userAuth?.userInfo?.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.put(
        `${process.env.REACT_APP_API_BASE_URL}/medicines/${id}`,
        {
          ...obj
        },
        config
      );

      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

//fetch all Medicines action
export const fetchMedicinesAction = createAsyncThunk(
  "medicine/list",
  async ({ url }, { rejectWithValue, getState, dispatch }) => {
    try {
      const token = getState()?.users?.userAuth?.userInfo?.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/${url}`,
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

//fetch SingleMedicine action
export const fetchSingleMedicineAction = createAsyncThunk(
  "medicine/details",
  async ({ id }, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/medicines/${id}`
      );
      console.log(id);
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const deleteMedicineAction = createAsyncThunk(
  "medicine/delete",
  async ({ id }, { rejectWithValue, getState, dispatch }) => {
    const token = getState()?.users?.userAuth?.userInfo?.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API_BASE_URL}/medicines/${id}`,
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);


const medicineSlice = createSlice({
  name: "medicine",
  initialState,
  extraReducers: (builder) => {
    //create
    builder.addCase(createMedicineAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createMedicineAction.fulfilled, (state, action) => {
      state.loading = false;
      state.medicine = action.payload;
      //    state.medicines.push(action.payload);
      // state.isAdded = true;
    });
    builder.addCase(createMedicineAction.rejected, (state, action) => {
      state.loading = false;
      state.medicine = null;
      state.isAdded = false;
      state.error = action.payload;
    });
    //update
    builder.addCase(updateMedicineAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateMedicineAction.fulfilled, (state, action) => {
      state.loading = false;
       state.medicine = action.payload;
      state.isUpdated = true;
    //   const indexToUpdate = state.medicines.findIndex(
    //     (t) => t.id === action.payload.id
    // );
    // state.medicines[indexToUpdate] = action.payload;
    });
    builder.addCase(updateMedicineAction.rejected, (state, action) => {
      state.loading = false;
      state.medicine = null;
      state.isUpdated = false;
      state.error = action.payload;
    });
    //fetch all
    builder.addCase(fetchMedicinesAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMedicinesAction.fulfilled, (state, action) => {
      state.loading = false;
      state.medicines = action.payload;
      state.isAdded = true;
    });
    builder.addCase(fetchMedicinesAction.rejected, (state, action) => {
      state.loading = true;
      state.medicines = null;
      state.isAdded = false;
      state.error = action.payload;
    });

    //fetch single medicine
    builder.addCase(fetchSingleMedicineAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSingleMedicineAction.fulfilled, (state, action) => {
      state.loading = false;
      state.medicine = action.payload;
      state.isAdded = true;
    });
    builder.addCase(fetchSingleMedicineAction.rejected, (state, action) => {
      state.loading = false;
      state.medicine = null;
      state.isAdded = false;
      state.error = action.payload;
    });
    // delete
    builder.addCase(deleteMedicineAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteMedicineAction.fulfilled, (state, action) => {
     
      state.loading = false;
      state.medicine = action.payload;
      state.isAdded = true;
      console.log("ed", state.medicines)
    //   state.medicines = state.medicines?.filter(
    //     (t) => t._id !== action.meta.arg
    // );
    });
    builder.addCase(deleteMedicineAction.rejected, (state, action) => {
      state.loading = false;
      state.medicine = null;
      state.isAdded = false;
      state.error = action.payload;
    });
  },
});

//generate the reducer
const medicineReducer = medicineSlice.reducer;

export default medicineReducer;
