import { useWeb3React } from "@web3-react/core";
import React from "react";
import { BrowserView } from "react-device-detect";
import { Box, Text, ThemeUIStyleObject, Image, Button } from "theme-ui";

import { shortenAddress } from "../../utils";

interface Props {
  sx: ThemeUIStyleObject
  value?: string
  href?: string
}

export const LilSqr = React.forwardRef<any, Props>(({ sx }, ref) => (
  <Box ref={ref} variant="layout.animation.lilSquare" sx={{ ...sx }} />
));

export const LilCircle = React.forwardRef<any, Props>(({ sx }, ref) => (
  <Box ref={ref} variant="layout.animation.lilCircle" sx={{ ...sx }} />
));

export const TextAObject = React.forwardRef<any, Props>(({ sx, value }, ref) => (
  <Text ref={ref} variant="layout.animation.textObject" sx={{ ...sx }}>{value}</Text>
))

export const LinksObject = React.forwardRef<any, Props>(({ sx }, ref) => (
  <BrowserView>
    <Box variant="layout.animation.linksObject" sx={{ ...sx }}>
      <Box variant="layout.animation.linksObject.linkBox" onClick={() => { window.open("https://twitter.com/themetakey", "_blank"); }}>
        <Text sx={{ mr: "1rem" }}>TWITTER</Text>
        <Image src={'icon-twitter.6c04881e.svg'} width="15px" height="15px" alt="Twitter Logo" />
      </Box>
      <Box variant="layout.animation.linksObject.linkBox" sx={{ ml: "2rem" }} onClick={() => { window.open("https://discord.com/invite/metakey", "_blank"); }} >
        <Text sx={{ mr: "1rem" }}>DISCORD</Text>
        <Image src={'icon-discord.80ff3eb7.svg'} width="15px" height="15px" alt="Discord Logo" />
      </Box>
    </Box>
  </BrowserView>
))


export const MintButton = React.forwardRef<any, Props>(({ sx }, ref) => {

  const { active, account } = useWeb3React()

  return (
    <Button variant="layout.animation.mintButton" onClick={() => { document.getElementById("mint")?.scrollIntoView({ behavior: 'smooth' }) }} ref={ref} sx={{ ...sx }}>
      {active && account ? shortenAddress(account) : 'MINT'}
    </Button>
  )
})

/*
interface MenuSVGProps {
  sx: ThemeUIStyleObject
}

export const MenuSVG = React.forwardRef<any, MenuSVGProps>(({ sx }, ref) => (
  <Box ref={ref} onClick={() => { }} sx={{ ...sx }}>
    <svg preserveAspectRatio="xMidYMid meet" data-bbox="17 32.5 166 135" xmlns="http://www.w3.org/2000/svg" width={`100%`} height={`100%`} viewBox="17 32.5 166 135" data-type="shape" role="presentation" aria-hidden="true" aria-labelledby="svgcid-pfn61c-q0mbf4"><title id="svgcid-pfn61c-q0mbf4"></title>
      <g>
        <path d="M88.1 32.5v16H17v-16h71.1z" fill="#49CFDE"></path>
        <path d="M183 151.5v16h-71.1v-16H183z" fill="#49CFDE"></path>
        <path d="M183 92v16H17V92h166z" fill="#49CFDE"></path>
      </g>
    </svg>
  </ Box>
))
*/