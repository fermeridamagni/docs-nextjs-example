import { Poppins } from "next/font/google";

export const fontText = Poppins({
  style: "normal",
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-text",
});
