import { RaceSelectorState } from "./interfaces"

export interface RaceSelectorSetContent {
  data: RaceSelectorState
}


type Action = RaceSelectorSetContent

export function raceSelectorReducer(state: RaceSelectorState, action: Action) {
  return Object.assign({}, state, { race: action.data.race, title: action.data.title, content: action.data.content, image: action.data.image })
}