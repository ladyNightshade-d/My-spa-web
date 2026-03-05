import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";

const About = () => {
  const { visitorName } = useContext(AppContext);

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "32px", fontWeight: "600" }}>
        About Couture Atelier
      </h2>

      {/* First section */}
      <div style={{ display: "flex", flexDirection: "row", gap: "20px", marginBottom: "40px", flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ flex: "1 1 300px" }}>
          <img
            src={about1}
            alt="Editorial Fashion Portrait"
            style={{ width: "100%", borderRadius: "12px", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
          />
        </div>
        <div style={{ flex: "2 1 400px", fontSize: "18px", lineHeight: "1.6" }}>
          <p style={{ margin: "0 0 20px 0" }}>
            Hello {visitorName}. Couture Atelier was born from a vision of luxurious authenticity.
            Founded by artisans with an uncompromising commitment to impeccable tailoring and
            refined aesthetics, our brand celebrates individuality through couture craftsmanship.
          </p>
        </div>
      </div>

      {/* Second section */}
      <div style={{ display: "flex", flexDirection: "row-reverse", gap: "20px", marginBottom: "40px", flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ flex: "1 1 300px" }}>
          <img
            src={about2}
            alt="Boutique Fashion"
            style={{ width: "100%", borderRadius: "12px", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
          />
        </div>
        <div style={{ flex: "2 1 400px", fontSize: "18px", lineHeight: "1.6" }}>
          <p style={{ margin: "0 0 20px 0" }}>
            Each piece in our collection is meticulously curated, representing heritage, innovation,
            and the essence of modern elegance. Couture Atelier is not fashion for the timid; it is
            fashion for the intentional, for those who define trends rather than follow them.
          </p>

          <p style={{ margin: "0 0 20px 0" }}>
            Our mission is to transform every outfit into an experience, allowing the wearer to exude
            confidence, sophistication, and unmatched luxury. Every stitch tells a story, every fabric
            carries a legacy, and every design embodies the artistry of our atelier.
          </p>

          <p style={{ margin: "0 0 20px 0" }}>
            Beyond fashion, Couture Atelier is a celebration of creativity and individuality. We blend
            traditional techniques with contemporary vision, crafting pieces that are timeless yet
            daring, subtle yet unforgettable.
          </p>

          <p style={{ margin: "0 0 20px 0" }}>
            Welcome to Couture Atelier — a place where luxury meets authenticity, and where your personal
            style becomes a statement of art and elegance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;