import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import OrderOnline from "./pages/orderonline";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Couture Atelier ✨</h1>

        {/* Navigation */}
        <nav style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "40px" }}>
          <Link to="/" style={{ textDecoration: "none", fontWeight: "600", color: "#fff" }}>Home</Link>
          <Link to="/about" style={{ textDecoration: "none", fontWeight: "600", color: "#fff" }}>About</Link>
          <Link to="/gallery" style={{ textDecoration: "none", fontWeight: "600", color: "#fff" }}>Gallery</Link>
          <Link to="/contact" style={{ textDecoration: "none", fontWeight: "600", color: "#fff" }}>Contact</Link>
          <Link to="/order-online" style={{ textDecoration: "none", fontWeight: "600", color: "#fff" }}>Order Online</Link>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order-online" element={<OrderOnline />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;