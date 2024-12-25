import React from "react";

const Tabs = () => {
  return (
    <div className="tabsContainer">
      <div className="tabs">
        <buttons className="btnsWithIcons">
          <img src="/icons/watchSize.svg" alt="watch-size" />
          Size
        </buttons>
        <buttons className="btnsWithIcons">
          <img src="/icons/case.svg" alt="watch-case" />
          Case
        </buttons>
        <buttons className="btnsWithIcons">
          <img src="/icons/bands.svg" alt="watch-bands" />
          Band
        </buttons>
      </div>
    </div>
  );
};

export default Tabs;

{
  /* <img src="/icons/watchSize.svg" /> */
}
