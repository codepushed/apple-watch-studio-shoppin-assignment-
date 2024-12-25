import React, { useState } from "react";

const WatchStudioHero = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  const handleButtonClick = () => {
    setIsShrunk(true);
  };

  return (
    <div className="watchStudioHeroContainer">
      <div className="watchStudioHeroContent">
        <div className="watchStudioHeroTypography">
          <h3>Apple Watch Studio</h3>

          <span className="watchStudioHeroHeading">
            <h1>Choose a case.</h1>
            <h1>Pick a band.</h1>
            <h1>Create your own style.</h1>
          </span>

          {!isShrunk && (
            <div className="watchStudioBtn">
              <button
                className="appleBlueBtn"
                onClick={() => handleButtonClick()}
              >
                Get started
              </button>
            </div>
          )}
        </div>

        <div className={`watchStudioHeroImg ${isShrunk ? "shrink" : ""}`}>
          <div className="watchStudioDial">
            <img src="/assets/watch-band.jpeg" alt="watch-dial" />
          </div>

          <div className="watchStudioCase">
            <img src="/assets/watch-case.png" alt="watch-case" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchStudioHero;
