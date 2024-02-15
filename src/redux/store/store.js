import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/users/usersSlice";
import medicineReducer, { fetchMedicinesAction } from "../slices/medicines/medicineSlices";
import cartReducer from "../slices/Cart/cartSlice"
import categoryReducer from "../slices/categories/categoriesSlice";
import ordersReducer from "../slices/orders/ordersSlice"
// store
const store=configureStore({
  reducer:{
    users:usersReducer,
    medicines:medicineReducer,
    cart:cartReducer,
    categories: categoryReducer,
    orders:ordersReducer,
  }
})

store.dispatch(fetchMedicinesAction())

export default store;