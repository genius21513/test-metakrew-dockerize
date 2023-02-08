import { useEffect, useReducer, useState } from "react";
import { Box, Text } from "theme-ui";
import { useMetaContext } from "../../../context";
import { Icon } from "../../Icon";
import { RaceSelectorProps } from "./interfaces";
import { raceSelectorReducer } from "./reducer";

export const RaceCarousel: React.FC<RaceSelectorProps> = ({ theme }) => {

  const { MetaState } = useMetaContext()
  const [content, setContent] = useState(MetaState.content.race)

  useEffect(() => {
    setContent(MetaState.content.race)
  }, [MetaState])

  useEffect(() => {
    dispatch({
      data: content[0]
    })
  }, [content])

  const [state, dispatch] = useReducer(raceSelectorReducer, content[0])

  const handleLeftClick = (state: any) => {
    switch (state.race) {
      case "Lore":
        dispatch({
          data: content[5]
        })
        break;
      case "Humans":
        dispatch({
          data: content[0]
        })
        break;
      case "Revenants":
        dispatch({
          data: content[1]
        })
        break;
      case "Shrouds":
        dispatch({
          data: content[2]
        })
        break;
      case "Cybrids":
        dispatch({
          data: content[3]
        })
        break;
      case "Vanguards":
        dispatch({
          data: content[4]
        })
        break;
      default:
        dispatch({
          data: content[0]
        })
    }
  }

  const handleRightClick = (state: any) => {
    switch (state.race) {
      case "Lore":
        dispatch({
          data: content[1]
        })
        break;
      case "Humans":
        dispatch({
          data: content[2]
        })
        break;
      case "Revenants":
        dispatch({
          data: content[3]
        })
        break;
      case "Shrouds":
        dispatch({
          data: content[4]
        })
        break;
      case "Cybrids":
        dispatch({
          data: content[5]
        })
        break;
      case "Vanguards":
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
  /*
  useEffect(() => {
    const id = setInterval(() => {
      switchRace(state)
    }, 5000)

    return () => clearInterval(id)
  }, [state])
  */


  return (
    <>
      <Box id="race" variant="layout.section" sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "100%", paddingX: ["2.5rem", "0rem", "0rem", "0rem"], ...theme }}>

        <Box onClick={() => { handleLeftClick(state) }} variant="layout.components.selectors.raceCarousel.arrow">
          <Icon name={"chevron-left"} />
        </Box>
        <Box variant="layout.components.selectors.raceCarousel.card">
            <Text as="h1" variant="layout.components.selectors.raceCarousel.card.title">{state.title.split(':')[0]}</Text>
            {state.content.map((content: string, i: number) => <Text key={`content-${i}`} variant="layout.components.selectors.raceCarousel.card.content">{content}</Text>)}
        </Box>
        <Box onClick={() => { handleRightClick(state) }} variant="layout.components.selectors.raceCarousel.arrow">
          <Icon name={"chevron-right"} />
        </Box>


      </Box>

    </>
  )
}