import "./App.css";
import Homepage from "./components/Pages/Homepage";

console.log(
  "%c Developed by: Black Bird Marketing https://blackbird.marketing",
  "padding:9px 5px; background:black; line-height:25px;color: white"
);
function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
