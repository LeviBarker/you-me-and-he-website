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
    "https://images.squarespace-cdn.com/content/v1/5bd72d07ebfc7f4a2b44a896/1639070768773-2WZXS8KX21VCLOFER9IH/-q18jlvQ.jpeg",
    "https://images.squarespace-cdn.com/content/v1/5bd72d07ebfc7f4a2b44a896/1639070653996-0360K28B9C6LGMNTXFTM/_DSC3193.JPG",
    "https://images.squarespace-cdn.com/content/v1/5bd72d07ebfc7f4a2b44a896/1717978264922-KBPPY9G221KAU0CGHXW8/_dsc5749_2.jpeg",
    "https://images.squarespace-cdn.com/content/v1/5bd72d07ebfc7f4a2b44a896/1609954239732-OUNLRH0T5CJRYX4Z1SOP/_DSC4580.JPG"
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
