import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Modal from "../Modal";

const AppBar = ({ showOptions }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal open={open} handleClose={handleClose} />
      <div className="appBarContainer">
        <div className="appBarImgContainer">
          <img src="/icons/apple-watch-design-studio-logo.jpeg" alt="logo" />
        </div>

        <div
          onClick={() => setOpen(true)}
          className={showOptions ? "appBarShow" : "appBarHide"}
        >
          <p className="appBarCollections">
            Collections <KeyboardArrowDownIcon style={{ color: "#1d1d1f" }} />
          </p>
        </div>

        <div
          className={
            showOptions
              ? "appBarShow watchStudioBtn appBarSaveBtn fadeInEffect"
              : "appBarHide"
          }
        >
          <button className="appleBlueBtn">Save</button>
        </div>
      </div>
    </>
  );
};

export default AppBar;
