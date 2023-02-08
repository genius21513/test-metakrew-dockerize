

export interface Animation {
  type: string;
  ref: HTMLDivElement | null;
  duration: number;
  options: {
    opacity?: number;
    y?: number;
    x?: number;
    ease?: gsap.EaseFunction;
  };
}