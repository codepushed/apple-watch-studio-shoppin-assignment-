import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Modals from "@mui/material/Modal";

import { saveModalstyle } from "../../helpers/basic";

const SaveModal = ({ isSaveModalOpen, handleSaveModalClose }) => {
  return (
    <div>
      <Modals
        open={isSaveModalOpen}
        onClose={handleSaveModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={saveModalstyle}>
          <div>
            <div className="copyToClipboardContainer">
              <button className="appleBlueBtn copyToClipboardButton">
                <img src="/icons/icons8-link-96.png" alt="link" /> Copy to
                clipboard
              </button>
            </div>
            <Divider />

            <div className="shareIconsContainer">
              <div className="shareIcons">
                <img src="/icons/icons8-x-100.png" alt="x" />
              </div>

              <div className="shareIcons">
                <img src="/icons/icons8-threads-96.png" alt="threads" />
              </div>

              <div className="shareIcons">
                <img src="/icons/icons8-instagram-100.png" alt="instagram" />
              </div>

              <div className="shareIcons">
                <img src="/icons/icons8-linkedin-100.png" alt="linkedin" />
              </div>
            </div>
          </div>
        </Box>
      </Modals>
    </div>
  );
};

export default SaveModal;
