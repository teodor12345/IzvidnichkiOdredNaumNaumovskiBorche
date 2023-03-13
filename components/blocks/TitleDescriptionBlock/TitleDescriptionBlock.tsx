import React from 'react';
import { useInView } from 'react-intersection-observer';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

import { PagesPageBlocksTitleDescription } from '../../../.tina/__generated__/types';

function TitleDescriptionBlock({
  mainTitle,
  mainDescription,
}: PagesPageBlocksTitleDescription): JSX.Element {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className="w-full bg-white" ref={ref}>
      <div
        className={`container mx-auto  text-darkGray h-fit ${
          inView ? 'fade-in-bottom' : ''
        }`}
      >
        <div className="flex flex-col  justify-center  items-center text-center">
          <div className=" pt-20 pb-8 text-2xl text-[#22789D] sm:w-full  md:text-4xl md:text-center ">
            {mainTitle && <TinaMarkdown content={mainTitle} />}{' '}
          </div>
          <div className="flex justify-center w-full ">
            <div className=" flex-col md:text-2xl text-xl  w-full max-w-none text-[#22789D] md:w-[59%] ">
              {mainDescription && (
                <TinaMarkdown content={mainDescription} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleDescriptionBlock;
