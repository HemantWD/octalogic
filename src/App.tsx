import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </>
  );
}

export default App;
