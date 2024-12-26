import { getBandsByType, getBandsType } from "@/helpers";
import { watchBands } from "@/Static";
import React, { useState } from "react";

const Tabs = ({ handleCases }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [listBands, setListBands] = useState(false);
  const [selectedWatchBands, setSelectedWatchBands] = useState({
    type: "Sport Band",
  });

  const watchBandTypes = getBandsType(watchBands);

  const handleActive = (material) => {
    setIsActive(material);
  };

  const handleWatchBands = (item) => {
    setSelectedWatchBands(item);
  };

  const handleWatchCase = () => {
    setIsExpanded(true);
    setListBands(false);
    handleCases();
  };

  const handleBandClicked = () => {
    setIsExpanded(false);
    setListBands(true);
  };

  // console.log(getBandsByType(watchBands, selectedWatchBands?.type))

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
          onClick={() => handleWatchCase()}
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
        <buttons
          className={`btnsWithIcons bandTypes case-button ${
            listBands ? "expandedList" : ""
          }`}
          onClick={() => handleBandClicked()}
        >
          <img src="/icons/bands.svg" alt="watch-bands" />

          {listBands
            ? watchBandTypes?.map((item, index) => (
                <p
                  key={index}
                  onClick={() => handleWatchBands(item)}
                  className={
                    selectedWatchBands?.type === item?.type
                      ? "watchCaseTypeActive"
                      : ""
                  }
                >
                  {item?.type}
                </p>
              ))
            : "Band"}
        </buttons>
      </div>
    </div>
  );
};

export default Tabs;
