import React, { useEffect, useRef, useState } from "react";

// Animation & Styling 
import { Power3 } from "gsap";
import {
  LilSqr,
  LilCircle,
  TextAObject,
  LinksObject,
} from "../../animation/Objects";
import { metakrewLogoBrowser, metakrewLogoMobile } from "../../animation/ImageReveal";
import { Animation } from "../../../interfaces/animation";
import { runAnimation } from "../../../utils/animation";
import { Box, Container, Image, Input, Select, Text } from "theme-ui";

// Loading
import { isBrowser, isMobile, isSafari } from "react-device-detect";

// Sections
import { PreLoader } from "../../PreLoader";
import axios from "axios";
import { logoBrowser, logoMobile } from "..";
import Toaster from "../../toaster/Toaster";

export interface PageBounds {
  start: number
  end: number
}

interface SortOption {
  title: string
  func: any
}

export interface RarityData {
  id: number
  TRS: number
  race: string
  metakeyAura: string
  aura: string
  background: string
  outfit: string
  score: string
  jewellery: string
  hair: string
  weapon: string
  eyePatch: string
  mask: string
  tattoo: string
  mostache: string
  hat: string
  effect: string
  facial: string
  rank: string
}

const dataFetchURI = "https://res.cloudinary.com/metakey/raw/upload/v1639345569/metakrewLandingPageNew/getFullRanking_v9tn81.json"

const defaultPerPage = 25

const totalMinted = 7335

const sortOptions: SortOption[] = [
  { title: "High Rarity to Low", func: (a: RarityData, b: RarityData) => { return parseInt(a.rank) - parseInt(b.rank) } },
  { title: "Low Rarity to High", func: (a: RarityData, b: RarityData) => { return parseInt(b.rank) - parseInt(a.rank) } },
  { title: "High ID to Low", func: (a: RarityData, b: RarityData) => { return a.id - b.id } },
  { title: "Low ID to High", func: (a: RarityData, b: RarityData) => { return b.id - a.id } },
]
const perPageOptions = [25, 50, 100]

const ToasterType = {
  success: "success",
  fail: "fail",
};

const Rarity: React.FC = () => {

  const [fullRarityData, setFullRarityData] = useState<RarityData[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<number>(0)

  //TOASTER

  const [showToaster, setShowToaster] = useState(false);
  const [message, setMessage] = useState<string>();
  const [toasterType, setToasterType] = useState<string>();

  // START OF PAGINATION
  const [perPage, setPerPage] = useState(defaultPerPage);
  const [noOfElements, setNoOfElements] = useState(0)

  const [pageBounds, setPageBounds] = useState<PageBounds>({ start: 0, end: perPage })
  const [page, setPage] = useState<number>(0);

  const [pageData, setPageData] = useState<RarityData[]>([])

  const numberOfPages: number = Math.ceil(noOfElements / perPage) || 1;
  const clampedPage: number = Math.min(page, numberOfPages - 1);
  const pageRangeofElements = [...Array(numberOfPages).keys()]

  useEffect(() => {
    if (page !== clampedPage) {
      setPage(clampedPage);
    }
  }, [page, clampedPage]);

  useEffect(() => {
    setPageBounds({ start: clampedPage * perPage, end: (clampedPage * perPage) + perPage })
  }, [clampedPage, perPage, noOfElements, setPageBounds]);

  // END OF PAGINATION
  useEffect(() => {
    setNoOfElements(fullRarityData.length)
    setPageData(fullRarityData.sort(sortOptions[sortOption].func).slice(pageBounds.start, pageBounds.end))

  }, [fullRarityData, pageBounds, sortOption])

  const updateToaster = () => {
    setShowToaster(true);

    setTimeout(() => {
      setShowToaster(false);
    }, 3000);
  };


  useEffect(() => {
    axios.get(dataFetchURI).then((res) => {
      setFullRarityData(res.data.rankedList)
    }).catch(console.error)

    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, [])

  const handleLoading = (e: Event) => {
    console.log(e)
    setIsLoading(!e.returnValue)
  }

  const handleSearch = (id: number) => {
    setPageData(fullRarityData.filter((data) => { return id === data.id || id === parseInt(data.rank) }).slice(pageBounds.start, pageBounds.end))
  }



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

  const logoRef = useRef<HTMLDivElement | null>(null);

  const textRef = useRef(null);

  // Objects
  const AnimationObjects = [
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

    {showToaster && (
      <>
        <Toaster
          toasterState={showToaster}
          message={message}
          type={toasterType}
        />
      </>
    )}

    {AnimationObjects.map((element, i) => {
      return <Box key={`animationObject-${i}`}>{element}</ Box>
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



    <Container variant="layout.container" id="Container" sx={{
      my: "5rem",
      display: "flex"

    }}>
      <Image
        src={isBrowser ? metakrewLogoBrowser : metakrewLogoMobile} sx={{ display: "flex", flex: 1, justifyContent: "flex-end", width: ["200px", "300px", "400px", "500px", "600px"], minHeight: "auto", mb: "1rem" }}
      />
      <Box variant="layout.components.rarity.grid" sx={{ mb: "1em", padding: "0.5rem" }}>
        <Box className="gridSearch">
          <Box className="col" sx={{ flexDirection: "column" }}>
            <Text sx={{ color: "white" }}>Filter:</Text>
            <Box sx={{ mt: "1rem", }}>
              <Select defaultValue={0} sx={{
                color: "white",
                width: "100%",
                flexDirection: "row",
                backgroundColor: "rgba(0, 0, 0, 0.3)"
              }} onChange={(e) => { setSortOption(parseInt(e.target.value)) }}>
                {sortOptions.map((sortOption: SortOption, i: number) => <option style={{ backgroundColor: "#060B1F" }} key={`perPageOpt-${sortOption.title}`} value={i}>{sortOption.title}</option>)}
              </Select>
            </Box>
          </Box>
          <Box className="col">
            <Text sx={{ color: "white" }}>Per Page:</Text>
            <Box sx={{ mt: "1rem", }}>
              <Select defaultValue={defaultPerPage} sx={{ color: "white", width: "100%", flexDirection: "row", backgroundColor: "rgba(0, 0, 0, 0.3)" }} onChange={(e) => { setPerPage(parseInt(e.target.value)) }}>
                {perPageOptions.map((value: number) => <option style={{ backgroundColor: "#060B1F" }} key={`perPageOpt-${value}`} value={value}>{value}</option>)}
              </Select>
            </Box>
          </Box>
          <Box className="col">
            <Text sx={{ color: "white" }} >Page:</Text>
            <Box sx={{ mt: "1rem", }}>
              <Select defaultValue={pageRangeofElements[0]} sx={{ color: "white", width: "100%", flexDirection: "row", backgroundColor: "rgba(0, 0, 0, 0.3)" }} onChange={(e) => { setPage(parseInt(e.target.value)) }}>
                {pageRangeofElements.map((value: number) => <option style={{ backgroundColor: "#060B1F" }} key={`data-${value}`} value={value}>{value + 1}</option>)}
              </Select>
            </Box>
          </Box>
          <Box className="col">
            <Text sx={{ color: "white" }} >Search ID/Rarity:</Text>
            <Box sx={{ display: "flex", mt: "1rem", flexDirection: "row" }}>
              <Input id="searchInput" type="number" sx={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.3)" }} onChange={(e: any) => {
                const parsedAmount = parseInt(e.target.value)
                if (e.target.value === "") {
                  setPageData(fullRarityData.sort(sortOptions[sortOption].func).slice(pageBounds.start, pageBounds.end))
                }
                if (parsedAmount >= 1 && parsedAmount <= 9750) {
                  handleSearch(parsedAmount);
                }
                if (parsedAmount < 1) {
                  e.target.value = 9750
                }
                if (parsedAmount > 9750) {
                  e.target.value = 1
                }
              }} />
              <Text sx={{ mx: "1rem", my: "auto", color: "white" }} onClick={() => {
                setPageData(fullRarityData.sort(sortOptions[sortOption].func).slice(pageBounds.start, pageBounds.end))
                const searchInputElement = document.getElementById('searchInput') as HTMLInputElement
                if (searchInputElement) {
                  searchInputElement.value = ""
                }
              }}>Clear</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box variant="layout.components.rarity.grid" sx={{ padding: "1rem" }}>
        <Box className="grid" sx={{ height: "fit-content", overflow: "auto" }}>
          {pageData.map((metakrew: RarityData) => {
            return (
              <Box key={`metakrew-${metakrew.id}`} className="col" sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center" }}>
                <Image src={`https://res.cloudinary.com/metakey/image/upload/c_scale,w_300/v1639954453/metakrew_final/${metakrew.id}.webp`} onClick={() => {
                  if (metakrew.id <= totalMinted) {
                    window.open(`https://opensea.io/assets/0xe4e50b96f70aab13a2d7e654d07d7d4173319653/${metakrew.id}`, "_blank");
                  } else {
                    setToasterType(ToasterType.success)
                    setMessage("This Metakrew mate hasn't been minted yet.")
                    updateToaster()
                  }
                }} sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "20px",
                  mb: "1rem"
                }} />
                <Text sx={{ mx: "auto", fontWeight: 800, color: "white", letterSpacing: "1px", mb: "0.2rem" }}>ID: {metakrew.id}</Text>
                <Text sx={{ mx: "auto", fontWeight: 800, color: "white", letterSpacing: "1px" }}>Rank: {metakrew.rank}</Text>
              </Box>
            )
          })}
        </Box>
      </Box>
    </Container>
  </>
  )
};

export default Rarity