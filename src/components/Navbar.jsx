"use client"

import * as React from "react"
import Link from "next/link"
import { Inria_Sans } from "next/font/google";

import { Menu } from "lucide-react"

const inria = Inria_Sans({
    display: 'swap',
    subsets: ['latin'],
    weight: ["300", "400", "700"]
})

export default function Navbar() {
    const [state, setState] = React.useState(false)
    const menuRef = React.useRef(null)

    const menus = [
        { title: "Home", path: "/" },
        { title: "Gallery", path: "/gallery" },
        { title: "Team", path: "/alumni" },
    ]

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setState(false)
            }
        }

        if (state) {
            document.addEventListener("mousedown", handleClickOutside)
        } else {
            document.removeEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [state])

    return (
        <nav className="bg-slate-900 w-full border-b md:border-0 sticky top-0 z-50">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center gap-4 md:justify-end justify-between py-3 md:py-5 md:block">
                    <Link href="/">
                        <img src="csec.svg" alt="Logo" />
                    </Link>
                    <div className="md:hidden">
                        <button
                            className={"text-white text-xl outline-none p-2 rounded-md focus:border-gray-300 focus:border " + inria.className}
                            onClick={() => setState(!state)}
                        >
                            <Menu />
                        </button>
                    </div>
                </div>
                
                {/* Mobile menu */}
                <div
                    ref={menuRef}
                    className={`fixed top-0 right-0 h-full bg-slate-900 transition-transform duration-300 ease-in-out z-50 ${
                        state ? "translate-x-0" : "translate-x-full"
                    } w-1/2 md:hidden`}
                >
                    <div className="flex justify-between items-center p-4">
                        <h2 className="text-white text-xl font-bold pl-4">CSEC</h2>
                        <button
                            className="text-white text-3xl pr-8"
                            onClick={() => setState(false)}
                        >
                            &times; {/* Close icon */}
                        </button>
                    </div>
                    
                    <ul className="flex flex-col items-start space-y-4 p-4">
                        {menus.map((item, idx) => (
                            <li key={idx} className={"text-white text-xl px-4 hover:text-gray-300 " + inria.className}>
                                <Link href={item.path} onClick={() => setState(false)}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>

                    {/* Social Media Icons */}
                    <div className="absolute bottom-0 pb-6 pl-8 flex space-x-6">
                        <Link href="https://www.instagram.com" target="_blank">
                            <img src="instagram.svg" alt="Instagram" className="w-6 h-6" />
                        </Link>
                        <Link href="https://discord.com" target="_blank">
                            <img src="discord.svg" alt="Discord" className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
                
                {/* Desktop menu */}
                <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 hidden`}>
                    <ul className="justify-end items-center text-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {menus.map((item, idx) => (
                            <li key={idx} className={"text-white text-xl px-4 hover:text-gray-300 " + inria.className}>
                                <Link href={item.path}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}