import {
    mediaHandlerConfig,
    createMediaHandler,
  } from "next-tinacms-cloudinary/dist/handlers";
  
  import { isAuthorized } from "@tinacms/auth";
  import { NextApiRequest, NextApiResponse } from "next";
  
  export const config = mediaHandlerConfig;
  
  export default createMediaHandler({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "",
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || "",
    api_secret: process.env.CLOUDINARY_API_SECRET || "",
    authorized: async (
      req: NextApiRequest,
      _res: NextApiResponse<any>
    ): Promise<boolean> => {
      try {
        if (process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT) {
          return true;
        }
  
        const user = await isAuthorized(req);
  
        if (typeof user && user?.verified !== undefined) {
          return user && user.verified;
        } else return false;
      } catch (e) {
        console.error(e);
        return false;
      }
    },
  });
  