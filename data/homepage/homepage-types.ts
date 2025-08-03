import { imageType } from "../general-types";

export interface HeaderData {
  title: string;
  ctaText: string;
  buttonLabel: string;
  buttonLink: string;
  image: imageType;
}

export interface QuoteData {
  logo: {
    width: number;
    height: number;
    link: boolean;
  };
  title: string;
  verseLines: string[];
  verseReference: string;
}

export interface TopicCard {
  title: string;
  description: string;
  href: string;
  img: imageType;
}
