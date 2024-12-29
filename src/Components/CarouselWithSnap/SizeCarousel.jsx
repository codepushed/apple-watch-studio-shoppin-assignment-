import React, { useEffect, useRef } from "react";

const watches = [
  {
    band: "/assets/watch-band.jpeg",
    dial: "/assets/watch-case.png",
    size: "small",
  },
  {
    band: "/assets/watch-band.jpeg",
    dial: "/assets/watch-case.png",
    size: "big",
  },
];

const WatchCarousel = () => {
  const carouselRef = useRef(null);

  const scrollTo = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      if (direction === "left") {
        carouselRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else if (direction === "right") {
        carouselRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const containerWidth = carousel.offsetWidth;
      const itemWidth = 300;
      const totalWidth = itemWidth * watches.length + 85 * (watches.length - 1);

      const centerScrollPosition = (totalWidth - containerWidth) / 2;
      carousel.scrollLeft = centerScrollPosition;
    }
  }, []);

  const handleClick = (index) => {
    if (carouselRef.current) {
      const itemWidth = 400;
      const containerWidth = carouselRef.current.offsetWidth;
      const itemPosition = index * (itemWidth + 85);
      const centerOffset = (containerWidth - itemWidth) / 2;

      carouselRef.current.scrollTo({
        left: itemPosition - centerOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <button
        className="carouselButton Sizeleft"
        onClick={() => scrollTo("left")}
      >
        <img src="/icons/leftArrow.svg" alt="left-arrow" />
      </button>

      <button
        className="carouselButton Sizeright"
        onClick={() => scrollTo("right")}
      >
        <img src="/icons/rightArrow.svg" alt="right-arrow" />
      </button>

      <div className="watchContainer" ref={carouselRef}>
        {watches.map((watch, index) => (
          <div
            key={index}
            className={`watchItem ${watch.size}`}
            onClick={() => handleClick(index)}
          >
            <div className="bandImages">
              <img src={watch.band} alt={`Watch Band ${index + 1}`} />
            </div>
            <div className="dialImage">
              <img src={watch.dial} alt={`Watch Dial ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchCarousel;
