import React, { useEffect, useRef, useState } from "react"
import { BrowserView, isSafari, MobileOnlyView } from "react-device-detect"
import { Box, Text, Image } from "theme-ui"
import { useMetaContext } from "../context"
import { RoadmapPiece } from "../context/interfaces"

const video3DAvatars = "https://res.cloudinary.com/metakey/video/upload/q_auto:eco/ac_none,af_8000,c_scale,w_1280/v1635983257/metakrewLandingPage/IdleLoopFinal_HQ_dctrcv.mp4"

const video3DAvatar = "https://res.cloudinary.com/metakey/video/upload/v1636595417/metakrewLandingPageNew/idle_loop_vanguard_cropped_ekxfms.mp4"

interface Props {
  piece: Piece
}

interface Piece {
  content: string
  special: string
  title: string
  image: string
}
const RoadmapPieceCol: React.FC<Props> = ({ piece }) => {
  return (
    <>
      <Box variant="layout.section.roadmap.piecesContainer.roadmapPieceCol">
        <Text variant="layout.section.roadmap.piecesContainer.roadmapPieceCol.title">{piece.title.toUpperCase()}</Text>
        <Text variant="layout.section.roadmap.piecesContainer.roadmapPieceCol.content">{piece.content}</Text>
        <Image variant="layout.section.roadmap.piecesContainer.roadmapPieceCol.image" src={piece.image} />
        <Text variant="layout.section.roadmap.piecesContainer.roadmapPieceCol.special">{piece.special}</Text>
      </Box>
    </>
  )
}

export const Roadmap: React.FC = () => {

  const { MetaState } = useMetaContext()
  const [roadmapPieces, setPieces] = useState<RoadmapPiece[]>(MetaState.content.roadmap)

  useEffect(() => {
    setPieces(MetaState.content.roadmap)
  }, [MetaState])


  // Safari BS
  const videoParentRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (isSafari && videoParentRef.current) {
      // obtain reference to the video element
      const player = videoParentRef.current.children[0] as HTMLVideoElement;

      // if the reference to video player has been obtained
      if (player) {
        // set the video attributes using javascript as per the
        // webkit Policy
        player.controls = false;
        player.playsInline = true;
        player.muted = true;
        player.setAttribute("muted", ""); // leave no stones unturned :)
        player.autoplay = true;

        // Let's wait for an event loop tick and be async.
        setTimeout(() => {
          // player.play() might return a promise but it's not guaranteed crossbrowser.
          const promise = player.play();
          // let's play safe to ensure that if we do have a promise
          if (promise.then) {
            promise
              .then(() => { })
          }
        }, 0);
      }
    }

  }, [videoParentRef])

  return (
    <>

      <Box variant="layout.section">
        <Text variant="layout.section.roadmap.title">ROADMAP</Text>
        <Box variant="layout.section.roadmap.piecesContainer">
          {roadmapPieces.map((piece: RoadmapPiece) => <RoadmapPieceCol key={piece.title} piece={piece} />)}
        </Box>


        {/* !!IMPORTANT!! */}
        <BrowserView>
          <Box variant="layout.section.roadmap.videoContainer" sx={{
            display: ["none", "none", "none", "flex", "flex"],
          }}>
            <video autoPlay id="vid" preload="auto" muted loop style={{ borderRadius: "24px", width: "100%" }}>
              <source src={video3DAvatars} type="video/mp4" />
            </video>
          </Box>
        </BrowserView>

        <MobileOnlyView>
          <Box ref={videoParentRef} variant="layout.section.roadmap.videoContainer"
          sx={{display: ["flex", "flex", "flex", "none", "none"]}}>
            <video id="vid" autoPlay preload="auto" muted loop style={{ borderRadius: "24px", width: "100%" }}>
              <source src={video3DAvatar} type="video/mp4" />
            </video>
          </Box>
        </MobileOnlyView>

      </Box>
    </>
  )
}

export default Roadmap