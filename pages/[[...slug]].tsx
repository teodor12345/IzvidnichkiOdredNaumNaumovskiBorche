import { staticRequest, gql } from "tinacms";
import { useTina } from "tinacms/dist/edit-state";
import { Blocks } from "../components/util/Blocks";
import { getPageQuery, getAllBlogPosts, getPageSlugs } from "../utils/queries";
import Layout from "../components/layout/Layout/Layout";
import { GetStaticPaths } from "next";
import { PagesConnectionEdges } from "../.tina/__generated__/types";
import parseTinaFileName from "../utils/parseTinaFileName";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


const Page = ({ pageData, blogData, query, variables, slugData }: any) => {
  const { data } = useTina({
    query,
    variables: { ...variables },
    data: pageData,
  });


  const blogPostsList = blogData?.getBlogPostList?.edges;
  const seoData = data?.getPagesDocument?.data?.seo;

  return (
    <>
      <Layout seo={seoData} slugs={slugData} currentSlug={data?.getPagesDocument?.data?.slug}>
        <Blocks pageData={data} blogPosts={blogPostsList} />
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ params, locale }: any) => {
  const variables = { relativePath: `${params?.slug}.${locale}.md` };

  let data: any = {};
  let blogData: any = {};
  let slugData: any = {};
  try {
    data = await staticRequest({
      query: getPageQuery,
      variables,
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    });

    blogData = await staticRequest({
      query: getAllBlogPosts,
    });

    slugData = await staticRequest({
      query: getPageSlugs,
    });
  } catch (e) {
    // swallow errors related to document creation
  }

  return {
    props: {
      variables,
      pageData: data,
      query: getPageQuery,
      blogData,
      slugData,
      locale,
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pagesListData: any = await staticRequest({
    query: gql`
      query getPagesList {
        getPagesList {
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

  const paths = pagesListData?.getPagesList?.edges?.map(
    (page: PagesConnectionEdges) => {
      const { slug, locale } = parseTinaFileName(page?.node?.sys?.filename);

      return {
        params: { slug: [slug] },
        locale,
      };
    }
  );
  return {
    paths: paths,
    fallback: false,
  };
};

export default Page;
