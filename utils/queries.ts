import { gql } from "tinacms";
import { ContentVideoQuery } from "../components/blocks/ContentVideoBlock/query";
import { HomepageHeroQuery } from "../components/blocks/HomepageHeroBlock/query";
import { ImageQuery } from "../components/blocks/ImageBlock/query";
import { ImageTwoQuery } from "../components/blocks/ImageTwoBlock/query";
import { LeftImageRightLinksQuery } from "../components/blocks/LeftImageRightLinksBlock/query";
import { SpacingBlockQuery } from "../components/blocks/SpacingBlock/query";
import { TwoImagesQuery } from "../components/blocks/TwoImagesBlock/query";
import { AdventureBlockQuery } from "../components/blocks/AdventureBlock/query";


export const getPageQuery = gql`
  query PageQuery($relativePath: String!) {
    getPagesDocument(relativePath: $relativePath) {
      id
      data {
        seo {
          title
          description
          meta {
            name
            content
          }
        }
        pageBlocks {          
          ${HomepageHeroQuery}
          ${SpacingBlockQuery}
          ${TwoImagesQuery}
          ${ImageQuery}
          ${ImageTwoQuery}
          ${ContentVideoQuery}
          ${LeftImageRightLinksQuery}
          ${AdventureBlockQuery}
        }
      }
    }
  }
`;

export const getBlogPostQuery = gql`
  query getBlogPostQuery($relativePath: String!) {
    getBlogPostDocument(relativePath: $relativePath) {
      __typename
      data {
        slug
        locale
        seo {
          title

          description
          meta {
            name
            content
          }
        }
        mainTitle
        category
        heroImage
        date
        title
        paragraph
        button
        hasButton
        link
      }
    }
  }
`;


export const getAllBlogPosts = gql`
  query getAllBlogPosts {
    getBlogPostList {
      edges {
        node {
          sys {
            filename
          }
          data {
            seo {
              title
              description
              meta {
                name
                content
              }
            }
            mainTitle
            category
            heroImage
            date
            title
            paragraph
            button
            hasButton
            link
          }
        }
      }
    }
  }
`;

export const getPageSlugs = gql`
  query getSlugs {
    getPagesList {
      edges {
        node {
          data {
            slug
            locale
          }
          sys {
            filename
          }
        }
      }
    }
  }
`;

export const getBlogSlugs = gql`
  query getBlogSlugs {
    getBlogPostList {
      edges {
        node {
          data {
            slug
            locale
          }
          sys {
            filename
          }
        }
      }
    }
  }
`;
