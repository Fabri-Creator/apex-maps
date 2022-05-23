import "./App.css";
import LeftLayout from "./components/LeftLayout/LeftLayout";
import RightLayout from "./components/RightLayout/RightLayout";

function App() {
  console.log("App");

  return (
    <div className="App">
      <LeftLayout />
      <RightLayout />
    </div>
  );
}

export default App;
