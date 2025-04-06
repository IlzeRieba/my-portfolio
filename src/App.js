import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimCursor from "./components/AnimCursor";
import Portfolio from "./Portfolio";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <AnimCursor />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
