import { Box, Text } from "theme-ui"

interface Props {
  content: string
  title: string
}

export const IntroContent: React.FC<Props> = ({ title, content}) => {
  return (
    <Box variant="layout.components.introContent">
      <Text variant="layout.components.introContent.title">{title.toUpperCase()}</Text>
      <Text variant="layout.components.introContent.content">{content}</Text>
    </Box>)
}