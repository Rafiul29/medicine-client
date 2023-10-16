import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slices/users/usersSlice";
import medicineReducer, { fetchMedicinesAction } from "../slices/medicines/medicineSlices";

// store
const store=configureStore({
  reducer:{
    users:usersReducer,
    medicines:medicineReducer
  }
})
store.dispatch(fetchMedicinesAction())

export default store;