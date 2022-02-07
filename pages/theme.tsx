import Head from "next/head";
import React from "react";
import Link from "next/link";
import Swal from "sweetalert2";

const Theme: React.FC = () => (
    <>
        <div className="w-screen h-screen flex justify-center items-center flex-col text-2xl">
            <h1>Choose your theme</h1>
            <div className="flex flex-row m-10">

                <MainTheme />

            </div>
        </div>
    </>
);
function MainTheme() {
    let r: HTMLElement;
    if (typeof window !== "undefined") {
        r = document.body!;
    }
    function themeChangeGreen() {
        if (typeof window !== "undefined") {
            Swal.fire(
                'The color is now Green'
            )

            r.style.setProperty("--colorMain", "#38ff53");
        }
    }
    function themeChangePink() {
        if (typeof window !== "undefined") {
            Swal.fire(
                'The color is now Pink'
            )

            r.style.setProperty("--colorMain", "#FF389C");
        }
    }
    function themeChangeDark() {
        Swal.fire(
            'The theme is now Dark'
        )
        r.style.setProperty("--ChangingBackground", "#000000");
        r.style.setProperty("--ChangingText", "#fff");
        r.style.setProperty("--itemLong", "#fff");
        r.style.setProperty("--itemShort", "#000000");
        r.style.setProperty("--itemText", "#000000");
        r.style.setProperty("--itemBorder", "#fff");
        r.style.setProperty("getTheme", 'black');
    }
    function themechangeLight() {
        Swal.fire(
            'The theme is now Light'
        )
        r.style.setProperty("--ChangingBackground", "#FDFDF");
        r.style.setProperty("--ChangingText", "#000000");
        r.style.setProperty("--itemLong", "#000000");
        r.style.setProperty("--itemShort", "#fff");
        r.style.setProperty("--itemText", "#fff");
        r.style.setProperty("--itemBorder", "#000000");
        r.style.setProperty("getTheme", 'white');

    }
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row">
                    <h2 className="m-4">Color: </h2>
                    <button id="changeThemeGreen" className="m-4" onClick={themeChangeGreen}>
                        Green
                    </button>
                    <button id="changeThemePink" className="m-4" onClick={themeChangePink}>
                        Pink
                    </button>
                </div>

                <div className="flex flex-row">
                    <h2 className="m-4">Theme: </h2>
                    <button id="changeThemeGreen" className="m-4" onClick={themeChangeDark}>
                        Dark
                    </button>
                    <button id="changeThemePink" className="m-4" onClick={themechangeLight}>
                        Light
                    </button>
                </div>
                <Link href="/">
                    <button id="themeDark" className="m-4 font-black">
                        Continue
                    </button>
                </Link>
            </div>


        </>
    );
}

export default Theme;
