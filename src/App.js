import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Channel from "./Channel";
import Company from "./Company";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="About">About</Link>
        <br />
        <Link to="/">Home</Link>
        <br />
        <Link to="Contact">Contact</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />}>
            <Route path="Company" element={<Company />} />
            <Route path="Channel" element={<Channel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
