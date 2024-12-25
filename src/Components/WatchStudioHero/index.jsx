import React, { useState } from "react";

import Tabs from "../Tabs";
import Carousel from "../Carousel";
import CarouselWithSnap from "@/CarouselWithSnap";

const WatchStudioHero = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isTransitionComplete, setIsTransitionComplete] = useState(false);

  const handleButtonClick = () => {
    setIsShrunk(true);
  };

  const handleTransitionEnd = () => {
    setIsTransitionComplete(true); // Mark the transition as complete when it ends
  };

  return (
    <div className="watchStudioHeroContainer">
      {!isShrunk && (
        <div className="watchStudioHeroContent">
          <div className="watchStudioHeroTypography">
            <h3>Apple Watch Studio</h3>

            <span className="watchStudioHeroHeading">
              <h1>Choose a case.</h1>
              <h1>Pick a band.</h1>
              <h1>Create your own style.</h1>
            </span>

            <div className="watchStudioBtn">
              <button
                className="appleBlueBtn"
                onClick={() => handleButtonClick()}
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      )}

      {!isTransitionComplete && (
        <div
          className={`watchStudioHeroImg ${isShrunk ? "shrink" : ""}`}
          onTransitionEnd={handleTransitionEnd} // Listen for the transition end
        >
          <div className="watchStudioDial">
            <img src="/assets/watch-band.jpeg" alt="watch-dial" />
          </div>

          <div className="watchStudioCase">
            <img src="/assets/watch-case.png" alt="watch-case" />
          </div>
        </div>
      )}

      {isTransitionComplete && <CarouselWithSnap />}
    </div>
  );
};

export default WatchStudioHero;
