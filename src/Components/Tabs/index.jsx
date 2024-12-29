import React, { useEffect, useState } from "react";
import { getBandsType } from "@/helpers";
import { watchBands } from "@/Static";

const Tabs = ({ handleCases, toggleSize, setToggleSize, isFading, setTab, handleSizes }) => {
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
    handleCases(); //neeed fixx here
    setTab(1);
  };

  const handleBandClicked = () => {
    setIsExpanded(false);
    setListBands(true);
    setTab(2);
    // handleCases();
  };

  useEffect(() => {
    setTimeout(() => {
      setToggleSize(false);
    }, 1000);
  }, []);

  const handleSizeTab = () => {
    setTab(0);
    setToggleSize(true);
    handleCases();
  };

  return (
    <div className="tabsContainer">
      <div className="tabs">
        <buttons
          className={`btnsWithIcons case-button ${
            toggleSize ? "expandedSize" : ""
          }`}
          onClick={() => handleSizeTab()}
        >
          <img src="/icons/watchSize.svg" alt="watch-size" />
          {toggleSize && !isFading ? (
            <div className="caseTypes">
              <p
                onClick={() => handleActive("42mm")}
                className={isActive === "42mm" ? "watchCaseTypeActive" : ""}
              >
                42mm
              </p>
              <p
                onClick={() => handleActive("46mm")}
                className={isActive === "46mm" ? "watchCaseTypeActive" : ""}
              >
                46mm
              </p>
            </div>
          ) : (
            "Size"
          )}
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
