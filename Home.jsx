import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";

const Home = () => {
  const { visitorName } = useContext(AppContext);

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "32px", fontWeight: "600" }}>
        Welcome to Couture Atelier, {visitorName} ✨
      </h2>

      {/* First section */}
      <div style={{ display: "flex", flexDirection: "row", gap: "20px", marginBottom: "40px", flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ flex: "1 1 300px" }}>
          <img 
            src={home1} 
            alt="Runway Fashion" 
            style={{ width: "100%", borderRadius: "12px", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }} 
          />
        </div>
        <div style={{ flex: "2 1 400px", fontSize: "18px", lineHeight: "1.6" }}>
          <p style={{ margin: "0 0 20px 0" }}>
            At <strong>Couture Atelier</strong>, we redefine elegance with every stitch.
            From runway to street, our curated couture collection speaks the language
            of sophistication, refinement, and unrivaled style.
          </p>
        </div>
      </div>

      {/* Second section */}
      <div style={{ display: "flex", flexDirection: "row-reverse", gap: "20px", marginBottom: "40px", flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ flex: "1 1 300px" }}>
          <img 
            src={home2} 
            alt="High Fashion Editorial" 
            style={{ width: "100%", borderRadius: "12px", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }} 
          />
        </div>
        <div style={{ flex: "2 1 400px", fontSize: "18px", lineHeight: "1.6" }}>
          <p style={{ margin: "0 0 20px 0" }}>
            Discover timeless silhouettes and bold statements crafted for those who
            demand distinction. Experience fashion that isn’t just worn — but embodied.
          </p>
          <p style={{ margin: "0 0 20px 0" }}>
            Explore our exclusive collections and immerse yourself in a world where fashion
            transcends clothing and becomes a statement of identity, confidence, and luxury.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;