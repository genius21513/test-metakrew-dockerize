import { useEffect, useState } from "react"
import { isBrowser } from "react-device-detect"
import { Box, Text, Button, Image } from "theme-ui"
import { useMetaContext } from "../context"


const key = "https://res.cloudinary.com/metakey/image/upload/f_png/q_auto:eco/c_scale,w_500/v1636434310/metakrewLandingPageNew/key_lny8fs.gif"

interface BroughtProp {
  title: string
  content: string
}

export const Brought: React.FC = () => {

  const { MetaState } = useMetaContext()

  const [brought, setBrought] = useState<BroughtProp>({ title: "", content: "" })

  useEffect(() => {
    setBrought(MetaState.content.brought)
  }, [MetaState])

  return (
    <>
      <Box id="brought" variant="layout.section" sx={{ display: "flex", flexDirection: ["column", "column", "column", "row"] }}>

        {/* Left */}
        <Box variant="layout.section.brought.left">
          {isBrowser && (
            <Box sx={{ width: "100%", height: "fit-content" }}>
              <Image src={key} sx={{ width: "100%", height: "auto" }} />
            </ Box>
          )}

        </Box>
        {/* Right */}
        <Box variant="layout.section.brought.right">
          <Text variant="layout.section.brought.right.broughtToYouByText">Brought to you by</Text>
          <Text variant="layout.section.brought.right.title">{brought.title}</Text>
          <Text variant="layout.section.brought.right.content">{brought.content}</Text>

          <Button variant="layout.section.brought.right.button" onClick={() => { window.open("https://themetakey.com", "_blank"); }} >
            Explore
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Brought