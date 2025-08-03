import { imageType } from "../general-types";


export interface HeaderData {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  image: imageType;
}

export interface IntroData {
  id: string;
  title: string;
  content: string[];
  subtitle?: string;
  image?: {
    src: string;
    alt: string;
  };
}
