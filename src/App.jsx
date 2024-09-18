import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import FlightsDetailProvider from "./context/FLightDetailsProvider";
import Flights from "./pages/Flights/Flights";
import FlightSearchPage from "./pages/Flights/FlightSearch/FlightSearchPage";
import Trains from "./pages/Trains/Trains";
import Hotels from "./pages/Hotels/Hotels";
import Buses from "./pages/Buses/Buses";

function App() {
  return (
    <Router>
      <FlightsDetailProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Flights />} />
            <Route path="flights" element={<Flights />} />
            <Route
              path="/flights/:searchQuery"
              element={<FlightSearchPage />}
            />
            <Route path="trains" element={<Trains />} />
            <Route path="hotels" element={<Hotels />} />
            <Route path="buses" element={<Buses />} />
          </Route>
        </Routes>
      </FlightsDetailProvider>
    </Router>
  );
}

export default App;
