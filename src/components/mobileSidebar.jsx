import "../components/css/mobileSidebar.css"
import { , SheetContent } from "@/components/ui/sheet"
import { Poppins } from "next/font/google"
import Link from "next/link"
const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})
export default function MobileSidebar() {
  return (
    <SheetContent side="left" className="w-[300px] sm:w-[400px] mobile-sidebar">
      <nav className="mobile-sidebar-content">
        {["Home", "Gallery", "Team"].map((item) => (
          <Link
            key={item}
            href={item !== "Home" ? `/${item.toLowerCase()}` : "/"}
            className={`mobile-sidebar-link ${poppins.className}`}
            style={{
              textShadow: `
                0 0 10px rgba(255,255,255,0.5),
                0 0 20px rgba(255,255,255,0.3),
                0 0 30px rgba(255,255,255,0.3)
              `,
            }}
          >
            {item}
          </Link>
        ))}
      </nav>
    </SheetContent>
  )
}

