import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/users/usersSlice";
import medicineReducer, { fetchMedicinesAction } from "../slices/medicines/medicineSlices";
import cartReducer from "../slices/Cart/cartSlice"
import categoryReducer from "../slices/categories/categoriesSlice";
// store
const store=configureStore({
  reducer:{
    users:usersReducer,
    medicines:medicineReducer,
    cart:cartReducer,
    categories: categoryReducer,
  }
})

store.dispatch(fetchMedicinesAction())

export default store;