import { Footer as FooterSection } from "./Footer";
import { Roadmap as RoadmapSection } from "./Roadmap";
import { Intro as IntroSection} from "./Intro";
import { Race as RaceSection } from "./Race";
import { lazy } from "react";

export const Footer = FooterSection
export const Roadmap = RoadmapSection
export const Intro = IntroSection
export const Race = RaceSection



// Lazy loading
export const FAQs = lazy(() => import("./FAQs"));
export const Team = lazy(() => import("./Team"));
export const Mint = lazy(() => import("./Mint"));
export const Brought = lazy(() => import("./Brought"));