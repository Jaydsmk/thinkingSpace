import "./App.css";
import Test from "./test";
import { Routes, Route } from "react-router-dom";
import Heading from "./Component/Heading";
import List from "./Component/List";
import Upload from "./Component/Upload";

function App() {
  return (
    <div>
      <Heading />
      <Routes>
        <Route path="/list" element={<List />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default App;
