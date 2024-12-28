import React, { useRef, useEffect, useState } from "react";

import { sideView, watchBands } from "../../Static";
import { getLimitedEditions, getMatchingSideViews } from "@/helpers";

const BandCarousel = ({ setBand, centeredDial, band }) => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      setCanScrollLeft(carousel.scrollLeft > 0);
      setCanScrollRight(
        carousel.scrollLeft < carousel.scrollWidth - carousel.offsetWidth
      );
    }
  };

  // console.log(getMatchingSideViews(centeredDial, watchBands?.editions, sideView));

  // const applyMagneticPull = () => {
  //   if (carouselRef.current) {
  //     const carousel = carouselRef.current;
  //     const itemWidth = 400;
  //     const scrollPosition = carousel.scrollLeft;
  //     const visibleWidth = carousel.offsetWidth;

  //     const nearestIndex = Math.round(scrollPosition / itemWidth);
  //     const totalItems = watches.length;
  //     const clampedIndex = Math.max(0, Math.min(nearestIndex, totalItems - 1));
  //     const targetScrollPosition =
  //     clampedIndex * itemWidth - (visibleWidth / 2 - itemWidth / 2);

  //     carousel.scrollTo({
  //       left: targetScrollPosition,
  //       behavior: "smooth",
  //     });
  //     setCenteredDial(watches[clampedIndex]);
  //   }
  // };

  // let scrollTimeout;

  // const handleScrollStop = () => {
  //   clearTimeout(scrollTimeout);
  //   scrollTimeout = setTimeout(() => {
  //     applyMagneticPull();
  //   }, 150);
  // };

  // useEffect(() => {
  //   if (carouselRef.current) {
  //     const carousel = carouselRef.current;

  //     const onScroll = () => handleScrollStop();
  //     carousel.addEventListener("scroll", onScroll);

  //     return () => {
  //       carousel.removeEventListener("scroll", onScroll);
  //     };
  //   }
  // }, []);

  const scrollToDirection = (direction) => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const itemWidth = carousel.offsetWidth / 2;
      const scrollPosition = carousel.scrollLeft;
      const totalItems = watchBands.length;

      let targetIndex =
        direction === "left"
          ? Math.floor(scrollPosition / itemWidth) - 1
          : Math.floor(scrollPosition / itemWidth) + 1;

      targetIndex = Math.max(0, Math.min(totalItems - 1, targetIndex));

      const targetScrollPosition =
        targetIndex * itemWidth - (carousel.offsetWidth / 2 - itemWidth / 2);

      carousel.scrollTo({
        left: targetScrollPosition,
        behavior: "smooth",
      });

      setBand(watchBands[targetIndex]);
    }
  };

  const handleDialClick = (index) => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const itemWidth = carousel.offsetWidth / 2;
      const targetScrollPosition =
        index * itemWidth - (carousel.offsetWidth / 2 - itemWidth / 2);

      carousel.scrollTo({
        left: targetScrollPosition,
        behavior: "smooth",
      });

      setCenteredDial(watchBands[index]);
    }
  };

  const scrollToNearestWithBounce = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const itemWidth = 400;
      const scrollPosition = carousel.scrollLeft;
      const nearestIndex = Math.round(scrollPosition / itemWidth);
      const visibleWidth = carousel.offsetWidth;
      const maxScrollPosition =
        (watchBands.length - 1) * itemWidth -
        (visibleWidth / 2 - itemWidth / 2);

      const targetScrollPosition = nearestIndex * itemWidth;

      const clampedScrollPosition = Math.min(
        targetScrollPosition,
        maxScrollPosition
      );

      carousel.scrollTo({
        left: clampedScrollPosition,
        behavior: "smooth",
      });

      setBand(watchBands[nearestIndex]);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.addEventListener("scroll", updateScrollButtons);
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const itemWidth = carousel.offsetWidth / 3;
      const centerIndex = Math.floor(watchBands.length / 2);
      const targetScrollPosition = centerIndex * itemWidth;

      carousel.scrollTo({
        left: targetScrollPosition - carousel.offsetWidth / 2,
        behavior: "smooth",
      });

      setBand(watchBands[centerIndex]);
    }
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const itemWidth = 400;
      const containerWidth = carousel.offsetWidth;

      const padding = containerWidth / 2 - itemWidth / 2;
      carousel.style.paddingLeft = `${padding}px`;
      carousel.style.paddingRight = `${padding}px`;
    }
  }, []);

  useEffect(() => {
    const updatePadding = () => {
      if (carouselRef.current) {
        const carousel = carouselRef.current;
        const itemWidth = 400;
        const containerWidth = carousel.offsetWidth;

        const padding = containerWidth / 2 - itemWidth / 2;
        carousel.style.paddingLeft = `${padding}px`;
        carousel.style.paddingRight = `${padding}px`;
      }
    };

    updatePadding();

    window.addEventListener("resize", updatePadding);

    return () => {
      window.removeEventListener("resize", updatePadding);
    };
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const itemWidth = 400;
      carousel.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  }, []);


  return (
    <div className="carouselContainer">
      <div className="bandImage" style={{ zIndex: 99 }}>
        {/* <img src={centeredDial.img} alt="watch-band" /> */}
        <img
          src={
            band?.editions
              ? getLimitedEditions(band?.editions, centeredDial)
              : centeredDial.img
          }
          alt="watch-band"
        />
      </div>

      <div className="carouselWrapper">
        <button
          className="carouselButton left"
          onClick={() => scrollToDirection("left")}
          style={{ display: canScrollLeft ? "block" : "none" }}
        >
          <img src="/icons/leftArrow.svg" alt="left-arrow" />
        </button>
        <div
          className="carousel"
          ref={carouselRef}
          onTouchEnd={scrollToNearestWithBounce}
          onMouseUp={scrollToNearestWithBounce}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {watchBands.map((item, index) => (
            <div
              className="dialItem"
              key={index}
              style={{ zIndex: 0 }}
              //   onClick={() => handleDialClick(index)}
            >
              <img src={item.img} alt={item.name} />
            </div>
          ))}
        </div>
        <button
          className="carouselButton right"
          onClick={() => scrollToDirection("right")}
          style={{ display: canScrollRight ? "block" : "none" }}
        >
          <img src="/icons/rightArrow.svg" alt="right-arrow" />
        </button>
      </div>
    </div>
  );
};

export default BandCarousel;
