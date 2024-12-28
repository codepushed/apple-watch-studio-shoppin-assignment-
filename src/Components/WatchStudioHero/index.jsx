import React, { useState } from "react";

import CarouselWithSnap from "../CarouselWithSnap";
import Tabs from "../Tabs";

import { watchBands, watches } from "../../Static";
import AppBar from "../AppBar";
import SizeCarousel from "../CarouselWithSnap/SizeCarousel";
import BandCarousel from "../CarouselWithSnap/BandCarousel";

const WatchStudioHero = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isTransitionComplete, setIsTransitionComplete] = useState(false);
  const [centeredDial, setCenteredDial] = useState(watches[2]);
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toggleSize, setToggleSize] = useState(false);
  const [watchView, setWatchView] = useState(false);
  const [tab, setTab] = useState(1);
  const [band, setBand] = useState(watchBands[35]);

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsShrunk(true);
    }, 1000);
  };

  const handleTransitionEnd = () => {
    setIsTransitionComplete(true);
    setToggleSize(true);
  };

  const handleCases = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsFading(false);
      setIsCarouselVisible(true);
    }, 1000);
  };

  return (
    <div>
      <AppBar showOptions={isShrunk} />
      <div className="watchStudioHeroContainer">
        {!isShrunk && !isFading && (
          <div className={isLoading ? "fadeEffect" : "watchStudioHeroContent"}>
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

        {!isCarouselVisible && tab === 1 && (
          <div
            className={`watchStudioHeroImg ${isShrunk ? "shrink" : ""}`}
            onTransitionEnd={handleTransitionEnd}
          >
            <div className="watchStudioDial">
              <img
                src={band?.img}
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
            {isCarouselVisible &&
              (tab === 0 ? (
                <SizeCarousel
                  centeredDial={centeredDial}
                  setCenteredDial={setCenteredDial}
                />
              ) : tab === 1 ? (
                <CarouselWithSnap setCenteredDial={setCenteredDial} />
              ) : (
                ""
              ))}

              

              {tab ===2 && <BandCarousel setBand={setBand} centeredDial={centeredDial} />}

            <div className="watchDetailsContainer">
              <p
                className="watchDetailsView"
                onClick={() => setWatchView(!watchView)}
              >
                {!watchView ? "Side view" : "Front view"}
              </p>
              <p className="watchDetailsName">
                Apple Watch {centeredDial?.model}
              </p>
              <p className="watchDetailsMore">
                {centeredDial?.size} <span>mm</span> {centeredDial?.model}
                {centeredDial?.name}
                <span>with</span>
                {centeredDial?.band}
              </p>
              <p className="watchDetailsPrice">From ${centeredDial?.price}</p>
            </div>

            <Tabs
              handleCases={handleCases}
              toggleSize={toggleSize}
              setToggleSize={setToggleSize}
              isFading={isFading}
              setTab={setTab}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default WatchStudioHero;
