import React from 'react';
import { Box, Text } from "theme-ui";


export const Loading: React.FC = () => {
  return (
    <Box id="loading" variant="layout.section" sx={{ display: "flex", flexDirection: "column", mb: "3rem", mx: "auto" }}>
      <Text variant="layout.components.loading.text">Loading...</Text>
    </ Box>
  )
}