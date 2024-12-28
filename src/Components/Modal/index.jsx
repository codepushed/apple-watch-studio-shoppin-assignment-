import React, { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Modals from "@mui/material/Modal";

import { collections } from "../../Static";
import { collectionModalStyle } from "@/helpers/basic";

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
        <Box sx={collectionModalStyle}>
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
