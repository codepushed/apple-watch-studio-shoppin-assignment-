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

  const shareOnX = () => {
    const textToShare = "Check this out! Apple Watch Studio by @oyemehraxyz";
    const urlToShare = "https://example.com";
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      textToShare
    )}&url=${encodeURIComponent(urlToShare)}`;
    window.open(tweetUrl, "_blank");
  };

  const shareOnLinkedIn = () => {
    const textToShare =
      "Check this out! Apple Watch Studio by https://www.linkedin.com/in/shubhammehracs/";
    const urlToShare = "https://example.com";
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      urlToShare
    )}&text=${encodeURIComponent(textToShare)}`;
    window.open(linkedInUrl, "_blank");
  };

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
              <div className="shareIcons" onClick={() => shareOnX()}>
                <img src="/icons/icons8-x-100.png" alt="x" />
              </div>

              <div className="shareIcons" onClick={() => shareOnLinkedIn()}>
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
