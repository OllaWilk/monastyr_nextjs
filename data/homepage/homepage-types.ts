export interface imageType {
  src: string;
  alt: string;
}
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
