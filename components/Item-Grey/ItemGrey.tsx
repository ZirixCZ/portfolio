import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type ItemProps = {
    link: string;
    header: string;
    picture: string;
    width: number;
}

const ItemGrey: React.FC<ItemProps> = ({ children , header, link, picture, width}) => {
    return (
        <div className="h-32 w-full flex justify-center mb-20">
            <Link href={link}>
                <div className="h-full w-full xl:w-36rem bg-Grey flex cursor-pointer rounded-2xl">
                    <div className="h-full w-1/4 flex items-center mx-0 xl:mx-10">
                        <Image className="relative rounded-full" src={picture} height={80} width={width}></Image>
                    </div>
                    <div className="h-full w-3/4 flex items-center">
                        <h4 className="m-20 text-2xl xl:text-4xl text-White">{header}</h4>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default ItemGrey