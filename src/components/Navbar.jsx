"use client"

import * as React from "react"
import Link from "next/link"
import { Inria_Sans } from "next/font/google";

import { Menu, Search } from "lucide-react"

const inria = Inria_Sans({
    display: 'swap',
    subsets: ['latin'],
    weight: ["300", "400", "700"]
})
export default function Navbar() {
    const [state, setState] = React.useState(false)

    const menus = [
        { title: "Home", path: "/" },
        { title: "Gallery", path: "/gallery" },
        { title: "Alumni", path: "/alumni" },
        { title: "Contact", path: "/contact" },
    ]

    return (
        <nav className="bg-slate-900 w-full border-b md:border-0">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center gap-4 md:justify-end justify-between py-3 md:py-5 md:block">
                    <Link href="/">
                        <img src="csec.svg"/>
                    </Link>
                    <div className="md:hidden">
                        <button
                            className={"text-white text-xl outline-none p-2 rounded-md focus:border-gray-300 focus:border "+(inria.className)}
                            onClick={() => setState(!state)}
                        >
                            <Menu />
                        </button>
                    </div>
                </div>
                <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? "block" : "hidden"
                        }`}
                >
                    <ul className="justify-end items-center text-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {menus.map((item, idx) => (
                            <li key={idx} className={"text-white text-xl px-4 hover:text-gray-300 "+(inria.className)}>
                                <Link href={item.path}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}