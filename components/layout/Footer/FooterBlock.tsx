import React from "react";
import Image from "next/image";
import logo from "../Header/assets/logo.png";
import Link from "next/link";


interface P {}

const FooterBlock = ({}: P): JSX.Element => {
  return (
    <>
    <div className="bg-white">
   <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
   <div className="flex cursor-pointer">
                <Link href="/home" passHref>
                  <a>
                    <Image src={logo} alt="logo" />
                  </a>
                </Link>
              </div>
      <div className="p-5">
         <div className="text-sm uppercase text-black font-bold">Collections</div>
         <a className="my-3 block" href="/#">Designs <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Editorial <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Bella Collection <span className="text-teal-600 text-xs p-1">New</span></a> 
      </div>
      <div className="p-5">
         <div className="text-sm uppercase text-black font-bold">Art Work</div>
         <a className="my-3 block" href="/#">Illustrations <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Portraits <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Covers <span className="text-teal-600 text-xs p-1"></span></a> 
      </div>
      <div className="p-5">
         <div className="text-sm uppercase text-black font-bold">Contact </div>
         <a className="my-3 block" href="/#">XXX XXXX <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">contact@company.com <span className="text-teal-600 text-xs p-1"></span></a> 
      </div>
   </div>
</div>

<div className="bg-white">
   <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      max-w-screen-lg items-center">
      <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
      </div>
      <div className="my-5">© Copyright 2022. All Rights Reserved.</div>
   </div>
</div>
</>
  );
};

export default FooterBlock;
