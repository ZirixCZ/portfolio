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
                <Link href="/">
                    <button id="themeDark" className="mr-4 font-black">
                        Continue
                    </button>
                </Link>
            </div>
        </div>
    </>
);
function MainTheme() {
    function themeChangeGreen() {
        if (typeof window !== "undefined") {
            let r: HTMLElement = document.body!;
            alert("theme changed to green");

            r.style.setProperty("--colorMain", "#38ff53");
        }
    }
    function themeChangePink() {
        if (typeof window !== "undefined") {
            let r: HTMLElement = document.body!;
            Swal.fire(
                'The theme is now Pink'
              )

            r.style.setProperty("--colorMain", "#FF389C");
        }
    }
    return (
        <>
            <button id="changeThemeGreen" className="m-4" onClick={themeChangeGreen}>
                Green
            </button>
            <button id="changeThemePink" className="m-4" onClick={themeChangePink}>
                Pink
            </button>
        </>
    );
}

export default Theme;
