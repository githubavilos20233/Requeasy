import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Clearance from "./pages/clearance";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/clearance" element={<Clearance />} />
      </Routes>
    </Router>
  );
}

export default App;
