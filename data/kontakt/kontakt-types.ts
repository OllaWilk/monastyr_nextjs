import { Cards, imageType } from "../general-types";

export interface IntroData {
  id: string;
  title: string;
  content: string[];
  subtitle?: string;
  image: imageType;
}

export interface KontaktData {
  form: {
    title: string;
    description: string;
  },
  socials: {
    title: string;
    description: string;
    links: {icon: string; name: string; url: string }[];
  };
}
