import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import contactImg from "../assets/contact.jpg";

const Contact = () => {
  const { setVisitorName } = useContext(AppContext);
  const [inputName, setInputName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputName) setVisitorName(inputName);
    alert("Your VIP inquiry has been received. We will respond with curated recommendations.");
    setInputName("");
    setMessage("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "32px", fontWeight: "600" }}>
        Contact / VIP Consultation
      </h2>

      {/* Image + intro */}
      <div style={{ display: "flex", flexDirection: "row", gap: "20px", marginBottom: "40px", flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ flex: "1 1 300px" }}>
          <img 
            src={contactImg} 
            alt="Elegant Fashion Contact" 
            style={{ width: "100%", borderRadius: "12px", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }} 
          />
        </div>
        <div style={{ flex: "2 1 400px", fontSize: "18px", lineHeight: "1.6" }}>
          <p style={{ margin: "0 0 20px 0" }}>
            For bespoke consultations, exclusive requests, or access to upcoming collections,
            please complete the form below. Couture Atelier is committed to personalized luxury experiences.
          </p>
        </div>
      </div>

      {/* Form section */}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", marginBottom: "40px" }}>
        <input
          type="text"
          placeholder="Your Name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          style={{ padding: "12px", fontSize: "16px", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <textarea
          placeholder="Your Inquiry or Request"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ padding: "12px", fontSize: "16px", borderRadius: "8px", border: "1px solid #ccc", minHeight: "120px" }}
        />
        <button 
          type="submit" 
          style={{ padding: "12px", fontSize: "16px", borderRadius: "8px", backgroundColor: "#000", color: "#fff", cursor: "pointer", fontWeight: "600" }}
        >
          Send VIP Inquiry
        </button>
      </form>

      {/* Contact info */}
      <div style={{ marginBottom: "40px", fontSize: "18px", lineHeight: "1.4" }}>
        <h3 style={{ marginBottom: "10px" }}>Contact Information</h3>
        <p style={{ margin: "4px 0" }}><strong>Email:</strong> info@coutureatelier.com</p>
        <p style={{ margin: "4px 0" }}><strong>Phone / WhatsApp:</strong> +1 (555) 123-4567</p>
        <p style={{ margin: "4px 0" }}><strong>Studio Address:</strong> 123 Fashion Ave, New York, NY, USA</p>
        <p style={{ margin: "4px 0" }}><strong>Opening Hours:</strong> Mon–Fri: 10am–6pm, Sat: 11am–4pm</p>
      </div>

      {/* Social media */}
      <div style={{ marginBottom: "40px", fontSize: "18px", lineHeight: "1.4" }}>
        <h3 style={{ marginBottom: "10px" }}>Follow Us</h3>
        <p style={{ margin: "4px 0" }}>
          Instagram: <a href="https://instagram.com/coutureatelier" target="_blank" rel="noopener noreferrer">@coutureatelier</a>
        </p>
        <p style={{ margin: "4px 0" }}>
          Pinterest: <a href="https://pinterest.com/coutureatelier" target="_blank" rel="noopener noreferrer">@coutureatelier</a>
        </p>
        <p style={{ margin: "4px 0" }}>
          TikTok: <a href="https://tiktok.com/@coutureatelier" target="_blank" rel="noopener noreferrer">@coutureatelier</a>
        </p>
      </div>

      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        After submitting, your name will appear on Home and About pages, enhancing your
        personalized experience.
      </p>
    </div>
  );
};

export default Contact;