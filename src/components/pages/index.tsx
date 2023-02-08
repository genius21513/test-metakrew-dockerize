import React, { useEffect, useRef, Suspense, useState } from "react";

// Animation & Styling 
import { Power3 } from "gsap";
import {
  LilSqr,
  LilCircle,
  TextAObject,
  LinksObject,
  MintButton
} from "../animation/Objects";
import { VideoBackground } from "../VideoBackground";
import { ImageReveal } from "../animation/ImageReveal";
import { Animation } from "../../interfaces/animation";
import { runAnimation } from "../../utils/animation";
import { Box, Container, Image, Text} from "theme-ui";

// Loading
import { Loading } from "../Loading";
import { BrowserView, isBrowser, isMobile, isSafari, isTablet, MobileOnlyView } from "react-device-detect";

// Sections
import { Intro, Race, Mint, Brought, Team, FAQs, Footer, Roadmap } from "../../sections";
import { PreLoader } from "../PreLoader";
import { Route, Routes } from "react-router-dom";

export const logoBrowser = "https://res.cloudinary.com/metakey/image/upload/q_auto:eco/c_scale,w_720/v1636456830/metakrewLandingPageNew/metakeyLogo_asevjl.webp"
export const logoMobile = "https://res.cloudinary.com/metakey/image/upload/q_auto:eco/c_scale,w_300/v1636456830/metakrewLandingPageNew/metakeyLogo_asevjl.webp"

export const mobileBackground0 = "https://res.cloudinary.com/metakey/image/upload/v1636502581/metakrewLandingPageNew/mobileBackground_mdnlkq.webp"
export const mobileBackground1 = "https://res.cloudinary.com/metakey/image/upload/v1636508024/metakrewLandingPageNew/backgroundAsImage_rildld.webp"

export const safariSnowFlakeBS0 = "https://res.cloudinary.com/metakey/image/upload/v1636502581/metakrewLandingPageNew/mobileBackground_mdnlkq.png"
export const safariSnowFlakeBS1 = "https://res.cloudinary.com/metakey/image/upload/v1636508024/metakrewLandingPageNew/backgroundAsImage_rildld.png"
export const safariSnowFlakeBS3 = "https://res.cloudinary.com/metakey/image/upload/v1636502498/metakrewLandingPageNew/website_background_1000_cjarcc.png"

const App: React.FC = () => {


  const [isLoading, setIsLoading] = useState<boolean>(true);


  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);


  /* Animation Stuff */

  // Parameters
  const animationOffset0 = 100;
  const animationOffset1 = 20;

  // Object Refs
  const BoxRef0 = useRef<HTMLDivElement | null>(null);
  const BoxRef1 = useRef<HTMLDivElement | null>(null);
  const BoxRef2 = useRef<HTMLDivElement | null>(null);
  const BoxRef3 = useRef<HTMLDivElement | null>(null);
  const BoxRef5 = useRef<HTMLDivElement | null>(null);

  const divRef0 = useRef<HTMLDivElement | null>(null);
  const divRef1 = useRef<HTMLDivElement | null>(null);
  const divRef2 = useRef<HTMLDivElement | null>(null);
  const divRef3 = useRef<HTMLDivElement | null>(null);
  const divRef4 = useRef<HTMLDivElement | null>(null);

  const mintRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);

  const textRef = useRef(null);

  // Objects
  const animationObjects = [

    <MintButton ref={mintRef} sx={{ top: ["30px", "35px", `${45}px`], left: ['75vw', '82vw', '82vw'], position: "fixed", opacity: 0 }} href="test" />,
    // Circles Top Left
    <LilCircle
      ref={divRef0}
      sx={{
        top: ["30px", `${50}px`],
        left: [`${150 - animationOffset1}px`, `${220 - animationOffset1}px`],
        width: "5px",
        height: "5px",
        position: "fixed",
      }}
    />,
    <LilCircle
      ref={divRef1}
      sx={{
        top: [`${30 - animationOffset1}px`, `${50 - animationOffset1}px`],
        left: ["160px", "210px"],
        width: "5px",
        height: "5px",
        position: "fixed",
      }}
    />,
    <LilCircle
      ref={divRef2}
      sx={{
        top: ["30px", `${50}px`],
        left: [`${210 - animationOffset1}px`, `${240 - animationOffset1}px`],
        width: "5px",
        height: "5px",
        position: "fixed",
      }}
    />,

    <LilSqr
      ref={divRef3}
      sx={{
        top: `${70}px`,
        left: `55vw`,
        width: "130px",
        height: "3px",
        position: "fixed",
        display: ["none", "none", "none", "flex"]
      }}
    />,
    <LilCircle
      ref={divRef4}
      sx={{
        top: `${30}px`,
        left: ['30vw', `65vw`],
        width: "5px",
        height: "5px",
        position: "fixed",
      }}
    />,

    // Binary Group #1
    <TextAObject
      ref={textRef}
      value="0100111"
      sx={{ top: ["35px", `${50}px`], left: ["60vw", `75vw`], position: "fixed" }}
    />,
    <TextAObject
      ref={textRef}
      value="0101"
      sx={{ top: ["48px", `${65}px`], left: ["60vw", `75vw`], position: "fixed" }}
    />,

    <LilSqr
      ref={BoxRef0}
      sx={{
        top: `${150 - animationOffset0}px`,
        left: ["7vw", "8vw"],
        width: "8px",
        height: "20px",
        position: "fixed",
      }}
    />,
    <LilSqr
      ref={BoxRef1}
      sx={{
        top: `${150 + animationOffset0}px`,
        left: ["5vw", "7vw"],
        width: "4px",
        height: "40px",
        position: "fixed",
      }}
    />,

    <LilSqr
      ref={BoxRef2}
      sx={{
        top: `${20 + animationOffset0}px`,
        left: `95vw`,
        width: "3px",
        height: "75px",
        position: "fixed",
      }}
    />,
    <LilCircle
      ref={BoxRef3}
      sx={{
        top: `${170 + animationOffset0}px`,
        left: `95vw`,
        width: "4px",
        height: "4px",
        position: "fixed",
      }}
    />,
    // Binary Group #2
    <TextAObject
      ref={textRef}
      value="01"
      sx={{
        top: `${110 + animationOffset0}px`,
        left: ["25px", `50px`],
        position: "fixed",
      }}
    />,
    <TextAObject
      ref={textRef}
      value="00"
      sx={{
        top: `${110 + animationOffset0 + 15}px`,
        left: ["25px", `50px`],
        position: "fixed",
      }}
    />,
    <TextAObject
      ref={textRef}
      value="11"
      sx={{
        top: `${110 + animationOffset0 + 30}px`,
        left: ["25px", `50px`],
        position: "fixed",
      }}
    />,
    <TextAObject
      ref={textRef}
      value="10"
      sx={{
        top: `${110 + animationOffset0 + 45}px`,
        left: ["25px", `50px`],
        position: "fixed",
      }}
    />,
    <TextAObject
      ref={textRef}
      value="1"
      sx={{
        top: `${110 + animationOffset0 + 60}px`,
        left: ["25px", `50px`],
        position: "fixed",
      }}
    />,

    <LinksObject
      sx={{
        bottom: `${60 + animationOffset0 + 85}px`,
        left: ["80vw", "84vw", "80vw", `86vw`],
        position: "fixed",
        transition: "0.4s",
        cursor: "pointer",
        transform: "rotate( 90deg )",

        "&:hover": {
          color: "#49CFDE",
        },
      }}
    />,
    <LilSqr
      ref={BoxRef5}
      sx={{
        bottom: `${110 + animationOffset0 + 90}px`,
        left: ["25px", `50px`],
        width: "3px",
        height: "100px",
        position: "fixed",
      }}
    />,
  ];

  useEffect(() => {
    const animations: Animation[] = [
      {
        type: "to",
        ref: logoRef.current,
        duration: 2,
        options: {
          opacity: 1,
          ease: Power3.easeOut,
        },
      },
      {
        type: "to",
        ref: mintRef.current,
        duration: 2,
        options: {
          opacity: 1,
          ease: Power3.easeOut,
        },
      },

      {
        type: "to",
        ref: BoxRef0.current,
        duration: 2,
        options: {
          opacity: 1,
          y: animationOffset0,
          ease: Power3.easeOut,
        },
      },
      {
        type: "to",
        ref: BoxRef1.current,
        duration: 2,
        options: {
          opacity: 1,
          y: -animationOffset0,
          ease: Power3.easeOut,
        },
      },
      {
        type: "to",
        ref: BoxRef2.current,
        duration: 2,
        options: {
          opacity: 1,
          y: animationOffset0,
          ease: Power3.easeOut,
        },
      },
      {
        type: "to",
        ref: BoxRef3.current,
        duration: 2,
        options: {
          opacity: 1,
          y: -animationOffset0,
          ease: Power3.easeOut,
        },
      },
      {
        type: "to",
        ref: BoxRef5.current,
        duration: 2,
        options: {
          opacity: 1,
          y: animationOffset1,
          ease: Power3.easeOut,
        },
      },
      // Fixed
      {
        type: "to",
        ref: divRef0.current,
        duration: 2,
        options: {
          opacity: 1,
          x: animationOffset1,
          ease: Power3.easeOut,
        },
      },
      {
        type: "to",
        ref: divRef1.current,
        duration: 2,
        options: {
          opacity: 1,
          y: animationOffset1,
          ease: Power3.easeOut,
        },
      },
      {
        type: "to",
        ref: divRef2.current,
        duration: 2,
        options: {
          opacity: 1,
          x: -animationOffset1,
          ease: Power3.easeOut,
        },
      },
      {
        type: "to",
        ref: divRef3.current,
        duration: 2,
        options: {
          opacity: 1,
          y: -animationOffset1,
          ease: Power3.easeOut,
        },
      },
      {
        type: "to",
        ref: divRef4.current,
        duration: 2,
        options: {
          opacity: 1,
          y: animationOffset1,
          ease: Power3.easeOut,
        },
      },
    ];
    animations.forEach(runAnimation)

    !isMobile && !isSafari && !isLoading ? animations.forEach(runAnimation) : console.log("loading")
  }, [isLoading]);

  if (!isMobile && !isSafari && isLoading) {
    return <PreLoader />
  }

  return (<>

    {animationObjects.map((element, i) => {
      return <Box key={i}>{element}</ Box>
    })}

    <Box ref={logoRef} sx={{
      opacity: 0,
      display: "block",
      position: "fixed",
      zIndex: 2,
      width: ["150px", "300px"],
      height: ["92.5px", "185px"],
      top: [0, -25],
      left: [-25, -50],
      backgroundImage: `url(${isBrowser ? logoBrowser : logoMobile})`,
      backgroundSize: ["150px 92.5px", "300px 185px"],
    }} />

    <ImageReveal id="Image" />

    <Container variant="layout.container" id="Container" >
      {/* Browser */}
      {(isBrowser || isTablet) &&
        (
          <>
            <VideoBackground />
            <Image sx={{ hieght: "100vh", width: "100vw", mb: "2rem", display: ["flex", "none", "none", "none"] }} src={!isSafari ? mobileBackground0 : safariSnowFlakeBS0} />
            <Image sx={{ hieght: "100vh", width: "100vw", mb: "2rem", display: ["none", "flex", "flex", "none"] }} src={!isSafari ? mobileBackground0 : safariSnowFlakeBS1} />
            {isSafari && <Image sx={{ hieght: "100vh", width: "100vw", mb: "2rem", display: ["none", "none", "none", "flex"] }} src={safariSnowFlakeBS3} />}
          </>
        )}



      {/* Mobile */}
      <MobileOnlyView>
        <Image sx={{ hieght: "100vh", width: "100vw", mb: "2rem", display: ["flex", "none", "none", "none"] }} src={mobileBackground0} />
        <Image sx={{ hieght: "100vh", width: "100vw", mb: "2rem", display: ["none", "flex", "flex", "none"] }} src={mobileBackground1} />
      </MobileOnlyView>

      {/* Sections */}
      <Intro />
      <Race />

      {/* LAZY */}
      <Suspense fallback={<Loading />}>
        <Mint />
      </Suspense>

      <Roadmap />

      {/* LAZY */}
      <Suspense fallback={<Loading />}>
        {/* Browser */}
        <BrowserView>
          <FAQs />
        </BrowserView>

        <Brought />

        {/* Browser */}
        <BrowserView>
          <Team />
        </BrowserView>

      </Suspense>

      <Footer />
    </Container>


  </>
  )
};

export default App