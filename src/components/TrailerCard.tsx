import React from "react"
import { Box } from "theme-ui"

interface Props {
  sx?: any
}

const trailerURI = "https://res.cloudinary.com/metakey/video/upload/v1636425469/metakrewLandingPage/trailer_FINAL_24_1080_yfzcru.mp4"

export const TrailerCard = React.forwardRef<any, Props>(({ sx }, ref) => {
  return (
    <>
      <Box ref={ref} sx={{...sx}}>
        <video controls src={trailerURI} style={{ width : "100%", height: "auto"}} />
      </ Box>
    </>
  )
})