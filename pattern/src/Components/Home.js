import React, { useState } from "react";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://picsum.photos/200/300?image=10",
    "https://picsum.photos/200/300?image=20",
    "https://picsum.photos/200/300?image=30"
  ];

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length);
  };

  return (
    <div>
      <img src={images[currentImageIndex]} alt="slideshow" />
      <button onClick={prevImage}>Prev</button>
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default Home;

  