import React, { useState, useEffect } from "react";
import Image from "next/image";
import { XIcon } from "@heroicons/react/outline";
import logo from "./assets/logo.png";
import arrow from "../Footer/assets/arrow-down.svg";
import menu from "./assets/burgerMenu.png";
import line from "./assets/line.webp";
import Link from "next/link";
import { useRouter } from "next/router";
import { Query } from "../../../.tina/__generated__/types";

export interface navItem {
  name: string;
  href?: any;
  current: boolean;
  mobileicon?: StaticImageData;
  icon?: StaticImageData;
  icon1?: StaticImageData;
  target?: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface P {
  slugs: Query;
  currentSlug: string;
}


const HeaderBlock = ({ slugs, currentSlug }: P): JSX.Element => {
  const [collectionMenu, setCollectionMenu] = useState<boolean>(false);
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false);
  const [finalLink, setFinalLink] = useState<string>("");
  const router = useRouter();


  useEffect(() => {
    if (router.route.includes("blog")) {
      const counterpartPage = slugs.getBlogPostList.edges?.filter(
        (page) =>
          page?.node?.data.slug === currentSlug &&
          page?.node?.data.locale !== router.locale
      );
      const counterpartSlug =
        counterpartPage &&
        counterpartPage![0]?.node?.sys.filename.split(".")[0];
      setFinalLink("/blog/" + counterpartSlug);
    } else {
      const counterpartPage = slugs.getPagesList.edges?.filter(
        (page) =>
          page?.node?.data.slug === currentSlug &&
          page?.node?.data.locale !== router.locale
      );
      const counterpartSlug =
        counterpartPage &&
        counterpartPage![0]?.node?.sys.filename.split(".")[0];
      setFinalLink("/" + counterpartSlug);
    }
  }, [currentSlug, router, slugs]);

  const navigation: navItem[] = [
    {
      name: 'HOME',
      href: "/linkAbout",
      current: false,
      mobileicon: line,
    },
    {
      name: 'ABOUT',
      href: "/linkAbout",
      current: false,
      mobileicon: line,
    },
    {
      name: 'COLLECTIONS',
      href: "#",
      current: false,
      icon: arrow,
      mobileicon: line,
    },
 
    {
      name: 'CONTACT',
      href: "/linkAbout",
      current: false,
      mobileicon: line,
    },
    {
      name: 'BLOGS',
      href: "/linkAbout",
      current: false,
      mobileicon: line,
    },
  ];

  const collections: navItem[] = [
    {
      name:"Design",
      href: "/linkAbout",
      current: false,
    },
    {
      name: "Illustration",
      href: "/linkAbout",
      current: false,
    },
  ];

  return (
    <div className="min-h-full sticky top-0 z-50 font-bold">
      <div className="bg-white text-black">
        <div className=" flex container h-[52px]">
          <div className="flex items-center w-full ">
              <div className="flex-shrink-0  cursor-pointer">
                <Link href="/home" passHref>
                  <Image
                    src={logo.src}
                    alt="logo"
                    width={100}
                    height={50}
                  />
                </Link>
              </div>
            <button
              className=" flex  md:hidden bg-white text-black   "
              onClick={() => setBurgerMenu(!burgerMenu)}
            >
              {burgerMenu ? (
                <XIcon
                  className="block h-12 w-12 shrink-0 ml-12 "
                  aria-hidden="true"
                />
              ) : (
                <div className="pr-2 mb-2">
                  <Image src={menu.src} alt="menu" height={24} width={32} />
                </div>
              )}
            </button>




            <div className=" md:flex justify-between md:ml-10 md:text-xs md:text-black hidden  ">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  onClick={
                    item.name === "COLLECTIONS"
                      ? () => setCollectionMenu(!collectionMenu)
                      : undefined
                  }
                  onMouseLeave={
                    item.name === "COLLECTIONS"
                      ? () => setCollectionMenu(!collectionMenu)
                      : undefined
                  }
                >
                  <div className="transition ease-in-out duration-1500 hover:stroke-lightBlue">
                    <Link href={item.href} passHref >
                      <a
                        target={item?.target}
                        rel={(item?.target && "noreferrer") || undefined}
                      >
                        <span
                          key={item.name}
                          className={classNames(
                            item.current
                              ? ""
                              : "text-black transition ease-in-out duration-1500 hover:text-lightBlue ",
                            "px-3  flex flex-row text-xs items-center"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <span className="shrink-0">{item.name}</span>
                          <div className="flex flex-row items-center mr-[5%]  ">
                            {item.icon && (
                              <span className="flex sm:self-start pl-2 mt-1">
                                <svg
                                  className="hover:fill-lightBlue"
                                  width="9"
                                  height="5"
                                  viewBox="0 0 9 5"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.37578 4.37578C4.22975 4.37607 4.08823 4.32521 3.97578 4.23203L0.225783 1.10703C0.0981473 1.00095 0.017882 0.848502 0.00264469 0.683235C-0.0125926 0.517969 0.0384461 0.353418 0.144533 0.225782C0.250619 0.098147 0.403064 0.017882 0.56833 0.0026447C0.733597 -0.0125926 0.898147 0.0384458 1.02578 0.144532L4.37578 2.94453L7.72578 0.244533C7.78971 0.192617 7.86327 0.153847 7.94224 0.130452C8.0212 0.107057 8.104 0.0994985 8.1859 0.108211C8.26779 0.116923 8.34715 0.141733 8.41943 0.181217C8.4917 0.2207 8.55546 0.274078 8.60703 0.338283C8.66427 0.402546 8.70762 0.477938 8.73437 0.559734C8.76111 0.64153 8.77068 0.727968 8.76246 0.813632C8.75425 0.899297 8.72843 0.982342 8.68663 1.05756C8.64483 1.13279 8.58794 1.19857 8.51953 1.25078L4.76953 4.26953C4.65386 4.34798 4.51522 4.38539 4.37578 4.37578Z"
                                    fill="white"
                                  />
                                </svg>
                              </span>
                            )}
                          </div>
                          <div className="flex flex-row items-center mr-[5%]  ">
                            {item.icon1 && (
                              <span className="flex sm:self-start pl-2 mt-1">
                                <svg
                                  className="transition ease-in-out duration-1500 hover:fill-lightBlue"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.2222 6.22222C13.0159 6.22222 12.8181 6.30417 12.6722 6.45003C12.5264 6.59589 12.4444 6.79372 12.4444 7V11.6667C12.4444 11.8729 12.3625 12.0708 12.2166 12.2166C12.0708 12.3625 11.8729 12.4444 11.6667 12.4444H2.33333C2.12705 12.4444 1.92922 12.3625 1.78336 12.2166C1.6375 12.0708 1.55556 11.8729 1.55556 11.6667V2.33333C1.55556 2.12705 1.6375 1.92922 1.78336 1.78336C1.92922 1.6375 2.12705 1.55556 2.33333 1.55556H7C7.20628 1.55556 7.40411 1.47361 7.54997 1.32775C7.69583 1.18189 7.77778 0.984057 7.77778 0.777778C7.77778 0.571498 7.69583 0.373667 7.54997 0.227806C7.40411 0.0819442 7.20628 0 7 0H2.33333C1.71449 0 1.121 0.245833 0.683418 0.683418C0.245833 1.121 0 1.71449 0 2.33333V11.6667C0 12.2855 0.245833 12.879 0.683418 13.3166C1.121 13.7542 1.71449 14 2.33333 14H11.6667C12.2855 14 12.879 13.7542 13.3166 13.3166C13.7542 12.879 14 12.2855 14 11.6667V7C14 6.79372 13.9181 6.59589 13.7722 6.45003C13.6263 6.30417 13.4285 6.22222 13.2222 6.22222Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M10.1112 1.55556H11.3401L6.44784 6.44C6.37494 6.5123 6.31708 6.59833 6.27759 6.69311C6.2381 6.78789 6.21777 6.88955 6.21777 6.99222C6.21777 7.0949 6.2381 7.19656 6.27759 7.29134C6.31708 7.38612 6.37494 7.47214 6.44784 7.54444C6.52014 7.61734 6.60617 7.67521 6.70095 7.71469C6.79573 7.75418 6.89739 7.77451 7.00006 7.77451C7.10274 7.77451 7.2044 7.75418 7.29918 7.71469C7.39396 7.67521 7.47998 7.61734 7.55228 7.54444L12.4445 2.66V3.88889C12.4445 4.09517 12.5264 4.293 12.6723 4.43886C12.8182 4.58472 13.016 4.66667 13.2223 4.66667C13.4286 4.66667 13.6264 4.58472 13.7723 4.43886C13.9181 4.293 14.0001 4.09517 14.0001 3.88889V0.777778C14.0001 0.571498 13.9181 0.373667 13.7723 0.227806C13.6264 0.0819442 13.4286 0 13.2223 0H10.1112C9.90489 0 9.70706 0.0819442 9.5612 0.227806C9.41534 0.373667 9.33339 0.571498 9.33339 0.777778C9.33339 0.984057 9.41534 1.18189 9.5612 1.32775C9.70706 1.47361 9.90489 1.55556 10.1112 1.55556Z"
                                    fill="white"
                                  />
                                </svg>
                              </span>
                            )}
                          </div>
                        </span>
                      </a>
                    </Link>
                  </div>
                  {item.name === "COLLECTIONS" && collectionMenu && (
                    <div className="bg-black absolute z-50 text-mediumGrey  text-xs space-y-3 flex flex-col p-4">
                      {collections.map((collection) => (
                        <Link
                          key={collection.href}
                          href={collection.href}
                          passHref
                        >
                          <p className="ease-in-out hover:text-lightBlue  transform transition duration-75 cursor-pointer">
                            {collection.name}
                          </p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className=" bg-black  w-full h-[1px]"/>



        {burgerMenu && (
          <div className="lg:hidden">
            <div className=" container mx-auto  text-2xl space-y-1  ">
    
              {navigation.map((item) => (
                <span
                  key={"disclouser-button" + Math.random()}
                  onClick={() => setBurgerMenu(false)}
                >
                  <Link href={item.href} passHref>
                    <a>
                      <button
                        key={item.name}
                        className={classNames(
                          item.current ? " " : "",
                          "transition ease-in-out  py-6 w-7/12 mx-auto h-full text-2xl flex flex-row items-center hover:text-lightBlue  "
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <div className="flex flex-row  mr-[5%]">
                          {item.mobileicon && (
                            <Image
                              src={item.mobileicon.src}
                              alt="icon"
                              width={14}
                              height={6}
                            />
                          )}
                        </div>

                        <span className="shrink-0 ">{item.name}</span>
                        <div className="transition ease-in-out duration-1500 flex flex-row  items-center mr-[5%] shrink-0 hover:text-lightBlue ">
                        </div>
                      </button>
                    </a>
                  </Link>
                  {item.name === "Collections" && (
                    <div className="  z-50 text-mediumGrey text-lg  container    space-y-4 py-6 w-7/12 mx-auto h-full   items-center">
                      {collections.map((collection) => (
                        <Link key={collection.href} href={collection.href} passHref>
                          <p className="  ease-in-out transform transition duration-75 cursor-pointer hover:text-lightBlue ">
                            {collection.name}
                          </p>
                        </Link>
                      ))}
                    </div>
                  )}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderBlock;
