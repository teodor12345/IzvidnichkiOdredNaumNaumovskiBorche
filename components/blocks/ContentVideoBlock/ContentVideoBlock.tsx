import React from 'react';
import ReactPlayer from 'react-player';

import { PagesPageBlocksContentVideo } from '../../../.tina/__generated__/types';

function ContentVideoBlock({
  cvideoPlayer,
}: PagesPageBlocksContentVideo): JSX.Element {
  return (
    <div className="overflow-hidden">
        <div className="flex  lg:h-[600px] md:h-[500px] sm:h-[400px] h-[300px]   xl:h-[750px] xl:ml-5 2xl:ml-0   2xl:w-[2000px] 2xl:h-[800px]  ">
          <ReactPlayer
            url={cvideoPlayer || ''}
            playsinline
            height="100%"
            width="100%"
            playing
            config={{
              file: {
                attributes: {
                  autoplay: true,
                },
              },
            }}
          />
      </div>
    </div>
  );
}

export default ContentVideoBlock;
