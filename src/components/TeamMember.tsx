import React from "react";
import { useEffect, useRef } from "react";
import { Box, Text } from "theme-ui";
import gsap, { Power3 } from "gsap";

const twitterBackground = "https://res.cloudinary.com/metakey/image/upload/c_scale,w_400/v1636457014/metakrewLandingPageNew/twitterBackground_k2sbz0.png"

export interface TeamMemberProps {
  title: string;
  image: string;
  name: string;
  social: string;
}

export const TeamMember: React.FC<TeamMemberProps> = ({ title, image, name, social }) => {
  const ref = useRef(null);
  const animationOffset = 20;
  useEffect(() => {
    gsap.to(ref.current, 1.5, {
      opacity: 1,
      y: -animationOffset,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <>
      <Box
        ref={ref}
        onClick={() => {
          social !== "" ? window.open(social, "_blank") : console.log("no link");
        }}
        variant="layout.section.team.teamMemberContainer.teamMember"
      >
        <Box
          variant="layout.section.team.teamMemberContainer.teamMember.imageBox"
          sx={social !== ""
            ? {
              backgroundImage: `url(${image})`,
              ":hover": { backgroundImage: `url(${twitterBackground})` },

            } : {
              backgroundImage: `url(${image})`,
            }

          }
        />
        <Text variant="layout.section.team.teamMemberContainer.teamMember.text">{name}</Text>
        <Text variant="layout.section.team.teamMemberContainer.teamMember.text" sx={{ fontWeight: 800 }}>{title}</Text>
      </Box>
    </>
  );
};