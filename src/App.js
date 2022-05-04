import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { About } from "./components/About";
import { Editor } from "./components/Editor";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/editor" element={<Editor />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
