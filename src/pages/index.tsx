import React, { useState } from "react";
import { faculty } from "@/utils/constant";

export default function Home() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleExpand = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-6xl mb-40 mx-auto">
      <div className="text-center mt-36">
        <h1 className="text-primary-red font-bold text-4xl">
          PANCA SAKTI UNIVERSITY
        </h1>
        <button className="border border-primary-blue font-bold shadow-sm bg-primary-blue rounded-[4px] text-sm px-4 py-1.5 mt-4 text-white uppercase">
          Daftar Online
        </button>
      </div>
      <div className="md:space-x-5 grid grid-rows-1 md:flex justify-center">
        {faculty.map((item, index) => (
          <div className="mt-10" key={index}>
            <div
              className={`text-center bg-primary-white w-[20rem] md:border rounded-md py-8 px-6 relative overflow-hidden transition-height duration-300 ${
                index === expandedIndex
                  ? "h-[17rem] "
                  : "h-[5.5rem] cursor-pointer"
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
  );
}
