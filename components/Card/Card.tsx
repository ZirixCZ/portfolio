import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Navbar} from "@/components/Navbar";

type ItemProps = {
    link: string;
    header: string;
    picture: string;
    width: string;
}

const Card: React.FC<ItemProps> = ({ children , header, link, picture, width}) => {
    return (
        <>
            <div className="h-full w-screen flex items-center justify-center text-BackgroundPageDefault">
                <div className="xl:h-2/4 h-full w-full xl:w-5/6 bg-White rounded-2xl mt-40">
                    <Image className="m-20 rounded-2xl" src={picture} height={160} width={width}></Image>
                    <div className="h-full w-full bg-White rounded-2xl flex flex-col justify-center">
                        <h5 className="xl:m-20 text-3xl xl:text-7xl mt-40 m-10">{header}</h5>
                        <p className="m-5 xl:m-20 text-lg xl:text-3xl">Discord bot created to show information about the timetable. E.g time until certain events take place. Inspired by the Delta Time mobile app by MadSoft.cz.   <a className="text-BlueDefault  underline" href={link} target="_blank">Check it out on GitHub</a></p>
                        
                    </div>

                </div>
            </div>
        </>
        
    )
}
export default Card