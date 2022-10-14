export const ImageQuery = `
... on PagesPageBlocksImage {
    __typename
    mainTitle
    imageList {
        heroImage
        buttonTitle
        buttonLink
        mobileImage
      }
  }
`;
