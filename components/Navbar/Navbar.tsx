import React from 'react'
import Link from 'next/link'
const Navbar: React.FC<{}> = ({ children }) => {
    return (
        <nav className="text-center fixed z-10 w-full h-24 bg-NavBar flex items-center justify-center font-UbuntuMono text-White border-b-2 border-HTMLTag shadow-2xl text-2xl l:text-3xl">
        <Link href="/"><a className="m-7 ">Root</a></Link>
        <Link href="/projects"><a className="m-7 text-text-WhiteFont">Projects</a></Link>
        <Link href="/about"><a className="m-7text-text-WhiteFont">Contact</a></Link>
        </nav>
    )
} 
export default Navbar;