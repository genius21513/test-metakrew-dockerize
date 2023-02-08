import { ThemeUIStyleObject } from "theme-ui";


export interface RaceSelectorState {
  race: string,
  title: string,
  content: string[]
  image: string
}

export interface RaceSelectorProps {
  theme: ThemeUIStyleObject
}

export interface RaceProps {
  content: RaceSelectorState
  handleClick: any
  selected: boolean
}

export interface RaceContentProps {
  content: string
}
