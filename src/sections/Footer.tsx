import { Box, Link, Text, Image } from "theme-ui";

const iconDimensions = 20

export const Footer: React.FC = () => {
  return (
    <>
      {/*  Footer */}

      <Box id="footer" variant="layout.section.footer">
        <Box variant="layout.section.footer.iconsContainer">
          <Link variant="layout.section.footer.iconsContainer.link"
            sx={{
              ml: "2rem",
              "&:hover": {
                background: "#5864F3",
              },
            }}
            href="https://discord.gg/metakey"
          >
            <Image src={'/icon-discord.80ff3eb7.svg'} width={iconDimensions} height={iconDimensions} alt="Discord Logo" />
          </Link>
          <Link variant="layout.section.footer.iconsContainer.link"
            sx={{
              mx: "2rem",
              "&:hover": {
                background: "#2181E3",
              },
            }}
            href="https://opensea.io/collection/the-meta-key"
          >
            <Image src={'opensea.svg'} width={iconDimensions} height={iconDimensions} alt="Opensea Logo" />
          </Link>
          <Link variant="layout.section.footer.iconsContainer.link"
            sx={{
              mr: "2rem",
              "&:hover": {
                background: "#1C9BF1",
              },
            }}
            href="https://twitter.com/themetakey"
          >
            <Image src={'/icon-twitter.6c04881e.svg'} width={iconDimensions} height={iconDimensions} alt="Twitter Logo" />
          </Link>
          <Link variant="layout.section.footer.iconsContainer.link"
            sx={{
              mr: "2rem",
              "&:hover": {
                background: "red",
              },
            }}
            href="https://www.youtube.com/channel/UC46Ux6N7c6w5WUWDxbLxZ6A"
          >
            <Image src={'youtube_icon.svg'} width={iconDimensions} height={iconDimensions} alt="Youtube Logo" />
          </Link>
        </Box>
        <Box variant="layout.section.footer.labelContainer">
          <Text>Copyright &copy; Metakey 2021</Text>
        </Box>
      </Box>
    </>
  );
};

export default Footer
