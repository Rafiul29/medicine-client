import axios from "axios";
const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

//initalsState
const initialState = {
  categories: [],
  category: {},
  loading: false,
  error: null,
  isAdded: false,
  isUpdated: false,
  isDelete: false,
};

//create Category action
export const createCategoryAction = createAsyncThunk(
  "category/create",
  async (payload, { rejectWithValue, getState, dispatch }) => {
      const {name}=payload
    try {
      //Token - Authenticated
      const token = getState()?.users?.userAuth?.userInfo?.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      //Images
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/categories`,
        {name},
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

//fetch Categories action
export const fetchCategoriesAction = createAsyncThunk(
  "category/fetch-All",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/categories`);
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

//category slice
const categorySlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    //create
    builder.addCase(createCategoryAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createCategoryAction.fulfilled, (state, action) => {
      state.loading = false;
      state.category = action.payload;
      state.isAdded = true;
    });
    builder.addCase(createCategoryAction.rejected, (state, action) => {
      state.loading = false;
      state.category = null;
      state.isAdded = false;
      state.error = action.payload;
    });
     //fetch all
     builder.addCase(fetchCategoriesAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCategoriesAction.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    });
    builder.addCase(fetchCategoriesAction.rejected, (state, action) => {
      state.loading = false;
      state.categories = null;
      state.error = action.payload;
    });
  },
});

//generate the reducer
const categoryReducer = categorySlice.reducer;

export default categoryReducer;