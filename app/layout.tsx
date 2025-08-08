import type { Metadata } from "next";
import { Montserrat, Cormorant } from "next/font/google";
import { Navigation } from "@/components/Navigation/Navigation";
import { Footer } from "@/components/Footer/Footer";
import "../styles/globals.scss";

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const cormorant = Cormorant({
  variable: "--font-head",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monastyr Świętego Krzysztofa",
  description: "Oficjalna strona monastyru Świętego Krzysztofa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${montserrat.variable} ${cormorant.variable} `}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
