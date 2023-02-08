import { Animation } from '../interfaces/animation'
import gsap from 'gsap'

export const runAnimation = (animation: Animation) => {
  switch (animation.type) {
    case 'to':
      gsap.to(animation.ref, animation.duration, animation.options)
      break;
    case 'from':
      gsap.from(animation.ref, animation.duration, animation.options)
      break;
    default:
      return
  }
}