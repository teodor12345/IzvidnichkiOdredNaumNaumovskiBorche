import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

import {
  Maybe,
  PagesPageBlocksLeftImageRightLinks,
  PagesPageBlocksLeftImageRightLinksListOfMerchandise,
} from '../../../.tina/__generated__/types';
import iconPlaceholder from './assets/customMade.svg';
import imageLeft from './assets/imageLeft.webp';

function LeftImageRightLinksBlock({
  bgImage,
  listOfMerchandise,
  flip,
  bgImageAlt,
}: PagesPageBlocksLeftImageRightLinks): JSX.Element {
  return (
    <div className="relative mb-10 text-black bg-white">
      <div
 className={`flex mx-auto md:flex-row ${
          flip ? 'md:flex-row lg:flex-row-reverse' : 'md:flex-row'
        }`}
      >        <div id="left-image" className="flex ">
          <Image
            src={bgImage || imageLeft.src}
            width={729}
            height={1147}
            layout="fixed"
            alt={bgImageAlt || ''}
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        <div
          id="right-links"
          className="flex flex-col justify-center px-8   "
        >
          <div className="grid  grid-cols-1 gap-12 self-center md:grid-cols-2 xl:gap-x-24">
            {listOfMerchandise?.map(
              (
                item: Maybe<PagesPageBlocksLeftImageRightLinksListOfMerchandise>,
                index: number
              ) => (
                <div
                  key={
                    item?.description ||
                    'leftImageRightLinksListOfMerchandise' + index
                  }
                  className="flex flex-col md:justify-between "
                >
                  <div className="flex flex-col">
                    <div className="flex gap-x-4 items-center pb-4 md:flex-row">
                      <Image
                        alt="icon links"
                        src={item?.icon || iconPlaceholder.src}
                        width={354}
                        height={443}
                        layout="fixed"
                      />
                    </div>
                    <div className="text-base prose-ul:list-disc prose-ol:list-decimal prose-a:text-lightGreen prose-a:underline">
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
