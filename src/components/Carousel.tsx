"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ duration: 7, loop: true }, [
    Autoplay(),
    Fade(),
  ]);
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/youmeandhe-b605e.appspot.com/o/_DSC6999.jpg?alt=media&token=dbd793ed-9c57-44df-94fa-bced4e1d41f5",
    "https://firebasestorage.googleapis.com/v0/b/youmeandhe-b605e.appspot.com/o/_DSC4123.jpg?alt=media&token=b31f302e-fbbb-47d7-ae11-dd8f73e122a3"
  ];

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((image) => (
          <div key={image} className="embla__slide">
            <img src={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
