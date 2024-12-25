import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Modal from "../Modal";

const AppBar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal open={open} handleClose={handleClose} />
      <div className="appBarContainer">
        <div className="appBarImgContainer">
          <img src="/icons/apple-watch-design-studio-logo.jpeg" alt="logo" />
        </div>

        <div onClick={() => setOpen(true)}>
          <p className="appBarCollections">
            Collections <KeyboardArrowDownIcon style={{ color: "#1d1d1f" }} />
          </p>
        </div>

        <div className="watchStudioBtn appBarSaveBtn">
          <button className="appleBlueBtn">Save</button>
        </div>
      </div>
    </>
  );
};

export default AppBar;
