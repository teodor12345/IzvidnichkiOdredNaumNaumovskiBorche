import { staticRequest, gql } from "tinacms";
import { getBlogPostQuery, getBlogSlugs } from "../../utils/queries";
import Layout from "../../components/layout/Layout/Layout";
import BlogPostBlock from "../../components/blocks/BlogPostBlock/BlogPostBlock";
import parseTinaFileName from "../../utils/parseTinaFileName";
import { BlogPostConnectionEdges } from "../../.tina/__generated__/types";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const BlogPost = ({ data, slugData }: any) => {
  const seoData = data.getBlogPostDocument.data.seo;

  return (
    <>
      <Layout seo={seoData} slugs={slugData} currentSlug={data.getBlogPostDocument.data.slug}>
        <BlogPostBlock {...data.getBlogPostDocument.data} />
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ params, locale }: any) => {
  const query = getBlogPostQuery;
  const variables = { relativePath: `${params.slug}.${locale}.md` };
  let data: any = {};
  let slugData: any = {};

  try {
    data = await staticRequest({
      query,
      variables,
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
    });

    slugData = await staticRequest({
      query: getBlogSlugs,
    });
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      query,
      variables,
      data,
      slugData,
      locale,
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      //myOtherProp: 'some-other-data',
    },
  };
};

export const getStaticPaths = async () => {
  const blogPostListData: any = await staticRequest({
    query: gql`
      query getBlogPostsList {
        getBlogPostList {
          edges {
            node {
              sys {
                filename
              }
            }
          }
        }
      }
    `,
  });

  const paths = blogPostListData.getBlogPostList.edges.map(
    (page: BlogPostConnectionEdges) => {
      const { slug, locale } = parseTinaFileName(page?.node?.sys.filename);
      return {
        params: { slug: slug },
        locale,
      };
    }
  );
  return {
    paths: paths,
    fallback: false,
  };
};

export default BlogPost;
