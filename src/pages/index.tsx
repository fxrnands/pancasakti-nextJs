import React, { useState } from "react";
import { AboutHeader, Header } from "../../public";
import Image from "next/image";
import { LogoHeader } from "../../public";
import { useRouter } from "next/router";
import Button from "./components/base/FlyoutButtons";
import { faculty } from "@/utils/constant";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("http://pmb.panca-sakti.edufecta.com/registrasi?rf=02b85b");
  };

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <Image src={Header} className="w-full h-[40rem] object-cover" alt="" />
      </div>
      <div className="w-full relative bottom-[40rem] h-[45rem]">
        <div className="relative w-64 lg:w-full max-w-6xl top-16 lg:top-36 mb-40 mx-auto">
          <div className="flex justify-center">
            <Image src={LogoHeader} alt="" />
          </div>
          <div className="flex mt-4 lg:mt-8 justify-center">
            <button
              onClick={handleClick}
              className="border border-primary-blue font-bold shadow-sm bg-primary-blue rounded-[4px] text-sm px-4 py-1.5 mt-4 text-white uppercase"
            >
              {`Pendaftaran Online`}
            </button>
          </div>

          <div className="gap-x-4 space-y-4 lg:space-y-0 md:space-y-0 mt-16 px-6 grid grid-rows-1 md:flex justify-center">
            {faculty.map((faculty, index) => (
              <Button
                key={index}
                list={faculty.department}
                buttonName={faculty.name}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="relative mt-8 lg:max-w-full max-w-7xl mx-auto bottom-[42rem]">
        <div className="px-4 lg:max-w-7xl lg:mx-auto">
          <h1 className="font-bold text-lg lg:text-2xl">{`Tentang Kami`}</h1>
          <div className="border-b border-black lg:w-[10rem] w-[7.5rem]" />
        </div>
        <div className="relative mt-8">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <Image
            src={AboutHeader}
            className="w-full lg:h-[40rem] h-[20rem] object-cover"
            alt=""
          />
          <div className="absolute bottom-12 sm:bottom-14 md:bottom-44 lg:bottom-72 px-2 text-white">
            <h1 className="text-center lg:text-4xl font-bold text-xl">
              Sejarah
            </h1>
            <p className="mt-4 lg:mt-8 lg:px-[14rem] px-2 lg:text-xl text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              fugiat eius sint ea, similique animi vitae rem quam fuga
              architecto accusantium illo exercitationem, repellendus quas non
              ex. Alias dolor placeat voluptatibus eaque fugit ad recusandae
              delectus ab. Doloremque, quod pariatur..
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
