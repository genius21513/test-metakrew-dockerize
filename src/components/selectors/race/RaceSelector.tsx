import { useEffect, useReducer, useRef, useState } from "react";
import { Box, Text } from "theme-ui";
import gsap, { Power3 } from "gsap"
import { useMetaContext } from "../../../context";
import { RaceContentProps, RaceSelectorState, RaceProps, RaceSelectorProps } from "./interfaces";
import { raceSelectorReducer } from "./reducer";

const Race: React.FC<RaceProps> = ({ content, handleClick, selected }) => {
  return (
    <>
      <Box key={`RaceSelector-${content.race}`} variant="layout.card.lore" onClick={() => { handleClick(content) }} sx={{
        border: selected ? "1px solid white" : "1px solid rgba(139, 146, 255, 0.2)", minWidth: "100%", minHeight: "fit-content", borderRadius: "18px", padding: "1rem", marginTop: "1rem", cursor: "pointer", ":hover": {
          border: "1px solid white"
        }
      }}>
        <Text sx={{ color: "#fff" }}>{content.race}</Text>
      </Box>
    </>
  )
}

const RaceContent: React.FC<RaceContentProps> = ({ content }) => {
  const ref = useRef(null);
  useEffect(() => {
    gsap.to(ref.current, 1.5, {
      opacity: 1,
      ease: Power3.easeOut,
    })
  }, [content])
  return (
    <Text ref={ref} sx={{ mb: "0.75rem", maxWidth: "45%", color: "#fff", fontFamily: "Poppins-ExtraLight", fontSize: "14px" }}>{content}</Text>
  )
}

export const RaceSelector: React.FC<RaceSelectorProps> = ({ theme }) => {


  const { MetaState } = useMetaContext()
  const [content, setContent] = useState(MetaState.content.race)

  useEffect(() => {
    setContent(MetaState.content.race)
  }, [MetaState.content.race])

  useEffect(() => {
    dispatch({
      data: content[0]
    })
  }, [content])

  const [state, dispatch] = useReducer(raceSelectorReducer, content[0])

  const handleClick = (content: RaceSelectorState) => {
    dispatch({
      data: content
    })
  }


  return (
    <>
      <Box id="race" variant="layout.section" sx={{ display: "flex", flexDirection: ["column", "column", "column", "row"], ...theme }}>

        {/* Left */}
        <Box variant="layout.components.selectors.raceSelector.left">
          {content.map((content: RaceSelectorState) => <Race key={`RaceSelector-${content.race}`} selected={state.race === content.race} content={content} handleClick={handleClick} />)}
        </Box>

        {/* Right */}
        <Box variant="layout.components.selectors.raceSelector.right" sx={{ backgroundImage: `url(${state.image})` }}>
          <Text as="h1" sx={{ mb: "1rem", color: "#49CFDE", fontFamily: "Questrial", fontWeight: 800, letterSpacing: "1px" }}>{state.title.toUpperCase()}</Text>
          {state.content.map((content: string, i) => <RaceContent key={`RaceSelector-content-${i}`} content={content} />)}
        </Box>
      </Box>
    </>)
}