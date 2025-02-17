import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Chat from "./components/chat/Chat";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
