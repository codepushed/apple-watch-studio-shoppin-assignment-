import React, { useRef } from "react";

import { watches } from "../../Static";

const CarouselWithBounce = () => {
  const carouselRef = useRef(null);

  const scrollToNearestWithBounce = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const scrollPosition = carousel.scrollLeft;
      const itemWidth = carousel.offsetWidth / 3; // Assuming 3 items fit in the view
      const nearestIndex = Math.round(scrollPosition / itemWidth);

      const targetScrollPosition = nearestIndex * itemWidth;

      // Temporarily overshoot for bounce effect
      const overshoot = targetScrollPosition > scrollPosition ? 20 : -20;

      carousel.scrollTo({
        left: targetScrollPosition + overshoot,
        behavior: "smooth",
      });

      setTimeout(() => {
        carousel.scrollTo({
          left: targetScrollPosition,
          behavior: "smooth",
        });
      }, 300); // Delay to snap back
    }
  };

  const scrollToDirection = (direction) => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const itemWidth = carousel.offsetWidth / 3;
      const scrollAmount = direction === "left" ? -itemWidth : itemWidth;

      carousel.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="carouselContainer">
      {/* Background Band */}
      <div className="bandImage">
        <img src="/assets/watch-band.jpeg" alt="watch-band" />
      </div>

      {/* Carousel */}
      <div className="carouselWrapper">
        <button
          className="carouselButton left"
          onClick={() => scrollToDirection("left")}
        >
          {"<"}
        </button>
        <div
          className="carousel"
          ref={carouselRef}
          onTouchEnd={scrollToNearestWithBounce}
          onMouseUp={scrollToNearestWithBounce}
        >
          {watches.map((item, index) => (
            <div className="dialItem" key={index}>
              <img src={item.img} alt={item.name} />
            </div>
          ))}
        </div>
        <button
          className="carouselButton right"
          onClick={() => scrollToDirection("right")}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default CarouselWithBounce;
