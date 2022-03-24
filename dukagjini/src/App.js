import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Shared/Navbar/Navbar";
import About from "./components/Shared/Pages/About";
import Booking from "./Pages/Booking";
import Homepage from "./Pages/Homepage";

console.log(
  "%c Developed by: Black Bird Marketing https://blackbird.marketing",
  "padding:9px 5px; background:black; line-height:25px;color: white"
);
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
