import React, { useState } from "react";

const Tabs = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleActive = (material) => {
    setIsActive(material);
  };

  return (
    <div className="tabsContainer">
      <div className="tabs">
        <buttons className="btnsWithIcons">
          <img src="/icons/watchSize.svg" alt="watch-size" />
          Size
        </buttons>
        <buttons
          className={`btnsWithIcons case-button ${
            isExpanded ? "expanded" : ""
          }`}
          onClick={() => setIsExpanded(true)}
        >
          <img src="/icons/case.svg" alt="watch-case" />
          {isExpanded ? (
            <div className="caseTypes">
              <p
                onClick={() => handleActive("Aluminum")}
                className={isActive === "Aluminum" ? "watchCaseTypeActive" : ""}
              >
                Aluminum
              </p>
              <p
                onClick={() => handleActive("Titanium")}
                className={isActive === "Titanium" ? "watchCaseTypeActive" : ""}
              >
                Titanium
              </p>
            </div>
          ) : (
            "Case"
          )}
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
