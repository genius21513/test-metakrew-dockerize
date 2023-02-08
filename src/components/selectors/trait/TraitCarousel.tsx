import { useEffect, useReducer, useState } from "react"
import { Box, Text, Image } from "theme-ui"
import { useMetaContext } from "../../../context"
import { Icon } from "../../Icon"
import { TraitSelectorProps, TraitSelectorState } from "./interfaces"
import { traitSelectorReducer } from "./reducer"

export const TraitCarousel: React.FC<TraitSelectorProps> = ({ theme }) => {

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


  const switchStateRight = (state: TraitSelectorState) => {
    switch (state.title.split(' ')[0]) {
      case "Auras":
        dispatch({
          data: content[4]
        })
        break;
      case "Weapons":
        dispatch({
          data: content[2]
        })
        break;
      case "Outfits":
        dispatch({
          data: content[3]
        })
        break;
      case "Traits":
        dispatch({
          data: content[1]
        })
        break;
      case "NASA":
        dispatch({
          data: content[0]
        })
        break;
      default:
        dispatch({
          data: content[0]
        })
    }
  }

  const switchStateLeft = (state: TraitSelectorState) => {
    switch (state.title.split(' ')[0]) {
      case "Auras":
        dispatch({
          data: content[2]
        })
        break;
      case "Weapons":
        dispatch({
          data: content[0]
        })
        break;
      case "Outfits":
        dispatch({
          data: content[1]
        })
        break;
      case "Traits":
        dispatch({
          data: content[4]
        })
        break;
      case "NASA":
        dispatch({
          data: content[3]
        })
        break;
      default:
        dispatch({
          data: content[0]
        })
    }
  }

  /*
  useEffect(() => {
    const id = setInterval(() => {
      switchStateRight(state)
    }, 5000)

    return () => clearInterval(id)
  }, [state])
  */


  return (
    <>
      <Box id="race" variant="layout.section" sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "100%", paddingX: ["2.5rem", "0rem", "0rem", "0rem"], ...theme }}>

        <Box variant="layout.components.selectors.traitCarousel.arrow" onClick={() => { switchStateLeft(state) }}>
          <Icon name={"chevron-left"} />
        </Box>
        <Box variant="layout.components.selectors.traitCarousel.card">
          <Text as="h1" variant="layout.components.selectors.traitCarousel.card.title">{state.title}</Text>
          <Text variant="layout.components.selectors.traitCarousel.card.content">{state.content}</Text>
          <Image variant="layout.components.selectors.traitCarousel.card.image" key={`TraitCarousel-image-${state.title}`} src={state.images[0].url} />
        </Box>
        <Box variant="layout.components.selectors.traitCarousel.arrow" onClick={() => { switchStateRight(state) }}>
          <Icon name={"chevron-right"} />
        </Box>

      </Box>

    </>
  )
}