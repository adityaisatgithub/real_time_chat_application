import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
