import { BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
