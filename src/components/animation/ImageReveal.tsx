import React, { useRef, useEffect } from "react";
import gsap, { Power3 } from "gsap";
import CSSRulePlugin from "gsap/dist/CSSRulePlugin";

import { Box, Image, Text } from "theme-ui";
import { isBrowser } from "react-device-detect";

export const metakrewLogoBrowser = "https://res.cloudinary.com/metakey/image/upload/c_scale,w_1619/v1636508616/metakrewLandingPageNew/metakrew_logo_c6xv4v.webp"
export const metakrewLogoMobile = "https://res.cloudinary.com/metakey/image/upload/c_scale,w_800/v1636508616/metakrewLandingPageNew/metakrew_logo_c6xv4v.webp"

// !! DO NOT REFACTOR !!

interface Props {
  id: string
}

export const ImageReveal: React.FC<Props> = ({ id }) => {
  const image = useRef(null);
  const textRef = useRef(null);
  const container = useRef<HTMLDivElement>(null);
  const imageReveal = CSSRulePlugin.getRule(".img-container:after");

  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(container.current, 0, { css: { visibility: "visible" } });
    tl.to(image.current, 0, { css: { visibility: "visible" } });
    tl.to(imageReveal, 0, { css: { visibility: "visible" } });
    tl.to(imageReveal, 0.8, { width: "0%", ease: Power3.easeInOut });
    tl.from([image.current, textRef.current], 0.8, {
      scale: 1.1,
      ease: Power3.easeInOut,
      delay: -0.7
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Box sx={{
      flexDirection: "row",
      mb: ["auto", "auto", "auto", "3rem"],
      position: "absolute",
      top: 0,
      left: 0,
      display: "block",
      height: "100vh",
      width: "100vw",
      zIndex: 2
    }}>
      <Box ref={container} id={id} sx={{
        height: "100%",
        weight: "100%",
        display: "flex",
        alignItems: "center",
        visibility: "hidden",
      }}>
        <Box className="img-container" sx={{
          my: "auto",
          display: "flex",
          flexDirection: "column",
          minWidth: ["58vw", "48vw", "48vw", "48vw", "41vw"],
          height: "fit-content",
          flex: 1,
          ml: ["20vw", "20vw", "25vw", "44vw"],
          mt: ["auto", "30vw", "45vw", "0vw"]
        }}>
          <Image
            ref={image}
            src={isBrowser ? metakrewLogoBrowser : metakrewLogoMobile} sx={{ display: "flex", flex: 1, justifyContent: "flex-end", width: ["55vw", "45vw", "45vw", "45vw", "38vw"], minHeight: "auto" }}
          />
          <Text ref={textRef} sx={{ ml: "auto", mr: ["0vw", "0vw", "0vw", "3rem"], display: "flex", flex: 1, fontFamily: "Poppins-ExtraLight", width: "fit-content", justifyContent: "flex-end", color: "white", fontWeight: 800, }}>Your Identity in the Metaverse</Text>
        </Box>
      </Box>
    </ Box>
  );
};
