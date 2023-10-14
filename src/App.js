import { Route, Routes } from "react-router-dom";

import Login from "./components/Users/Forms/Login";
import Register from "./components/Users/Forms/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
