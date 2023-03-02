import React from "react";
import { PagesPageBlocksTwoImages } from "../../../.tina/__generated__/types";
import Image from "next/image";
import placeholder from "./assets/placeholder.jpg";



const TwoImagesBlock = ({
  ...props
}: PagesPageBlocksTwoImages): JSX.Element => {


  return (
    <div className="flex md:flex-row cursor-pointer flex-col container mx-auto gap-6 items-center z-10">
      {props.imageList?.map((item: any, index: number) => (
        <div key={index * Math.random()}>
          <div className="grid grid-rows-1 border-2 border-black ">
            <div className="flex md:flex-row flex-col md:justify-between">
              <div className={`text-black ml-5 mt-5 md:text-[26px] text-xl font-bold `}>
                <div>{item.mainTitle}</div>
              </div>
              <section>
                <div className="flex flex-wrap justify-center  md:mr-5 mr-36 mt-5 mb-5 md:mb-0  text-gray-300">
                  <a
                    href={item.buttonLink}
                    className="button button--winona p-0 bg-gray-800 hover:bg-gray-700 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-xs md:text-sm text-center font-semibold uppercase tracking-widest align-middle overflow-hidden"
                    data-text="DISCOVER"
                  >
                    <span className="align-middle block">
                      {item.buttonTitle}
                    </span>
                  </a>
                </div>
              </section>
            </div>
            <div className="flex items-ceter justify-center content-center pl-20">
            <Image
              src={item?.heroImage || placeholder.src}
              alt={"/"}
              width={600}
              height={900}
            />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TwoImagesBlock;
