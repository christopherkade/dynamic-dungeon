import { Props as ImageCardProps } from "../components/ImageCard";

import ForestImg from "../../../public/forest.jpg";
import TownImg from "../../../public/waterdeep.jpeg";
import CastleImg from "../../../public/naerytar.jpeg";
import SurpriseImg from "../../../public/surprise.jpeg";

const DEFAULT_ADVENTURES: Record<string, ImageCardProps> = {
  random: {
    image: SurpriseImg,
    title: "Surprise me",
    href: "/adventure/random",
  },
};

const ADVENTURES: Record<string, ImageCardProps> = {
  lurkwoods: {
    image: ForestImg,
    title: "The Lurkwoods",
    href: "/adventure/lurkwoods",
  },
  waterdeep: {
    image: TownImg,
    title: "Waterdeep",
    href: "/adventure/waterdeep",
  },
  naerytar: {
    image: CastleImg,
    title: "Castle Naerytar",
    href: "/adventure/naerytar",
  },
  ...DEFAULT_ADVENTURES,
};

export default ADVENTURES;
