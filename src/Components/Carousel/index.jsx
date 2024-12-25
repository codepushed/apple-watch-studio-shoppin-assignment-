import React from "react";

import { watches } from "../../Static";

const Carousel = () => {

  return (
    <div className="carouselContainer">
      <div className="shrink">
        <div className="watchStudioDial">
          <img src="/assets/watch-band.jpeg" alt="watch-dial" />
        </div>

        <div className="carouselWatchCaseContainer">
          {watches && watches?.map((item, index) => (
            // <div className="watchStudioCase" key={index}>
              <img src={item?.img} alt="watch-case" />
            //  </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
