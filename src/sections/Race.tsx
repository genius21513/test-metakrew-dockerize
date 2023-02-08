import { BrowserView, MobileOnlyView } from "react-device-detect"
import { RaceCarousel } from "../components/selectors/race/RaceCarousel"
import { RaceSelector } from "../components/selectors/race/RaceSelector"
import { TraitCarousel } from "../components/selectors/trait/TraitCarousel"
import { TraitSelector } from "../components/selectors/trait/TraitSelector"


export const Race: React.FC = () => {
  return (
    <>
      <BrowserView>
        <RaceCarousel theme={{ display: ["flex", "flex", "flex", "flex", "none"] }} />
        <RaceSelector theme={{ display: ["none", "none", "none", "none", "flex"] }} />
        <TraitCarousel theme={{ display: ["flex", "flex", "flex", "flex", "none"] }} />
        <TraitSelector theme={{ display: ["none", "none", "none", "none", "flex"] }} />
      </BrowserView>
      <MobileOnlyView>
        <RaceCarousel theme={{ display: ["flex", "flex", "flex", "flex", "none"] }} />
        <TraitCarousel theme={{ display: ["flex", "flex", "flex", "flex", "none"] }} />
      </MobileOnlyView>
    </>
  )
}