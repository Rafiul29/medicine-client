import { Route, Routes } from "react-router-dom";

import Login from "./components/Users/Forms/Login";
import Register from "./components/Users/Forms/Register";
import Navbar from "./components/Navbar/Navbar";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import AdminRoutes from "./components/AuthRoute/AdminRoutes";
import AdminDashboard from "./components/Admin/AdminDashboard";


function App() {

  return (
    <>
    <Navbar/>
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
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
