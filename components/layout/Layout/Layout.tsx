import Head from "next/head";
import HeaderBlock from "../Header/HeaderBlock";
import FooterBlock from "../Footer/FooterBlock";
import { Query, PagesSeo } from "../../../.tina/__generated__/types";

interface P {
  children: any | any[];
  seo: PagesSeo;
  slugs: Query;
  currentSlug: string;
}

const Layout = ({ children, seo, slugs, currentSlug }: P) => {
  
  return (
    <>
      <Head>
        <title>{seo && seo.title || ""}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={seo?.description || ""} />
        {seo && seo.meta && seo.meta?.map((item : any) => (
          <meta
            key={"meta" + Math.random()}
            name={item?.name || ""}
            content={item?.content || ""}
          />
        ))}
      </Head>
      <main>
        <HeaderBlock currentSlug={currentSlug} slugs={slugs}/>
        {children}
        <FooterBlock />
      </main>
    </>
  );
};

export default Layout;
