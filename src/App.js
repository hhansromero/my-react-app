import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Students from "./components/Students"
import Home from "./components/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="students" element={<Students />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
