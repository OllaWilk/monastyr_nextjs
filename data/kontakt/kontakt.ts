import { KontaktData } from "./kontakt-types";

export const kontaktData: KontaktData = {
  form: {
    title: "Wyślij intencję",
    description: "Napisz kilka słów. Zaniesiemy Twoją intencję w modlitwie.",
  },
  socials: {
    title: "Znajdź nas w social media",
    description: "Sprawdź aktualności, zdjęcia i krótkie rozważania.",
    links: [
      {
        icon: "/footer/facebook.svg",
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=61560330840377#",
      },
      {
        icon: "/footer/instagram.svg",
        name: "Instagram",
        url: "https://www.instagram.com/wspolnota_sw_krzysztofa",
      },
      {
        icon: "/footer/tiktok.svg",
        name: "TikTok",
        url: "https://www.tiktok.com/@monastyr.krzysztofa",
      },
    ],
  },
};
