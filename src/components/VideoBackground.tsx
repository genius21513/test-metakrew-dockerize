import React from "react";
import { isSafari } from "react-device-detect";
import styled from "styled-components";
import { Box } from "theme-ui";

const Video = styled.video`
  width: 100vw;
`;

const videoURL = "https://res.cloudinary.com/metakey/video/upload/q_auto:eco/ac_none/v1636498420/metakrewLandingPageNew/websiteBackgroundVideo_dtqzol.webm"

export const VideoBackground: React.FC = () => {

  if (isSafari) {
    return (
      <></>
    )
  }

  return (
    <>
      <Box id="background" variant="layout.components.videoBackground.container">
        <Video preload="auto" autoPlay muted loop src={videoURL} />
      </Box>
    </>
  );
};


