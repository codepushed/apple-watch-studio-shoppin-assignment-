import React, { useState } from "react";

import CarouselWithSnap from "../CarouselWithSnap";
import Tabs from "../Tabs";

const WatchStudioHero = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isTransitionComplete, setIsTransitionComplete] = useState(false);
  const [centeredDial, setCenteredDial] = useState(null);

  const handleButtonClick = () => {
    setIsShrunk(true);
  };

  const handleTransitionEnd = () => {
    setIsTransitionComplete(true);
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
          onTransitionEnd={handleTransitionEnd}
        >
          <div className="watchStudioDial">
            <img src="/assets/watch-band.jpeg" alt="watch-dial" />
          </div>

          <div className="watchStudioCase">
            <img src="/assets/watch-case.png" alt="watch-case" />
          </div>
        </div>
      )}

      {isTransitionComplete && (
        <>
          <CarouselWithSnap setCenteredDial={setCenteredDial} />
          <div className="watchDetailsContainer">
            <p className="watchDetailsView">Side view</p>
            <p className="watchDetailsName">
              Apple Watch {centeredDial?.model}
            </p>
            <p className="watchDetailsMore">
              {centeredDial?.size} <span>mm</span> {centeredDial?.model}{" "}
              {centeredDial?.name}
              <span>with</span>
              {centeredDial?.band}
            </p>
            <p className="watchDetailsPrice">From ${centeredDial?.price}</p>
          </div>
          <Tabs />
        </>
      )}
    </div>
  );
};

export default WatchStudioHero;
