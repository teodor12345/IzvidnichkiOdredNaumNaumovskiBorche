import React from "react";
import { PagesPageBlocksImage } from "../../../.tina/__generated__/types";
import Image from "next/image";
import placeholder from "./assets/placeholder.jpg";
import { TinaMarkdown } from "tinacms/dist/rich-text";


const ImageBlock = ({ ...props }: PagesPageBlocksImage): JSX.Element => {
  return (
    <>
    <div className="md:flex md:flex-row cursor-pointer hidden container mx-auto gap-6 items-center">
      
      {props.imageList?.map((item: any, index: number) => (
        <div key={index * Math.random()}>
          <div className="grid grid-rows-1 ">
            <div className="flex  flex-col md:justify-between absolute z-10">
              <div className="text-white ml-5 mt-5 md:text-[26px] text-xl font-bold  ">
                <div>
                {props.mainTitle && (
                <TinaMarkdown content={props.mainTitle} />
              )}                  
                </div>
              </div>
              <section>
                <div className="flex flex-wrap justify-center  md:mr-10 mr-40 mt-5 mb-5 md:mb-0  text-gray-700">
                  <a
                    href={item.buttonLink}
                    className="button button--winona p-0 bg-white hover:bg-white hover:text-gray-800 relative block focus:outline-none border-2 border-solid rounded-lg text-xs md:text-sm text-center font-semibold uppercase tracking-widest align-middle overflow-hidden"
                    data-text="DISCOVER"
                  >
                    <span className="align-middle block">
                      {item.buttonTitle}{" "}
                    </span>
                  </a>
                </div>
              </section>
            </div>
            <Image
              src={item?.heroImage || placeholder.src}
              alt={"/"}
              width={1600}
              height={900}
            />
          </div>
        </div>
      ))}
    </div>
    <div className="md:hidden  cursor-pointer flex-col container mx-auto gap-6 items-center z-10">
      {props.imageList?.map((item: any, index: number) => (
        <div key={index * Math.random()}>
          <div className="grid grid-rows-1  ">
          <div className="flex  flex-col md:justify-between absolute z-10">
              <div className="text-white ml-5 mt-5 md:text-[26px] text-xl font-bold  ">
                <div>{item.mainTitle}</div>
              </div>
              <section>
                <div className="flex flex-wrap justify-center mr-5 mt-5 mb-5 md:mb-0  text-gray-700">
                  <a
                    href={item.buttonLink}
                    className="button button--winona p-0 bg-white hover:bg-white hover:text-gray-800 relative block focus:outline-none border-2 border-solid rounded-lg text-xs md:text-sm text-center font-semibold uppercase tracking-widest align-middle overflow-hidden"
                    data-text="DISCOVER"
                  >
                    <span className="align-middle block">
                      {item.buttonTitle}
                    </span>
                  </a>
                </div>
              </section>
            </div>
            <Image
              src={item?.mobileImage || placeholder.src}
              alt={"/"}
              width={600}
              height={900}
            />
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default ImageBlock;
