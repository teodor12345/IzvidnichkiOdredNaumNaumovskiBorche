import React from "react";
import HeroImage from "./assets/circles_hero.webp";
import HoodieImage from "./assets/hoodie_hero.webp";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { PagesPageBlocksHomepageHero } from "../../../.tina/__generated__/types";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const HomepageHeroBlock = ({
  ...props
}: PagesPageBlocksHomepageHero): JSX.Element => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <div>
      {/* desktop version
      todo:
      da se preimenuva komponentata
      da se linknat tekstovi vo tina i da se sredi responsive
      */}
      <div
        className=" bg-black relative text-white bg-cover bg-center bg-no-repeat hidden md:block"
        style={{
          backgroundImage: `url('${HeroImage.src}')`,
          // backgroundImage: `url('${props.heroImage || HeroImage.src}')`, bg-black da se smeni vo bg-DarkestGrey nova klasa so #161616
        }}
        ref={ref}
      >
        <div className=" absolute  top-0 left-0 right-0 bottom-0  flex flex-row items-center">
          <div className="w-[55.6%]">
            <Image
              alt="image"
              src={HoodieImage}
              // src={props.hoodieImage || HoodieImage}
              height={1008}
              width={876}
              layout="responsive"
              objectFit="contain"
            ></Image>
          </div>
          <div className="flex flex-col w-1/3 mb-40">
            <p
              className={`text-white font-bold xl:text-[44px] text-5xl relative mb-10 leading ${
                inView ? "fade-in-left" : ""
              }`}
              style={{ maxWidth: "60%" }}
            >
              {props.title}
            </p>
            <div
              className={`prose lg:prose-base prose-p:text-white prose-p:my-0 lg:prose-p:my-0 leading-normal lg:leading-normal	 ${
                inView ? "fade-in-bottom" : ""
              }`}
            >
              {props.description && (
                <TinaMarkdown content={props.description} />
              )}
            </div>
          </div>
        </div>
        <div
          className="sm:container relative hidden 2xl:flex sm:m-auto items-center "
          style={{ minHeight: 920 }}
        ></div>
        <div
          className="sm:container relative flex 2xl:hidden sm:m-auto items-center "
          style={{ minHeight: 820 }}
        ></div>
      </div>
      {/* mobile version here */}
      <div className="block md:hidden"></div>
    </div>
  );
};

export default HomepageHeroBlock;
