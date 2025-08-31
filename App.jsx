import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import RecipeManager from "./RecipeManager";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route = Signup page */}
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<RecipeManager />} /> 
         <Route path="/signup" element={<Signup />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
