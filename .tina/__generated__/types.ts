//@ts-nocheck
// DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
import { gql } from 'tinacms';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String'];
  basename: Scalars['String'];
  breadcrumbs: Array<Scalars['String']>;
  path: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  template: Scalars['String'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  sys?: Maybe<SystemInfo>;
  id: Scalars['ID'];
  form: Scalars['JSON'];
  values: Scalars['JSON'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  getOptimizedQuery?: Maybe<Scalars['String']>;
  getCollection: Collection;
  getCollections: Array<Collection>;
  node: Node;
  getDocument: DocumentNode;
  getDocumentList: DocumentConnection;
  getDocumentFields: Scalars['JSON'];
  getBlogPostDocument: BlogPostDocument;
  getBlogPostList: BlogPostConnection;
  getPagesDocument: PagesDocument;
  getPagesList: PagesConnection;
};


export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String'];
};


export type QueryGetCollectionArgs = {
  collection?: InputMaybe<Scalars['String']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryGetDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetDocumentListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};


export type QueryGetBlogPostDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetBlogPostListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};


export type QueryGetPagesDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetPagesListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String'];
  slug: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  matches?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};

export type DocumentNode = BlogPostDocument | PagesDocument;

export type BlogPostSeoMeta = {
  __typename?: 'BlogPostSeoMeta';
  name?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type BlogPostSeo = {
  __typename?: 'BlogPostSeo';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  meta?: Maybe<Array<Maybe<BlogPostSeoMeta>>>;
};

export type BlogPost = {
  __typename?: 'BlogPost';
  slug?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  seo?: Maybe<BlogPostSeo>;
  mainTitle?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  heroImage?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  paragraph?: Maybe<Scalars['JSON']>;
  hasButton?: Maybe<Scalars['Boolean']>;
  button?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type BlogPostDocument = Node & Document & {
  __typename?: 'BlogPostDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: BlogPost;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type BlogPostConnectionEdges = {
  __typename?: 'BlogPostConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<BlogPostDocument>;
};

export type BlogPostConnection = Connection & {
  __typename?: 'BlogPostConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<BlogPostConnectionEdges>>>;
};

export type PagesSeoMeta = {
  __typename?: 'PagesSeoMeta';
  name?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type PagesSeo = {
  __typename?: 'PagesSeo';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  meta?: Maybe<Array<Maybe<PagesSeoMeta>>>;
};

export type PagesPageBlocksSpacing = {
  __typename?: 'PagesPageBlocksSpacing';
  size?: Maybe<Scalars['String']>;
};

export type PagesPageBlocksHomepageHero = {
  __typename?: 'PagesPageBlocksHomepageHero';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['JSON']>;
  heroImage?: Maybe<Scalars['String']>;
};

export type PagesPageBlocksTwoImagesImageList = {
  __typename?: 'PagesPageBlocksTwoImagesImageList';
  heroImage?: Maybe<Scalars['String']>;
  buttonTitle?: Maybe<Scalars['String']>;
  mainTitle?: Maybe<Scalars['String']>;
  buttonLink?: Maybe<Scalars['String']>;
};

export type PagesPageBlocksTwoImages = {
  __typename?: 'PagesPageBlocksTwoImages';
  imageList?: Maybe<Array<Maybe<PagesPageBlocksTwoImagesImageList>>>;
};

export type PagesPageBlocksImageImageList = {
  __typename?: 'PagesPageBlocksImageImageList';
  heroImage?: Maybe<Scalars['String']>;
  buttonTitle?: Maybe<Scalars['String']>;
  buttonLink?: Maybe<Scalars['String']>;
  mobileImage?: Maybe<Scalars['String']>;
};

export type PagesPageBlocksImage = {
  __typename?: 'PagesPageBlocksImage';
  mainTitle?: Maybe<Scalars['JSON']>;
  imageList?: Maybe<Array<Maybe<PagesPageBlocksImageImageList>>>;
};

export type PagesPageBlocksImageTwoImageList = {
  __typename?: 'PagesPageBlocksImageTwoImageList';
  heroImage?: Maybe<Scalars['String']>;
  buttonTitle?: Maybe<Scalars['String']>;
  mainTitle?: Maybe<Scalars['String']>;
  buttonLink?: Maybe<Scalars['String']>;
};

export type PagesPageBlocksImageTwo = {
  __typename?: 'PagesPageBlocksImageTwo';
  imageList?: Maybe<Array<Maybe<PagesPageBlocksImageTwoImageList>>>;
};

export type PagesPageBlocksContentVideo = {
  __typename?: 'PagesPageBlocksContentVideo';
  cvideoPlayer?: Maybe<Scalars['String']>;
};

export type PagesPageBlocks = PagesPageBlocksSpacing | PagesPageBlocksHomepageHero | PagesPageBlocksTwoImages | PagesPageBlocksImage | PagesPageBlocksImageTwo | PagesPageBlocksContentVideo;

export type Pages = {
  __typename?: 'Pages';
  slug?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  seo?: Maybe<PagesSeo>;
  pageBlocks?: Maybe<Array<Maybe<PagesPageBlocks>>>;
};

export type PagesDocument = Node & Document & {
  __typename?: 'PagesDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Pages;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type PagesConnectionEdges = {
  __typename?: 'PagesConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<PagesDocument>;
};

export type PagesConnection = Connection & {
  __typename?: 'PagesConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<PagesConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  createDocument: DocumentNode;
  updateBlogPostDocument: BlogPostDocument;
  createBlogPostDocument: BlogPostDocument;
  updatePagesDocument: PagesDocument;
  createPagesDocument: PagesDocument;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  template?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationUpdateBlogPostDocumentArgs = {
  relativePath: Scalars['String'];
  params: BlogPostMutation;
};


export type MutationCreateBlogPostDocumentArgs = {
  relativePath: Scalars['String'];
  params: BlogPostMutation;
};


export type MutationUpdatePagesDocumentArgs = {
  relativePath: Scalars['String'];
  params: PagesMutation;
};


export type MutationCreatePagesDocumentArgs = {
  relativePath: Scalars['String'];
  params: PagesMutation;
};

export type DocumentMutation = {
  blogPost?: InputMaybe<BlogPostMutation>;
  pages?: InputMaybe<PagesMutation>;
};

export type BlogPostSeoMetaMutation = {
  name?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
};

export type BlogPostSeoMutation = {
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Array<InputMaybe<BlogPostSeoMetaMutation>>>;
};

export type BlogPostMutation = {
  slug?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<BlogPostSeoMutation>;
  mainTitle?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  heroImage?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  paragraph?: InputMaybe<Scalars['JSON']>;
  hasButton?: InputMaybe<Scalars['Boolean']>;
  button?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
};

export type PagesSeoMetaMutation = {
  name?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
};

export type PagesSeoMutation = {
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Array<InputMaybe<PagesSeoMetaMutation>>>;
};

export type PagesPageBlocksSpacingMutation = {
  size?: InputMaybe<Scalars['String']>;
};

export type PagesPageBlocksHomepageHeroMutation = {
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
  heroImage?: InputMaybe<Scalars['String']>;
};

export type PagesPageBlocksTwoImagesImageListMutation = {
  heroImage?: InputMaybe<Scalars['String']>;
  buttonTitle?: InputMaybe<Scalars['String']>;
  mainTitle?: InputMaybe<Scalars['String']>;
  buttonLink?: InputMaybe<Scalars['String']>;
};

export type PagesPageBlocksTwoImagesMutation = {
  imageList?: InputMaybe<Array<InputMaybe<PagesPageBlocksTwoImagesImageListMutation>>>;
};

export type PagesPageBlocksImageImageListMutation = {
  heroImage?: InputMaybe<Scalars['String']>;
  buttonTitle?: InputMaybe<Scalars['String']>;
  buttonLink?: InputMaybe<Scalars['String']>;
  mobileImage?: InputMaybe<Scalars['String']>;
};

export type PagesPageBlocksImageMutation = {
  mainTitle?: InputMaybe<Scalars['JSON']>;
  imageList?: InputMaybe<Array<InputMaybe<PagesPageBlocksImageImageListMutation>>>;
};

export type PagesPageBlocksImageTwoImageListMutation = {
  heroImage?: InputMaybe<Scalars['String']>;
  buttonTitle?: InputMaybe<Scalars['String']>;
  mainTitle?: InputMaybe<Scalars['String']>;
  buttonLink?: InputMaybe<Scalars['String']>;
};

export type PagesPageBlocksImageTwoMutation = {
  imageList?: InputMaybe<Array<InputMaybe<PagesPageBlocksImageTwoImageListMutation>>>;
};

export type PagesPageBlocksContentVideoMutation = {
  cvideoPlayer?: InputMaybe<Scalars['String']>;
};

export type PagesPageBlocksMutation = {
  spacing?: InputMaybe<PagesPageBlocksSpacingMutation>;
  homepageHero?: InputMaybe<PagesPageBlocksHomepageHeroMutation>;
  twoImages?: InputMaybe<PagesPageBlocksTwoImagesMutation>;
  image?: InputMaybe<PagesPageBlocksImageMutation>;
  imageTwo?: InputMaybe<PagesPageBlocksImageTwoMutation>;
  contentVideo?: InputMaybe<PagesPageBlocksContentVideoMutation>;
};

export type PagesMutation = {
  slug?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<PagesSeoMutation>;
  pageBlocks?: InputMaybe<Array<InputMaybe<PagesPageBlocksMutation>>>;
};

export type BlogPostPartsFragment = { __typename?: 'BlogPost', slug?: string | null, locale?: string | null, mainTitle?: string | null, category?: string | null, heroImage?: string | null, date?: string | null, title?: string | null, paragraph?: any | null, hasButton?: boolean | null, button?: string | null, link?: string | null, seo?: { __typename: 'BlogPostSeo', title?: string | null, description?: string | null, meta?: Array<{ __typename: 'BlogPostSeoMeta', name?: string | null, content?: string | null } | null> | null } | null };

export type PagesPartsFragment = { __typename?: 'Pages', slug?: string | null, locale?: string | null, seo?: { __typename: 'PagesSeo', title?: string | null, description?: string | null, meta?: Array<{ __typename: 'PagesSeoMeta', name?: string | null, content?: string | null } | null> | null } | null, pageBlocks?: Array<{ __typename: 'PagesPageBlocksSpacing', size?: string | null } | { __typename: 'PagesPageBlocksHomepageHero', title?: string | null, description?: any | null, heroImage?: string | null } | { __typename: 'PagesPageBlocksTwoImages', imageList?: Array<{ __typename: 'PagesPageBlocksTwoImagesImageList', heroImage?: string | null, buttonTitle?: string | null, mainTitle?: string | null, buttonLink?: string | null } | null> | null } | { __typename: 'PagesPageBlocksImage', mainTitle?: any | null, imageList?: Array<{ __typename: 'PagesPageBlocksImageImageList', heroImage?: string | null, buttonTitle?: string | null, buttonLink?: string | null, mobileImage?: string | null } | null> | null } | { __typename: 'PagesPageBlocksImageTwo', imageList?: Array<{ __typename: 'PagesPageBlocksImageTwoImageList', heroImage?: string | null, buttonTitle?: string | null, mainTitle?: string | null, buttonLink?: string | null } | null> | null } | { __typename: 'PagesPageBlocksContentVideo', cvideoPlayer?: string | null } | null> | null };

export type GetBlogPostDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetBlogPostDocumentQuery = { __typename?: 'Query', getBlogPostDocument: { __typename?: 'BlogPostDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'BlogPost', slug?: string | null, locale?: string | null, mainTitle?: string | null, category?: string | null, heroImage?: string | null, date?: string | null, title?: string | null, paragraph?: any | null, hasButton?: boolean | null, button?: string | null, link?: string | null, seo?: { __typename: 'BlogPostSeo', title?: string | null, description?: string | null, meta?: Array<{ __typename: 'BlogPostSeoMeta', name?: string | null, content?: string | null } | null> | null } | null } } };

export type GetBlogPostListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBlogPostListQuery = { __typename?: 'Query', getBlogPostList: { __typename?: 'BlogPostConnection', totalCount: number, edges?: Array<{ __typename?: 'BlogPostConnectionEdges', node?: { __typename?: 'BlogPostDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'BlogPost', slug?: string | null, locale?: string | null, mainTitle?: string | null, category?: string | null, heroImage?: string | null, date?: string | null, title?: string | null, paragraph?: any | null, hasButton?: boolean | null, button?: string | null, link?: string | null, seo?: { __typename: 'BlogPostSeo', title?: string | null, description?: string | null, meta?: Array<{ __typename: 'BlogPostSeoMeta', name?: string | null, content?: string | null } | null> | null } | null } } | null } | null> | null } };

export type GetPagesDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetPagesDocumentQuery = { __typename?: 'Query', getPagesDocument: { __typename?: 'PagesDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Pages', slug?: string | null, locale?: string | null, seo?: { __typename: 'PagesSeo', title?: string | null, description?: string | null, meta?: Array<{ __typename: 'PagesSeoMeta', name?: string | null, content?: string | null } | null> | null } | null, pageBlocks?: Array<{ __typename: 'PagesPageBlocksSpacing', size?: string | null } | { __typename: 'PagesPageBlocksHomepageHero', title?: string | null, description?: any | null, heroImage?: string | null } | { __typename: 'PagesPageBlocksTwoImages', imageList?: Array<{ __typename: 'PagesPageBlocksTwoImagesImageList', heroImage?: string | null, buttonTitle?: string | null, mainTitle?: string | null, buttonLink?: string | null } | null> | null } | { __typename: 'PagesPageBlocksImage', mainTitle?: any | null, imageList?: Array<{ __typename: 'PagesPageBlocksImageImageList', heroImage?: string | null, buttonTitle?: string | null, buttonLink?: string | null, mobileImage?: string | null } | null> | null } | { __typename: 'PagesPageBlocksImageTwo', imageList?: Array<{ __typename: 'PagesPageBlocksImageTwoImageList', heroImage?: string | null, buttonTitle?: string | null, mainTitle?: string | null, buttonLink?: string | null } | null> | null } | { __typename: 'PagesPageBlocksContentVideo', cvideoPlayer?: string | null } | null> | null } } };

export type GetPagesListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPagesListQuery = { __typename?: 'Query', getPagesList: { __typename?: 'PagesConnection', totalCount: number, edges?: Array<{ __typename?: 'PagesConnectionEdges', node?: { __typename?: 'PagesDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Pages', slug?: string | null, locale?: string | null, seo?: { __typename: 'PagesSeo', title?: string | null, description?: string | null, meta?: Array<{ __typename: 'PagesSeoMeta', name?: string | null, content?: string | null } | null> | null } | null, pageBlocks?: Array<{ __typename: 'PagesPageBlocksSpacing', size?: string | null } | { __typename: 'PagesPageBlocksHomepageHero', title?: string | null, description?: any | null, heroImage?: string | null } | { __typename: 'PagesPageBlocksTwoImages', imageList?: Array<{ __typename: 'PagesPageBlocksTwoImagesImageList', heroImage?: string | null, buttonTitle?: string | null, mainTitle?: string | null, buttonLink?: string | null } | null> | null } | { __typename: 'PagesPageBlocksImage', mainTitle?: any | null, imageList?: Array<{ __typename: 'PagesPageBlocksImageImageList', heroImage?: string | null, buttonTitle?: string | null, buttonLink?: string | null, mobileImage?: string | null } | null> | null } | { __typename: 'PagesPageBlocksImageTwo', imageList?: Array<{ __typename: 'PagesPageBlocksImageTwoImageList', heroImage?: string | null, buttonTitle?: string | null, mainTitle?: string | null, buttonLink?: string | null } | null> | null } | { __typename: 'PagesPageBlocksContentVideo', cvideoPlayer?: string | null } | null> | null } } | null } | null> | null } };

export const BlogPostPartsFragmentDoc = gql`
    fragment BlogPostParts on BlogPost {
  slug
  locale
  seo {
    __typename
    title
    description
    meta {
      __typename
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
  hasButton
  button
  link
}
    `;
export const PagesPartsFragmentDoc = gql`
    fragment PagesParts on Pages {
  slug
  locale
  seo {
    __typename
    title
    description
    meta {
      __typename
      name
      content
    }
  }
  pageBlocks {
    __typename
    ... on PagesPageBlocksSpacing {
      size
    }
    ... on PagesPageBlocksHomepageHero {
      title
      description
      heroImage
    }
    ... on PagesPageBlocksTwoImages {
      imageList {
        __typename
        heroImage
        buttonTitle
        mainTitle
        buttonLink
      }
    }
    ... on PagesPageBlocksImage {
      mainTitle
      imageList {
        __typename
        heroImage
        buttonTitle
        buttonLink
        mobileImage
      }
    }
    ... on PagesPageBlocksImageTwo {
      imageList {
        __typename
        heroImage
        buttonTitle
        mainTitle
        buttonLink
      }
    }
    ... on PagesPageBlocksContentVideo {
      cvideoPlayer
    }
  }
}
    `;
export const GetBlogPostDocumentDocument = gql`
    query getBlogPostDocument($relativePath: String!) {
  getBlogPostDocument(relativePath: $relativePath) {
    sys {
      filename
      basename
      breadcrumbs
      path
      relativePath
      extension
    }
    id
    data {
      ...BlogPostParts
    }
  }
}
    ${BlogPostPartsFragmentDoc}`;
export const GetBlogPostListDocument = gql`
    query getBlogPostList {
  getBlogPostList {
    totalCount
    edges {
      node {
        id
        sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        data {
          ...BlogPostParts
        }
      }
    }
  }
}
    ${BlogPostPartsFragmentDoc}`;
export const GetPagesDocumentDocument = gql`
    query getPagesDocument($relativePath: String!) {
  getPagesDocument(relativePath: $relativePath) {
    sys {
      filename
      basename
      breadcrumbs
      path
      relativePath
      extension
    }
    id
    data {
      ...PagesParts
    }
  }
}
    ${PagesPartsFragmentDoc}`;
export const GetPagesListDocument = gql`
    query getPagesList {
  getPagesList {
    totalCount
    edges {
      node {
        id
        sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        data {
          ...PagesParts
        }
      }
    }
  }
}
    ${PagesPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      getBlogPostDocument(variables: GetBlogPostDocumentQueryVariables, options?: C): Promise<{data: GetBlogPostDocumentQuery, variables: GetBlogPostDocumentQueryVariables, query: string}> {
        return requester<{data: GetBlogPostDocumentQuery, variables: GetBlogPostDocumentQueryVariables, query: string}, GetBlogPostDocumentQueryVariables>(GetBlogPostDocumentDocument, variables, options);
      },
    getBlogPostList(variables?: GetBlogPostListQueryVariables, options?: C): Promise<{data: GetBlogPostListQuery, variables: GetBlogPostListQueryVariables, query: string}> {
        return requester<{data: GetBlogPostListQuery, variables: GetBlogPostListQueryVariables, query: string}, GetBlogPostListQueryVariables>(GetBlogPostListDocument, variables, options);
      },
    getPagesDocument(variables: GetPagesDocumentQueryVariables, options?: C): Promise<{data: GetPagesDocumentQuery, variables: GetPagesDocumentQueryVariables, query: string}> {
        return requester<{data: GetPagesDocumentQuery, variables: GetPagesDocumentQueryVariables, query: string}, GetPagesDocumentQueryVariables>(GetPagesDocumentDocument, variables, options);
      },
    getPagesList(variables?: GetPagesListQueryVariables, options?: C): Promise<{data: GetPagesListQuery, variables: GetPagesListQueryVariables, query: string}> {
        return requester<{data: GetPagesListQuery, variables: GetPagesListQueryVariables, query: string}, GetPagesListQueryVariables>(GetPagesListDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { staticRequest } from 'tinacms'
const requester: (doc: any, vars?: any, options?: any) => Promise<any> = async (
  doc,
  vars,
  _options
) => {
  let data = {}
  try {
    data = await staticRequest({
      query: doc,
      variables: vars,
    })
  } catch (e) {
    // swallow errors related to document creation
    console.warn('Warning: There was an error when fetching data')
    console.warn(e)
  }

  return { data, query: doc, variables: vars || {} }
}

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = ()=>getSdk(requester)

