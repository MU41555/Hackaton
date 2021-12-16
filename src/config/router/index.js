import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Sign_In_Page, Sign_Up_Page, Myscard } from "./approuters";
import NavBar from "../../components/navbar";

export default function AppRouter() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Sign_In_Page />} />
          <Route path="/signup" element={<Sign_Up_Page />} />
          <Route path="/room" element={<Myscard />} />

        </Routes>
      </Router>
    </>
  );
}