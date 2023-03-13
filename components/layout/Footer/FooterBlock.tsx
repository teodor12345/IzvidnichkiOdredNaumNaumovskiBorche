import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '../Footer/assets/logo.png'


interface P {}

const FooterBlock = ({}: P): JSX.Element => {
  return (
    <>
    <div className="bg-[#0B1D24]">
    <div className=" pt-20 flex justify-center">
    <Image
            src={logo.src}
            alt="single post image"
            width={120}
            height={120}
            objectFit="cover"
          />
    </div>

   <div className="flex pb-5 px-3 m-auto pt-5 text-white border-t  text-sm flex-col
      max-w-screen-lg items-center">
         
      <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex"
      >
      </div>
   </div>
</div>





    <div className="bg-[#0B1D24]">
   <div className="max-w-screen-lg lg:px-0 md:px-5 justify-center items-center text-center pt-0 md:pt-28 pb-12 phoneLarge:grid-cols-2  text-white phoneLarge:grid lg:grid-cols-7 md:grid-cols-7 mx-auto">

      <div className="p-5">
         <div className=" text-xs md:text-md uppercase text-white font-bold">За Нас</div>
      </div>
      <div className="p-5">
         <div className="text-xs md:text-md uppercase text-white font-bold">Галерија</div>
      </div>
      <div className="p-5">
         <div className="text-xs md:text-md uppercase text-white font-bold">Патеки </div>
      </div>
      <div className="p-5">
         <div className="text-xs md:text-md uppercase text-white font-bold">Искуства </div>
      </div>
      <div className="p-5">
         <div className="text-xs md:text-md uppercase text-white font-bold">Контакт </div>
      </div>  <div className="p-5">
         <div className="text-xs md:text-md uppercase text-white font-bold">Политика на приватност </div>
      </div>
      <div className="p-5">
         <div className="text-xs md:text-md uppercase text-white font-bold">Услови на користење </div>
      </div>
   </div>
</div>


</>
  );
};

export default FooterBlock;
