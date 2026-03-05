import React from "react";

// Import images
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";

export default function Gallery() {
  const images = [
    { src: gallery1, caption: "Elegant evening gown with floral details" },
    { src: gallery2, caption: "Classic couture dress with gold accents" },
    { src: gallery3, caption: "Modern silhouette with delicate embroidery" },
    { src: gallery4, caption: "Bridal-inspired couture piece" },
    { src: gallery5, caption: "Chic and minimalist haute couture design" },
    { src: gallery6, caption: "Bold statement dress with dramatic flair" },
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Fashion Gallery</h1>
      <p style={{ textAlign: "center", marginBottom: "40px" }}>
        Explore our couture atelier’s finest pieces.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
        {images.map((item, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <img
              src={item.src}
              alt={`Couture piece ${index + 1}`}
              style={{
                width: "100%",      // fills the container width
                height: "auto",
                maxHeight: "900px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <p style={{ marginTop: "12px", fontStyle: "italic", fontSize: "18px" }}>
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}