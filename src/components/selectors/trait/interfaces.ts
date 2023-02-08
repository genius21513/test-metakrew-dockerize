import { ThemeUIStyleObject } from "theme-ui";


export interface TraitSelectorState {
  title: string,
  content: string,
  images: ImageObject[],
  special: string
}

export interface TraitSelectorProps {
  theme: ThemeUIStyleObject
}

export interface ImageObject {
  title: string,
  url: string
}