import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import About from "./About";
import Login from "./Login";
import VirtualPalette from "./VirtualPalette";
// import toolTip from "./tooltip";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/palette" element={<VirtualPalette />} />
        {/* <Route path="/tooltip" element={<toolTip />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
