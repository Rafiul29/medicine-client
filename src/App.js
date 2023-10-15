import { Route, Routes } from "react-router-dom";

import Login from "./components/Users/Forms/Login";
import Register from "./components/Users/Forms/Register";
import Navbar from "./components/Navbar/Navbar";

function App() {


  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
