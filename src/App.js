import "./App.css";

import { LAYOUT_CONFIG } from "./global";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      {LAYOUT_CONFIG.map(({ variant, zoom, id }) => (
        <Layout variant={variant} zoom={zoom} key={id} />
      ))}
    </div>
  );
}

export default App;
