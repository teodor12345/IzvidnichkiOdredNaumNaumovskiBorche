import React, { useState, useEffect } from "react";
import { PagesPageBlocksSpacing } from "../../../.tina/__generated__/types";

const SpacingBlock = ({ ...props }: PagesPageBlocksSpacing): JSX.Element => {
  const [height, setHeight] = useState<string>("");

  useEffect(() => {
    switch (props?.size) {
      case "xs": {
        setHeight("h-2 sm:h-3 lg:h-5");
        break;
      }
      case "s": {
        setHeight("h-3 sm:h-5 lg:h-10");
        break;
      }
      case "m": {
        setHeight("h-5 sm:h-10 lg:h-20");
        break;
      }
      case "l": {
        setHeight("h-10 sm:h-20 lg:h-40");
        break;
      }
      case "xl": {
        setHeight("h-16 sm:h-40 lg:h-60");
        break;
      }
      case "xxl": {
        setHeight("h-24 sm:h-60 lg:h-80");
        break;
      }
      case "xxxl": {
        setHeight("h-32 sm:h-80 lg:h-96");
        break;
      }
      default: {
        setHeight("");
      }
    }
  }, [props.size]);

  return (
    <div>
      <div className={`${height} w-full`}> </div>
    </div>
  );
};

export default SpacingBlock;
