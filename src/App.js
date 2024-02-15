import { Route, Routes } from "react-router-dom";

import Login from "./components/Users/Forms/Login";
import Register from "./components/Users/Forms/Register";
import Navbar from "./components/Navbar/Navbar";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import AdminRoutes from "./components/AuthRoute/AdminRoutes";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AddMedicine from "./components/Admin/Medicines/AddMedicine";
// import MedicineFilters from "./components/Users/Medicines/MedicineFilters";
import UpdateMedicine from "./components/Admin/Medicines/UpdateMedicine";
import Home from "./pages/HomePage";
import MedicinePage from "./pages/MedicinePage";
import MedicineItem from "./components/Users/Medicines/MedicineItem";
import CartPages from "./pages/CartPages";
import CustomerProfile from "./components/Users/Profile/CustomerProfile";
import ManageStocks from "./components/Admin/Medicines/ManageStocks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CategoryToAdd from "./components/Admin/Categories/AddCategory";
import ManageCategories from "./components/Admin/Categories/ManageCategories";
import Footer from "./components/Footer/Footer";
import Checkout from "./pages/Checkout";
import ManageOrders from "./components/Admin/ManageOrders/ManageOrders";
import Orders from "./pages/Orders";
import CheckoutSuccess from "./pages/CheckoutSuccess";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
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
          path="admin/add-medicine"
          element={
            <AdminRoutes>
              <AddMedicine />
            </AdminRoutes>
          }
        />
        <Route
          path="admin/medicine/edit/:id"
          element={
            <AdminRoutes>
              <UpdateMedicine />
            </AdminRoutes>
          }
        />
        <Route
          path="admin/manage-medicines"
          element={
            <AdminRoutes>
              <ManageStocks />
            </AdminRoutes>
          }
        />

        {/* Category */}
        <Route
          path="/admin/category-to-add"
          element={
            <AdminRoutes>
              <CategoryToAdd />
            </AdminRoutes>
          }
        />
        <Route
          path="/admin/manage-category"
          element={
            <AdminRoutes>
              <ManageCategories />
            </AdminRoutes>
          }
        />

        <Route
          path="/admin/manage-orders"
          element={
            <AdminRoutes>
              <ManageOrders />
            </AdminRoutes>
          }
        />
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/medicines" element={<MedicinePage />} />
        <Route path="/medicines/:id" element={<MedicineItem />} />
        {/* <Route path="/medicines-filters" element={<MedicineFilters />} /> */}
        <Route
          path="/cart"
          element={
            <AuthRoute>
              <CartPages />
            </AuthRoute>
          }
        />
        <Route
          path="/customer-profile"
          element={
            <AuthRoute>
              <CustomerProfile />
            </AuthRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <AuthRoute>
              <Checkout></Checkout>
            </AuthRoute>
          }
        ></Route>
         <Route
          path="/user/orders"
          element={
            <AuthRoute>
              <Orders></Orders>
            </AuthRoute>
          }
        ></Route>
        <Route
          path="/success"
          element={
            <AuthRoute>
              <CheckoutSuccess></CheckoutSuccess>
            </AuthRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
