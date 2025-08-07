export interface NavigationTypes {
  name: string;
  url: string;
  icon?: string;
}

export interface imageType {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Subheader {
  title: string;
  subtitle?: string;
  content?: string[];
  buttonLabel?: string;
  buttonLink?: string;
  image: imageType;
}
