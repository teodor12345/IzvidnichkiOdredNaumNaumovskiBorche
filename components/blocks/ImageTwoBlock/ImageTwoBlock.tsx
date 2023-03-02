import React from "react";
import { PagesPageBlocksImageTwo } from "../../../.tina/__generated__/types";
import Image from "next/image";
import placeholder from "./assets/placeholder.jpg";

const ImageTwoBlock = ({
  ...props
}: PagesPageBlocksImageTwo): JSX.Element => {


  return (
    <div className="flex md:flex-row cursor-pointer flex-col container mx-auto gap-6 gap-x-20 items-center z-5">
      {props.imageList?.map((item: any, index: number) => (
        <div key={index * Math.random()}>
          <div className="grid grid-rows-1  ">
            <div className="flex md:flex-row absolute z-10 flex-col md:justify-between">
              <div className={`text-white ml-5 mt-5 md:text-[26px] text-xl font-bold `}>
                <div>
                  
                  {item.mainTitle}
                  
                  </div>
              </div>
              <section>
                <div className="flex flex-wrap justify-center 2xl:ml-[180px]   mt-3 mb-5   text-gray-400">
                  <a
                    href={item.buttonLink}
                    className="button button--winona p-0 bg-gray-200 hover:bg-gray-300 hover:text-gray-800 relative block focus:outline-none  rounded-lg text-xs md:text-sm text-center font-semibold uppercase tracking-widest align-middle overflow-hidden"
                    data-text="DISCOVER"
                  >
                    <span className="align-middle block">
                      {item.buttonTitle}
                    </span>
                  </a>
                </div>
              </section>
            </div>
            <div className="flex ">
            <Image
              src={item?.heroImage || placeholder.src}
              alt={"/"}
              width={650}
              height={900}
            />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageTwoBlock;
