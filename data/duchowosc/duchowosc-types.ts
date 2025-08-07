import { Cards, imageType } from "../general-types";

export interface IntroData {
  id: string;
  title: string;
  content: string[];
  subtitle?: string;
  image: imageType;
}

export interface MercyData {
  title: string;
  content: string[];
}

export interface HistoryData {
  header: string;
  subtitle: string;
  cards: Cards[];
  conclusion: string;
}
