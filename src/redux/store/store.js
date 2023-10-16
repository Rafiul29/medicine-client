import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/users/usersSlice";
import medicineReducer, { fetchMedicinesAction } from "../slices/medicines/medicineSlices";
import cartReducer from "../slices/Cart/cartSlice"

// store
const store=configureStore({
  reducer:{
    users:usersReducer,
    medicines:medicineReducer,
    cart:cartReducer
  }
})

store.dispatch(fetchMedicinesAction())

export default store;