import { Geist, Geist_Mono, Jersey_10, Chicle } from "next/font/google";

export const chicle = Chicle({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-chicle",
});

export const pixelify = Jersey_10({
    subsets: ['latin'],
    weight: "400"
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});