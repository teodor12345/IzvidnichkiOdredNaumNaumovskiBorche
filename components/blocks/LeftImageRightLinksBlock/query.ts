export const LeftImageRightLinksQuery = `
... on PagesPageBlocksLeftImageRightLinks {
    __typename
    bgImage
    bgImageAlt
    flip
    listOfMerchandise {
      description
      icon
      iconAlt
      link

    }
  }
`;
