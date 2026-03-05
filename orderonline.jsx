import { useState } from "react";

const OrderOnline = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [order, setOrder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !order) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    alert(`Thank you, ${name}! Your order request:\n\n"${order}"\n\nhas been received. Our team will contact you shortly.`);
    setName("");
    setEmail("");
    setOrder("");
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#000", // black page background
      padding: "20px",
      fontFamily: "'Arial', sans-serif"
    }}>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: "#000", // form blends with page
        padding: "40px",
        borderRadius: "12px",
        maxWidth: "500px",
        width: "100%",
        boxShadow: "0 8px 20px rgba(255,105,180,0.2)", // subtle pink glow
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        color: "#fff" // white text
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "10px", fontWeight: "700", color: "#ff69b4" }}>
          Place Your Order
        </h2>
        <p style={{ textAlign: "center", marginBottom: "20px", color: "#fff" }}>
          Fill in your details and tell us what you want — we’ll take care of the rest.
        </p>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "14px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ff69b4",
            backgroundColor: "#000",
            color: "#fff",
            outline: "none",
          }}
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "14px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ff69b4",
            backgroundColor: "#000",
            color: "#fff",
            outline: "none",
          }}
        />

        <textarea
          placeholder="What would you like to order?"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          style={{
            padding: "14px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ff69b4",
            backgroundColor: "#000",
            color: "#fff",
            outline: "none",
            minHeight: "120px",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "14px",
            fontSize: "16px",
            borderRadius: "8px",
            backgroundColor: "#ff69b4",
            color: "#000",
            cursor: "pointer",
            fontWeight: "700",
            transition: "background 0.3s",
          }}
        >
          Submit Order
        </button>

        <p style={{ textAlign: "center", fontSize: "14px", color: "#fff", marginTop: "10px" }}>
          We will contact you directly to confirm your order and provide VIP assistance.
        </p>
      </form>
    </div>
  );
};

export default OrderOnline;