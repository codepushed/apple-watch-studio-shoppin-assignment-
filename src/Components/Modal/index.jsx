import React, { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Modals from "@mui/material/Modal";

import { collections } from "../../Static";

const style = {
  position: "absolute",
  top: "17%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 280,
  bgcolor: "background.paper",
  padding: "0px 26px",
  borderRadius: "25px",
};

const Modal = ({ open, handleClose }) => {
  const [isActive, setIsActive] = useState(0);

  const handleCollectionActive = (index) => {
    setIsActive(index);
  };

  return (
    <div>
      <Modals
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {collections?.map((item, index) => (
            <div key={index}>
              <Typography
                id="modal-modal-title"
                className={
                  isActive === index
                    ? "modalTypography collectionActive"
                    : "modalTypography"
                }
                onClick={() => handleCollectionActive(index)}
              >
                {item}
              </Typography>
              {index !== 2 && <Divider />}
            </div>
          ))}
        </Box>
      </Modals>
    </div>
  );
};

export default Modal;
