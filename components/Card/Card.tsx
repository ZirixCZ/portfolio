import React from 'react'
import Image from 'next/image'

type ItemProps = {
    link: string;
    header: string;
    picture: string;
    width: number;
}

const Card: React.FC<ItemProps> = ({ children , header, link, picture, width}) => {
    return (
        <>
            <div className="h-full w-screen flex items-center justify-center text-White">
                <div className="xl:h-2/4 h-full w-full xl:w-5/6 bg-GreyDark rounded-2xl mt-32 xl:mt-56">
                    <Image className="m-20 rounded-2xl" src={picture} height={140} width={width}></Image>
                    <div className="h-full w-full bg-GreyDark rounded-2xl flex flex-col justify-center">
                        <h5 className="xl:m-10 text-3xl xl:text-5xl mt-16 m-10 self-center">{header}</h5>
                        <p className="m-5 xl:m-20 text-lg xl:text-2xl">Discord bot created to show information about the timetable. E.g time until certain events take place. Inspired by the Delta Time mobile app by MadSoft.cz.   <a className="text-Green  underline" href={link} target="_blank">Check it out on GitHub</a></p>
                        
                    </div>

                </div>
            </div>
        </>
        
    )
}
export default Card