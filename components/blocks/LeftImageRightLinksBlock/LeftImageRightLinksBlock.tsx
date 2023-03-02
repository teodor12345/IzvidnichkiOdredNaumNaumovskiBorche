import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import {
  Maybe,
  PagesPageBlocksLeftImageRightLinks,
  PagesPageBlocksLeftImageRightLinksListOfMerchandise,
} from "../../../.tina/__generated__/types";
import iconPlaceholder from "./assets/customMade.svg";
import imageLeft from "./assets/imageLeft.webp";

function LeftImageRightLinksBlock({
  bgImage,
  listOfMerchandise,
  flip,
  bgImageAlt,
}: PagesPageBlocksLeftImageRightLinks): JSX.Element {
  return (
    <div className="relative mb-10 text-black bg-white">
      <div
        className={`flex mx-auto flex-col lg:flex-row ${
          flip ? " flex-col md:flex-row-reverse" : "lg:flex-row flex-col"
        }`}
      >
        {" "}
        <div id="left-image" className="lg:flex hidden ">
          <Image
            src={bgImage || imageLeft.src}
            width={729}
            height={1147}
            layout="fixed"
            alt={bgImageAlt || ""}
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        <div
          id="left-image"
          className="flex lg:hidden items-center justify-center "
        >
          <Image
            src={bgImage || imageLeft.src}
            width={609}
            height={800}
            layout="fixed"
            alt={bgImageAlt || ""}
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        <div
          id="right-links"
          className="flex lg:flex-col flex-row justify-center md:px-8 px-4   "
        >
          <div className="grid  grid-cols-1 md:gap-12 gap-0 self-center xl:grid-cols-2 xl:gap-x-24">
            {listOfMerchandise?.map(
              (
                item: Maybe<PagesPageBlocksLeftImageRightLinksListOfMerchandise>,
                index: number
              ) => (
                <div
                  key={
                    item?.description ||
                    "leftImageRightLinksListOfMerchandise" + index
                  }
                  className="flex flex-col justify-start lg:justify-betweePn "
                >
                  <div className="flex flex-col">
                    <div className="lg:flex hidden lg:gap-x-4 lg:items-center lg:pb-4 lg:flex-row">
                      <Image
                        alt="icon links"
                        src={item?.icon || iconPlaceholder.src}
                        width={354}
                        height={443}
                        layout="fixed"
                      />
                    </div>
                    <div className="flex lg:hidden items-center justify-center ">
                      <Image
                        alt="icon links"
                        src={item?.icon || iconPlaceholder.src}
                        width={300}
                        height={400}
                        layout="fixed"
                      />
                    </div>
                    <div className="text-[18px] pl-4 md:pl-0 prose-ul:list-disc text-center lg:text-start  prose-ol:list-decimal prose-a:text-lightGreen prose-a:underline">
                      {item?.description && (
                        <TinaMarkdown content={item.description} />
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImageRightLinksBlock;
