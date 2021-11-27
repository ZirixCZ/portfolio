import React from 'react'
import Link from 'next/link'
type ItemProps = {
    prop: string;
}
const Navbar: React.FC<ItemProps> = ({ children, prop }) => {
    return (
        <nav className={prop}>
        <Link href="/"><a className="m-7 ">Root</a></Link>
        <Link href="/projects"><a className="m-7 text-text-WhiteFont">Projects</a></Link>
        <Link href="/about"><a className="m-7text-text-WhiteFont">Contact</a></Link>
        </nav>
    )
} 
export default Navbar;