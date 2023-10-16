import { Route, Routes } from "react-router-dom";

import Login from "./components/Users/Forms/Login";
import Register from "./components/Users/Forms/Register";
import Navbar from "./components/Navbar/Navbar";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import AdminRoutes from "./components/AuthRoute/AdminRoutes";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AddMedicine from "./components/Admin/Medicines/AddMedicine";
import MedicineFilters from "./components/Users/Medicines/MedicineFilters";
import UpdateMedicine from "./components/Admin/Medicines/UpdateMedicine";
import  Home  from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route
          path="/"
          element={<Home/>}
        />
        {/* admin route */}
        <Route
          path="/admin"
          element={
            <AdminRoutes>
              <AdminDashboard />
            </AdminRoutes>
          }
        />
        {/* medicine */}
        <Route
          path="add-medicine"
          element={
            <AdminRoutes>
              <AddMedicine />
            </AdminRoutes>
          }
        />
        <Route
          path="medicine/edit/:id"
          element={
            <AdminRoutes>
             <UpdateMedicine/>
            </AdminRoutes>
          }
        />
        <Route />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
