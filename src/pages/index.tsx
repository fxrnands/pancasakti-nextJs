import React, { useState } from "react";
import { faculty } from "@/utils/constant";
import { Header } from "../../public";
import Image from "next/image";
import { LogoHeader } from "../../public";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleExpand = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

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
        <div className="relative w-64 lg:w-full max-w-6xl top-12 lg:top-36 mb-40 mx-auto">
          <div className="flex justify-center">
            <Image src={LogoHeader} alt="" />
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleClick}
              className="border border-primary-blue font-bold shadow-sm bg-primary-blue rounded-[4px] text-sm px-4 py-1.5 mt-4 text-white uppercase"
            >
              Daftar Online
            </button>
          </div>

          <div className="md:space-x-5 px-6 grid grid-rows-1 md:flex justify-center">
            {faculty.map((item, index) => (
              <div className="mt-10" key={index}>
                <div
                  className={`text-center bg-primary-white w-[16rem] lg:w-[14rem] md:border rounded-md py-3 px-6 relative overflow-hidden transition-height duration-300 ${
                    index === expandedIndex
                      ? "h-[17rem] "
                      : "h-[3rem] lg:h-[5rem] cursor-pointer"
                  }`}
                  onClick={() => handleExpand(index)}
                >
                  <h1 className="text-base font-bold">{item.name}</h1>
                  {index === expandedIndex && (
                    <ul>
                      {item.department.map((department, index) => (
                        <li
                          className="text-sm mt-4 py-1 hover:bg-gray-300 "
                          key={index}
                        >
                          {department}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
