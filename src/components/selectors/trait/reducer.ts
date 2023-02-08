import { TraitSelectorState } from "./interfaces"

export interface SetTraitSelectorContent {
  data: TraitSelectorState
}

type Action = SetTraitSelectorContent

export function traitSelectorReducer(state: TraitSelectorState, action: Action) {
  return Object.assign({}, state, { title: action.data.title, content: action.data.content, images: action.data.images, special: action.data.special })
}
