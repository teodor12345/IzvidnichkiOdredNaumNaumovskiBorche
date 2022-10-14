import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Image from "next/image";
import Link from "next/link";
import img from "./assets/BlogPostImg.svg";
import { BlogPost } from "../../../.tina/__generated__/types";

const BlogPostBlock = ({ ...props }: BlogPost): JSX.Element => {

  return (
    <div className="container mx-auto mb-10">
      <h1 className="font-bold text-[34px] pt-8 md:pt-16">{props.mainTitle}</h1>
      <div id="blogpost-content" className="flex flex-col lg:px-20">
        <div
          id="img-blogpost"
          className="font-bold text-3xl w-full h-full flex relative pb-7 pt-9 md:pb-8 md:pt-12"
        >
          <Image
            src={props.heroImage || img.src}
            alt="single post image"
            width={1196}
            height={500}
            objectFit="cover"
          />
        </div>
        <p className="font-normal text-[#32BBDB] pb-4 md:pb-8 text-sm">{props.date}</p>
        <h1 className="font-bold text-[30px]  pb-6 md:pb-8">
          {props.title}
        </h1>
        <div
          id="blogpost-text"
          className="mb-4  prose lg:prose-base prose-p:text-[#434343] contents "
        >
          {props.paragraph && <TinaMarkdown content={props.paragraph} />}
        </div>
        {props.hasButton && (
          <Link href={props?.link || ""} passHref={true} >
            <a >
              <button className="transition ease-in-out duration-1500 text-sm  hover:bg-black hover:text-white hover:border-white font-semibold py-2 my-8 px-4 border-2 border-black w-full md:w-fit sm:w-auto">
                {props.button}
              </button>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default BlogPostBlock;
