import React from "react";
import { faculty } from "@/utils/constant";

export default function Home() {
  return (
    <div className="max-w-6xl mb-40 mx-auto">
      <div className="text-center mt-36">
        <h1 className="text-primary-red text-4xl">{`PANCA SAKTI UNIVERSITY`}</h1>
        <button className="border border-primary-blue font-bold shadow-sm bg-primary-blue rounded-[4px] text-sm px-4 py-1.5 mt-4 text-white uppercase">
          Daftar Online
        </button>
      </div>
      <div className="md:space-x-5 grid grid-rows-1 md:flex justify-center">
        {faculty.map((item, index) => (
          <div
            className="text-center w-[20rem] md: border rounded-md h-[15rem] mt-10 py-8 px-6"
            key={index}
          >
            <h1 className="text-base font-bold">{item.name}</h1>
            <div className="flex flex-col">
              <ul className="mt-3">
                {item.department.map((department, index) => (
                  <li className="text-sm mt-1" key={index}>
                    {department}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
