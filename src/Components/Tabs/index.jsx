import React, { useState } from "react";

const Tabs = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="tabsContainer">
      <div className="tabs">
        <buttons className="btnsWithIcons">
          <img src="/icons/watchSize.svg" alt="watch-size" />
          Size
        </buttons>
        <buttons
          className={`btnsWithIcons case-button ${isExpanded ? "expanded" : ""}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <img src="/icons/case.svg" alt="watch-case" />
          {isExpanded ? "Aluminum Titanium" : "Case"}
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
