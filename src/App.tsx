import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Food from "./Food";
import Map from "./Map";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="map/:abc" element={<Map />} />
        <Route path="food" element={<Food />} />
      </Routes>
    </Router>
  );
}

export default App;
