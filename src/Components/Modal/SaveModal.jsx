import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Modals from "@mui/material/Modal";

import { saveModalstyle } from "../../helpers/basic";
import { CopyToClipboard } from "../../helpers";

const SaveModal = ({ isSaveModalOpen, handleSaveModalClose }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = () => {
    const copy = CopyToClipboard();
    if (copy) {
      setIsCopied(true);
    }
  };

  useEffect(() => {
    setInterval(() => {
      setIsCopied(false);
    }, 1000);
  }, [isCopied]);

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
              <button
                className="appleBlueBtn copyToClipboardButton"
                onClick={() => handleCopyToClipboard()}
              >
                <img src="/icons/icons8-link-96.png" alt="link" />
                {isCopied ? "Copied" : "Copy to clipboard"}
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
