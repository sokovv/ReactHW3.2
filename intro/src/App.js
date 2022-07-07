import "./App.css";
import dataJson from "./data/data";
import Listing from "./components/Listing";

const itemArr = dataJson();

function App() {
  return <Listing item={itemArr} />;
}

export default App;
