export interface IntroContent {
  it: {
    title: string,
    content: string
  },
  does : {
    title: string,
    content: string
  }
}

export interface TeamMember {
  title: string;
  image: string;
  name: string;
  social: string;
}

export interface RoadmapPiece {
  content: string
  special: string
  title: string
  image: string
}

export interface Race {
  race: string,
  title: string,
  content: string[]
  image: string
}

export interface ImageObject {
  title: string,
  url: string
}

export interface Trait {
  title: string,
  content: string,
  images: ImageObject[],
  special: string
}

export interface FAQ {
  question: string
  content: string
}