'use client';

import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade';

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({duration: 7, loop: true}, [Autoplay(), Fade()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"><img
          src="https://images.squarespace-cdn.com/content/v1/5bd72d07ebfc7f4a2b44a896/1639070768773-2WZXS8KX21VCLOFER9IH/-q18jlvQ.jpeg"
        /></div>
        <div className="embla__slide">
            <img src='https://images.squarespace-cdn.com/content/v1/5bd72d07ebfc7f4a2b44a896/1639070653996-0360K28B9C6LGMNTXFTM/_DSC3193.JPG?format=1500w' />
        </div>
      </div>
    </div>
  )
}

export default Carousel
