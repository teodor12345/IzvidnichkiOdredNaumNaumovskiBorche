import dynamic from "next/dynamic";
import { TinaEditProvider } from "tinacms/dist/edit-state";
import { TinaCloudCloudinaryMediaStore } from "next-tinacms-cloudinary";
const TinaCMS = dynamic(() => import("tinacms"), { ssr: false });
import "../styles/globals.css";

const branch = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF;
const clientId = process.env.NEXT_PUBLIC_TINA_CLOUD_CLIENT_ID;

// When working locally, hit our local filesystem.
// On a Vercel deployment, hit the Tina Cloud API
const apiURL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:4001/graphql"
    : `https://content.tinajs.io/content/${clientId}/github/${branch}`;

const App = ({ Component, pageProps }: any) => {
  return (
    <>
      <TinaEditProvider
        editMode={
          <TinaCMS
            mediaStore={TinaCloudCloudinaryMediaStore}
            apiURL={apiURL}
            {...pageProps}
          >
            {(livePageProps: any) => <Component {...livePageProps} />}
          </TinaCMS>
        }
      >
        <Component {...pageProps} />
      </TinaEditProvider>
    </>
  );
};

export default App;
