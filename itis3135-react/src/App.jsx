import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Contract from "./pages/Contract";
import Navbar from "./components/Navbar";
import Student from "./pages/Student"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </Router>
  );
}

export default App;
