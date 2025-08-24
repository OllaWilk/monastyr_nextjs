import { Cards, imageType } from "../general-types";

export interface IntroData {
  id: string;
  title: string;
  content: string[];
  subtitle?: string;
  image: imageType;
}
