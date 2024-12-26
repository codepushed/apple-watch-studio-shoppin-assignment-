import React, { useState } from "react";

import CarouselWithSnap from "../CarouselWithSnap";
import Tabs from "../Tabs";

import { watches } from "../../Static";

const WatchStudioHero = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isTransitionComplete, setIsTransitionComplete] = useState(false);
  const [centeredDial, setCenteredDial] = useState(watches[2]);
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const handleButtonClick = () => {
    setIsShrunk(true);
  };

  const handleTransitionEnd = () => {
    setIsTransitionComplete(true);
  };

  const handleCases = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsFading(false);
      setIsCarouselVisible(true);
    }, 1000);
  };

  return (
    <div className="watchStudioHeroContainer">
      {!isShrunk && !isFading && (
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

      {!isCarouselVisible && (
        <div
          className={`watchStudioHeroImg ${isShrunk ? "shrink" : ""}`}
          onTransitionEnd={handleTransitionEnd}
        >
          <div className="watchStudioDial">
            <img
              src="/assets/watch-band.jpeg"
              alt="watch-dial"
              className={isFading ? "fadeEffect" : ""}
            />
          </div>

          <div className="watchStudioCase">
            <img
              src={centeredDial?.img}
              alt="watch-case"
              className={isFading ? "fadeEffect" : ""}
            />
          </div>
        </div>
      )}

      {isTransitionComplete && !isFading && (
        <>
          {isCarouselVisible && (
            <CarouselWithSnap setCenteredDial={setCenteredDial} />
          )}

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

          <Tabs handleCases={handleCases} />
        </>
      )}
    </div>
  );
};

export default WatchStudioHero;
