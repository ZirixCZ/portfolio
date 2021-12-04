import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type ItemProps = {
    link: string;
    header: string;
    picture: string;
    width: number;
}

const Item: React.FC<ItemProps> = ({ children , header, link, picture, width}) => {
    return (
        <div className="flex justify-center mb-20 w-full h-32">
            <Link href={link}>
                <div className="flex w-11/12 h-5/6 rounded-2xl cursor-pointer xl:w-36rem bg-White">
                    <div className="flex items-center mx-0 w-1/4 h-full xl:mx-10">
                        <Image className="relative rounded-full" src={picture} height={80} width={width}></Image>
                    </div>
                    <div className="flex items-center w-3/4 h-full">
                        <h4 className="m-20 text-2xl xl:text-4xl text-BackgroundPageDefault">{header}</h4>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default Item