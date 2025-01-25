import "./globals.css";
import { Inria_Sans, Poppins } from "next/font/google";
import Navbar from "../components/Navbar";
import CanvasAnimation from "../components/CanvasAnimation";
export const metadata = {
  title: "CSEC",
  description: "CSEC Website ",
};
const inria2 = Inria_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link rel="icon" href="csec.svg" sizes="any" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
            rel="stylesheet"
          />
        </head>
      </head>
      <body className={"dark:bg-slate-950 " + poppins.className}>
        <div className="fixed top-0 left-0 w-full h-full z-[-1]">
          {/* <CanvasAnimation /> */}
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
