// Share.tsx

import { type FC, useState } from "react";
import React from "react";
import ShareController from "./ShareController";
import SharePopup from "./SharePopup";


const Share: FC<Props> = ({
  children,
  shareData,
  onInteraction,
  onSuccess,
  onError,
  disabled
}) => {
  const [openPopup, setOpenPopup] = useState(false);

  const handleNonNativeShare = () => {
    setOpenPopup(true);
  };

  return (
    <>
        <ShareController
        shareData={shareData}
        onInteraction={onInteraction}
        onSuccess={onSuccess}
        onError={onError}
        onNonNativeShare={handleNonNativeShare}
        disabled={disabled}
      >
        {children}
      </ShareController>
      {openPopup ? (
        <SharePopup
          shareData={shareData}
          onClose={() => setOpenPopup(false)}
        />
      ) : null}
    </>
  );
};

interface Props {
  children: React.ReactNode;
  shareData: ShareData;
  onSuccess?: () => void;
  onError?: (error?: unknown) => void;
  onInteraction?: () => void;
  disabled?: boolean;
}

export default Share;