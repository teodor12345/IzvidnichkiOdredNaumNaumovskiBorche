import React from "react";
import type { GetPagesDocumentQuery,GetBlogPostDocumentQuery } from "../../.tina/__generated__/types";
import SpacingBlock from "../blocks/SpacingBlock/SpacingBlock";
import HomepageHeroBlock from "../blocks/HomepageHeroBlock/HomepageHeroBlock";
import TwoImagesBlock from "../blocks/TwoImagesBlock/TwoImagesBlock";
import ImageBlock from "../blocks/ImageBlock/ImageBlock";
import ImageTwoBlock from "../blocks/ImageTwoBlock/ImageTwoBlock";
import ContentVideoBlock from "../blocks/ContentVideoBlock/ContentVideoBlock";


interface P {
  pageData: GetPagesDocumentQuery;
  blogPosts: GetBlogPostDocumentQuery;
}

export const Blocks = ({pageData, blogPosts} : P) => {

  return (
    <>
      {pageData.getPagesDocument.data.pageBlocks
        ? pageData.getPagesDocument.data.pageBlocks.map(
            (block: any, i: number): JSX.Element | null => {
              switch (block && block.__typename) {    
                case "PagesPageBlocksHomepageHero":
                  if (block && block.__typename) {
                    return (
                      <React.Fragment key={i + block.__typename}>
                        <HomepageHeroBlock {...block} />
                      </React.Fragment>
                    );
                  }            
                case "PagesPageBlocksSpacing":
                  if (block && block.__typename) {
                    return (
                      <React.Fragment key={i + block.__typename}>
                        <SpacingBlock {...block} />
                      </React.Fragment>
                    );
                  }
                  case "PagesPageBlocksTwoImages":
                    if (block && block.__typename) {
                      return (
                        <React.Fragment key={i + block.__typename}>
                          <TwoImagesBlock {...block} />
                        </React.Fragment>
                      );
                    }
                    case "PagesPageBlocksImageTwo":
                      if (block && block.__typename) {
                        return (
                          <React.Fragment key={i + block.__typename}>
                            <ImageTwoBlock {...block} />
                          </React.Fragment>
                        );
                      }
                    case "PagesPageBlocksImage":
                      if (block && block.__typename) {
                        return (
                          <React.Fragment key={i + block.__typename}>
                            <ImageBlock {...block} />
                          </React.Fragment>
                        );
                      }
                      case "PagesPageBlocksContentVideo":
                        if (block && block.__typename) {
                          return (
                            <React.Fragment key={i + block.__typename}>
                              <ContentVideoBlock {...block} />
                            </React.Fragment>
                          );
                        }

                default:
                  return null;
              }
            }
          )
        : null}
    </>
  );
};
