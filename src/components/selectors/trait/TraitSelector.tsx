import { useEffect, useReducer, useState } from "react";
import { Box, Text, Image } from "theme-ui";
import { useMetaContext } from "../../../context";
import { ImageObject, TraitSelectorProps, TraitSelectorState } from "./interfaces";
import { traitSelectorReducer } from "./reducer";


const nasaBackground = "https://res.cloudinary.com/metakey/image/upload/f_jpg/q_auto:eco/c_scale,q_80,w_1280/v1636425254/metakrewLandingPage/ganymede_qwsacr_sn2wwz.png"

export const TraitSelector: React.FC<TraitSelectorProps> = ({ theme }) => {

  const { MetaState } = useMetaContext()
  const [content, setContent] = useState(MetaState.content.traits)

  useEffect(() => {
    setContent(MetaState.content.traits)
  }, [MetaState])

  useEffect(() => {
    dispatch({
      data: content[0]
    })
  }, [content])

  const [state, dispatch] = useReducer(traitSelectorReducer, content[0])

  const handleClick = (content: TraitSelectorState) => {
    dispatch({
      data: content
    })
  }

  const nasaCondition: string = state.title === "NASA" ? `url(${nasaBackground})` : "none"


  return (
    <>
      <Box id="race" variant="layout.section" sx={{ display: "flex", flexDirection: ["column", "column", "column", "row"], ...theme }}>

        {/* Left */}
        <Box variant="layout.components.selectors.traitSelector.left" sx={{
          backgroundImage: [
            "none",
            "none",
            "none",
            nasaCondition,
            nasaCondition
          ]
        }}>
          <Box sx={{ display: "flex", flex: 1, justifyContent: "flex-start", flexDirection: "column" }}>
            <Text as="h1" sx={{ mb: "1rem", color: "#49CFDE", fontFamily: "Questrial", fontWeight: 800, letterSpacing: "1px" }}>{state.title.toUpperCase()}</Text>
            <Text sx={{ display: "flex", justifyContent: "flex-start", flex: 1, color: "#fff", fontFamily: "Poppins-ExtraLight" }}>
              {state.content}
            </Text>
            <Text sx={{ mt: "1rem", fontSize: "12px", display: "flex", justifyContent: "flex-start", flex: 1, color: "#fff", fontFamily: "Poppins-ExtraLight" }}>
              {state.special}
            </Text>

          </Box>
          <Box sx={{ width: "100%", display: "flex", flexDirection: ["column", "column", "column", "row"] }}>
            {state.images.map((image: ImageObject, i: number) =>
              <Box key={`TraitSelector-image-${i}`} sx={{ display: "flex", flexDirection: "column", mr: '1.5rem', }}>
                {/*<Text sx={{ color: "white", my: "1rem", width: "100%", mx: "auto", textJustify: "auto", textAlign: "center" }}>{image.title}</Text>*/}
                <Image sx={{ width: ["110px", "140px", "180px"], height: ["110px", "140px", "180px"], borderRadius: "24px" }} src={image.url} />
              </Box>
            )}
          </Box>
        </Box>

        {/* Right */}
        <Box variant="layout.components.selectors.traitSelector.right">
          {content.map((content: TraitSelectorState) => (
            <Box key={`TraitSelector-${content.title}`} variant="layout.card.lore" onClick={() => { handleClick(content) }} sx={{
              display: "flex",
              border: state.title === content.title ? "1px solid white" : "1px solid rgba(139, 146, 255, 0.1)",
              minWidth: "100%", minHeight: "fit-content", borderRadius: "18px", padding: "1rem", marginBottom: "1rem", cursor: "pointer", ":hover": {
                border: "1px solid white"
              }
            }}>
              <Text sx={{ color: "#fff" }}>{content.title.split(' ')[0]}</Text>
            </Box>
          ))}

        </Box>
      </Box>

    </>)
}