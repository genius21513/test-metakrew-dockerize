import React from "react";
import { Box, Text } from "theme-ui";
import { Claim } from "../components/mint/Claim";
import { useMetaContext } from "../context";

const backgroundImage = "https://res.cloudinary.com/metakey/image/upload/q_auto:eco/v1636448182/metakrewLandingPageNew/mintBackground_sptsy8.webp"

export const Mint: React.FC = () => {


  const { endClaimDeadline }  = useMetaContext()
  const now = Math.round(new Date().getTime() / 1000);

  const distance = Number(endClaimDeadline) - now;

  return (
    <>
      <Box id="mint" variant="layout.section"
        sx={{
          height: "600px",
        }}
      >
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "24px",
          height: "100%",
          width: "100%",
          backgroundSize: "cover",
          backgroundImage: `url(${backgroundImage})`,
          paddingX: ["2rem", "4rem"],
          paddingY: ["1.5rem", "3rem"],
          }}>
          {/* Content */}
          <Text variant="layout.section.mint.title">
            {distance > 0 ? "CLAIM MY KREW MATE: OPEN" : "CLAIM MY KREW MATE: CLOSED"}
          </Text>
          <Text variant="layout.section.mint.content">
            The Metakrew is 9750 randomly generated unique avatars  on the Ethereum
            Blockchain.
          </Text>
          <Claim/>
        </Box>
      </Box>
    </>
  );
};

export default Mint
