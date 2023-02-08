import React, { useEffect, useRef, useState } from "react";
import { Box, Button } from "theme-ui";
import { useMetaContext } from "../context";
import { IntroContent as IntroContentInterface } from "../context/interfaces";
import { IntroContent } from "../components/IntroContent";
import { TrailerCard } from "../components/TrailerCard";
import { isBrowser } from "react-device-detect";

export const Intro: React.FC = () => {
  const [active, setActive] = useState(false);
  const [flex, setFlex] = useState(false);

  const { MetaState } = useMetaContext()

  const [content, setContent] = useState<IntroContentInterface>(MetaState.content.intro)

  const videoRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setContent(MetaState.content.intro)
  }, [MetaState])

  const handleScroll = () => {
    const offset = window.scrollY

    if (videoRef?.current && containerRef?.current) {
      const topOfVideo = containerRef.current.offsetTop - 120
      const videoHeight = videoRef.current.clientHeight
      const containerHeight = containerRef.current.clientHeight
      const bottomOfContainer = containerHeight + topOfVideo

      if (offset >= bottomOfContainer - videoHeight) {
        setFlex(true);
      } else {
        setFlex(false);
      }
      if (offset >= topOfVideo && offset < bottomOfContainer - videoHeight) {
        setActive(true);
      } else {
        setActive(false);
      }

    }
  };

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      };

    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Box
        id="intro"
        variant="layout.section"
        sx={{
          display: "flex",
          flexDirection: [
            "column",
            "column",
            "column",
            "row",
            "row"
          ],
          justifyContent: "space-between"
        }}
        ref={containerRef}
      >
        {/* Left */}
        <Box variant="layout.section.intro.left">
          <Box sx={{ display: "flex", flex: "1", marginBottom: "3rem", minHeight: "fit-content" }}>
            <IntroContent
              title={content.it.title}
              content={content.it.content}
            />
          </Box>

          <Box variant="layout.section.intro.left.buttonsContainer">
            <Button
              onClick={() => { window.open("https://themetakey.com", "_blank"); }}
              variant="layout.section.intro.left.buttonsContainer.button"
              sx={{
                color: "white",
                backgroundColor: "transparent",
                border: "1px solid white",
                ":hover": { backgroundColor: "white", color: "black" },
                mb: ["1rem", "1rem", "0rem", "0rem", "0rem"],
                display: "flex",
                flex: 1,
              }}
            >
              THEMETAKEY.COM
            </Button>
            <Button
              onClick={() => { window.open("https://linktr.ee/Metakey", "_blank"); }}
              variant="layout.section.intro.left.buttonsContainer.button"
              sx={{
                color: "black",
                backgroundColor: "white",
                ":hover": {
                  backgroundColor: "transparent",
                  color: "white",
                  border: "1px solid white",
                },
                ml: ["0rem", "0rem", "0rem", "2rem", "4rem"],
              }}
            >
              GET MY METAKEY
            </Button>
          </Box>

          <Box sx={{ display: "flex", flex: "1", minHeight: "fit-content" }}>
            <IntroContent
              title={content.does.title}
              content={content.does.content}
            />
          </Box>
        </Box>
        {/* Right */}
        <Box
          sx={
            !active
              ? {
                display: "flex",
                flexDirection: "column",
                width: ["100%", "100%", "100%", "400px", "500px"],
                justifyContent: !flex ? "flex-start" : "flex-end",
                mt: ["2rem", "2rem", "0rem", "0rem"],
              }
              : {
                position: "fixed",
                top: 120,
                display: ["none", "none", "none", "flex"],
                flexDirection: "column",
                width: ["100%", "100%", "100%", "400px", "500px"],
                justifyContent: !flex ? "flex-start" : "flex-end",
                ml: ["0", "0", "0", "500px", "600px"]
              }}>
          <TrailerCard ref={videoRef} />
        </Box>
      </Box>
    </>
  );
};
