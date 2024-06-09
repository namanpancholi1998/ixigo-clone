import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Flights from "./pages/Flights/Flights";
import Trains from "./pages/Trains/Trains";
import Hotels from "./pages/Hotels/Hotels";
import Buses from "./pages/Buses/Buses";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Flights />} />
          <Route path="flights" element={<Flights />} />
          <Route path="trains" element={<Trains />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="buses" element={<Buses />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
