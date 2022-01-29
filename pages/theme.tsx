import Head from "next/head";
import React from "react";
import Link from "next/link";

const Theme: React.FC = () =>
    <>
        <div className="textBlack w-screen h-screen flex justify-center items-center flex-col">
            <h1>Choose your theme</h1>
            <div className="flex flex-row m-10">
                <Link href="/"><button id="themeDark" className="mr-4">Dark</button></Link>
                <Link href="/"><button id="themeLight" className="ml-4">White</button></Link>
            </div>
        </div>
    </>
if (process.browser) {
    let r: HTMLElement = document.querySelector(':root')!;

    document.getElementById("themeDark")?.addEventListener('click', function () {
        getDark(r);
    })
    document.getElementById("themeLight")?.addEventListener('click', function () {
        getLight(r);
    })
    
}
function getDark(r: HTMLElement) {

    r.style.setProperty("--ChangingBackground", "#000000");
    r.style.setProperty("--ChangingText", "#fff");
    r.style.setProperty("--itemLong", "#fff");
    r.style.setProperty("--itemShort", "#000000");
    r.style.setProperty("--itemText", "#000000");
    r.style.setProperty("--itemBorder", "#fff");

    console.log("turn dark");

}

function getLight(r: HTMLElement) {

    r.style.setProperty("--ChangingBackground", "#FDFDF");
    r.style.setProperty("--ChangingText", "#000000");
    r.style.setProperty("--itemLong", "#000000");
    r.style.setProperty("--itemShort", "#fff");
    r.style.setProperty("--itemText", "#fff");
    r.style.setProperty("--itemBorder", "#000000");

    console.log("turn light");

}

export default Theme;