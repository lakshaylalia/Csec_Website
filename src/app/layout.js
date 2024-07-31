import "./globals.css";
import { Inria_Sans } from "next/font/google";
import Navbar from "../components/Navbar";
export const metadata = {
  title: "CSEC",
  description: "CSEC Website",
};
const inria2 = Inria_Sans({
  display: 'swap',
  subsets: ['latin'],
  weight: ["300", "400", "700"]
})
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="icon" href="/csec.svg" sizes="any" />
          <link href="https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet" />
        </head>
      </head>
      <body className={"dark:bg-slate-950 "+(inria2.className)}>
      <Navbar/>
        {children}</body>
    </html>
  );
}
