import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Food from "./Food";
import Map from "./Map";
import ContactUs from "./Contact";
import NoteUs from "./Note";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="map/:abc" element={<Map />} />
        <Route path="food" element={<Food />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="note" element={<NoteUs />} />
      </Routes>
    </Router>
  );
}

export default App;
