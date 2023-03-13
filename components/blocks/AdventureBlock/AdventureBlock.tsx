import Image from 'next/image';
import React from 'react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

import { PagesPageBlocksAdventure } from '../../../.tina/__generated__/types';
import adventurePlaceholder from './assets/adventure.png';

function AdventureBlock({
  adventureTitle,
  adventureImage,
  adventureImageAlt,
  adventureDescription

}: PagesPageBlocksAdventure): JSX.Element {
  return (
    <div>
        <div className=" mx-auto flex flex-col w-full text-center px-10  ">
          <div>
            <div className=" text-xl md:text-4xl pt-10 text-[#22789D] ">
              {      adventureTitle
 && <TinaMarkdown content={      adventureTitle
 } />}{' '}
            </div>
          </div>
          <div className="flex flex-col pt-20  items-center justify-center text-center md:px-40 xl:px-64 text-sm md:text-lg  ">
            {      adventureDescription
 && (
              <TinaMarkdown content={      adventureDescription
              } />
            )}
          </div>
      </div>
      <div className=' flex'>
        <Image
          src={adventureImage|| adventurePlaceholder.src}
          width={2000}
          height={487}
          alt={      adventureImageAlt  || ''}
        />
      </div>
   
    </div>
  );
}

export default AdventureBlock;
