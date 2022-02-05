import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
type ItemProps = {
    prop: string;
    color: string;
    color1: string;
    color2: string;
}
console.log("before html");
const Navbar: React.FC<ItemProps> = ({ children, prop, color, color1, color2 }) =>
    <>
    
        <nav className={prop}>
            <Link href="/theme"><a className="absolute left-0 ml-8">Theme</a></Link>
            <Link href="/"><a className={color}>Root</a></Link>
            <p className="m-4" id="itemNavbarPara">/</p>
            <Link href="/projects"><a className={color1}>Projects</a></Link>
            <p className="m-4" id="itemNavbarPara">/</p>
            <Link href="/about"><a className={color2}>Contact</a></Link>
            <App/>
        </nav>
    </>
let isSwitched = true;
function App() {
    function themeChange() {
        if (typeof window !== 'undefined') {

            let r: HTMLElement = document.body!;
    
            if (isSwitched) {
                r.style.setProperty("--ChangingBackground", "#000000");
                r.style.setProperty("--ChangingText", "#fff");
                r.style.setProperty("--itemLong", "#fff");
                r.style.setProperty("--itemShort", "#000000");
                r.style.setProperty("--itemText", "#000000");
                r.style.setProperty("--itemBorder", "#fff");
                r.style.setProperty("getTheme", 'black');
                isSwitched = false;
                console.log("turn dark");
            }
            else {
                r.style.setProperty("--ChangingBackground", "#FDFDF");
                r.style.setProperty("--ChangingText", "#000000");
                r.style.setProperty("--itemLong", "#000000");
                r.style.setProperty("--itemShort", "#fff");
                r.style.setProperty("--itemText", "#fff");
                r.style.setProperty("--itemBorder", "#000000");
                r.style.setProperty("getTheme", 'white');
                isSwitched = true;
                console.log("turn light");
            }
            
        }
    }
    return (
        <button id="themechanger" className="m-4" onClick={themeChange}>
            <img className="max-h-6" src={!isSwitched ? "/images/icons8-moon-symbol-50.png" : "/images/icons8-sun-30.png"}></img>
        </button>
    );
}

export default Navbar;