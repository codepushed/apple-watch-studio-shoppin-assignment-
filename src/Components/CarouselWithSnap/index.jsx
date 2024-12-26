import React, { useRef, useEffect } from "react";

import { watches } from "../../Static";

const CarouselWithSnap = ({ setCenteredDial }) => {
  const carouselRef = useRef(null);

  const calculateCenterDial = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const scrollPosition = carousel.scrollLeft;
      const itemWidth = carousel.offsetWidth / 3;

      const nearestDial = null;
      const minDistance = Infinity;

      const items = carousel.querySelectorAll(".dialItem");

      items.forEach((item, index) => {
        const itemPosition = item.offsetLeft;
        const distanceToCenter = Math.abs(
          itemPosition - scrollPosition - itemWidth
        );

        if (distanceToCenter < minDistance) {
          minDistance = distanceToCenter;
          nearestDial = watches[index];
        }
      });

      setCenteredDial(nearestDial);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.addEventListener("scroll", calculateCenterDial);
    }
    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("scroll", calculateCenterDial);
      }
    };
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const itemWidth = carousel.offsetWidth / 3;
      const centerIndex = Math.floor(watches.length / 2);
      const targetScrollPosition = centerIndex * itemWidth;

      carousel.scrollTo({
        left: targetScrollPosition - carousel.offsetWidth / 2,
        behavior: "smooth",
      });
    }
  }, []);

  const scrollToNearestWithBounce = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const scrollPosition = carousel.scrollLeft;
      const itemWidth = carousel.offsetWidth / 3;
      const nearestIndex = Math.round(scrollPosition / itemWidth);

      const targetScrollPosition = nearestIndex * itemWidth;

      const overshoot = targetScrollPosition > scrollPosition ? 20 : -20;

      setCenteredDial(watches[nearestIndex]);

      carousel.scrollTo({
        left: targetScrollPosition + overshoot,
        behavior: "smooth",
      });

      setTimeout(() => {
        carousel.scrollTo({
          left: targetScrollPosition,
          behavior: "smooth",
        });
      }, 300);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const itemWidth = carousel.offsetWidth / 3;
      const centerIndex = 2;
      const targetScrollPosition = centerIndex * itemWidth;

      carousel.scrollTo({
        left: targetScrollPosition - carousel.offsetWidth / 2,
        behavior: "smooth",
      });

      setCenteredDial(watches[centerIndex]);
    }
  }, []);

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
      <div className="bandImage">
        <img src="/assets/watch-band.jpeg" alt="watch-band" />
      </div>

      <div className="carouselWrapper">
        <button
          className="carouselButton left"
          onClick={() => scrollToDirection("left")}
        >
          <img src="/icons/leftArrow.svg" alt="left-arrow" />
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
          <img src="/icons/rightArrow.svg" alt="right-arrow" />
        </button>
      </div>
    </div>
  );
};

export default CarouselWithSnap;
