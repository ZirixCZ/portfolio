import React from "react";
import Link from "next/link";
import Image from "next/image";

type ItemProps = {
  link: string;
  header: string;
  picture: string;
  width: number;
};

const Item: React.FC<ItemProps> = ({
  children,
  header,
  link,
  picture,
  width,
}) => {
  return (
    <div className="flex justify-center mb-20 w-full h-28">
      <Link href={link}>
        <div className="flex w-10/12 md:w-7/12 h-full border-4 itemBorder cursor-pointer xl:w-36rem itemLong hover:-translate-y-1 duration-300 transition ease-in-out">
          <div className="xl:w-2/9 itemShort">
            <div className="flex items-center mx-0 w-full  h-full mx-0 xl:mx-5">
              <Image
                className="relative rounded-full"
                src={picture}
                height={80}
                width={width}
              ></Image>
            </div>
          </div>
          <div className="flex items-center w-3/4 h-full">
            <h4 className="m-20 text-2xl xl:text-4xl itemText xl:tracking-widest">
              {header}
            </h4>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Item;
