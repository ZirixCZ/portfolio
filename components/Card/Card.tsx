import React from 'react'
import Image from 'next/image'

type ItemProps = {
    link: string;
    header: string;
    picture: string;
    width: number;
}

const Card: React.FC<ItemProps> = ({ children, header, link, picture, width }) => {
    return (
        <>
            <div className="h-screen w-screen overflow-hidden flex items-center justify-center bg-Black text-White">
                <div className="xl:h-2/4 h-full w-full xl:w-5/6 bg-Black mt-32 xl:mt-0 rotate-anim">
                    
                    <div className="h-full w-full bg-Black rounded-2xl flex flex-col justify-center">
                        <h5 className="xl:m-10 text-3xl xl:text-5xl mt-16 m-10 self-center"><Image className="rounded-2xl pt-10" src={picture} height={140} width={width}></Image>{header}</h5>
                        <p className="m-5 xl:m-20 text-lg xl:text-2xl">Discord bot created to show information about the timetable. E.g time until certain events take place. Inspired by the Delta Time mobile app by MadSoft.cz.   <a className="text-OpenClosing  underline" href={link} target="_blank">Check it out on GitHub</a></p>

                    </div>

                </div>
            </div>
        </>

    )
}
export default Card