import React from 'react'
import Link from 'next/link'
const Navbar: React.FC<{}> = ({ children }) => {
    return (
        <nav className="fixed z-10 w-full h-24 bg-NavBar flex items-center justify-center font-UbuntuMono text-White border-b-2 border-HTMLTag shadow-2xl">
        <Link href="/"><a className="m-7 text-3xl">Root</a></Link>
        <Link href="/projects"><a className="m-7 text-3xl text-text-WhiteFont">Projects</a></Link>
    </nav>
    )
}
export default Navbar;