import "./Panel.scss";
import backArrow from "../assets/arrow_back.png";
import forwardArrow from "../assets/arrow_forward.png";
import { useState } from "react";

function ImagePanel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the previous image
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  // Move to the next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="panel">
      <img
        src={pictures[currentIndex]}
        className="panel__image"
        alt={`Rental image ${currentIndex + 1}`}
      />
      <span className="panel__number">
        {currentIndex + 1}/{pictures.length}
      </span>
      {pictures.length > 1 && (
        <>
          <button className="panel__button left" onClick={handlePrev}>
            <img src={backArrow} alt="Previous" />
          </button>
          <button className="panel__button right" onClick={handleNext}>
            <img src={forwardArrow} alt="Next" />
          </button>
        </>
      )}
    </section>
  );
}

export default ImagePanel;
