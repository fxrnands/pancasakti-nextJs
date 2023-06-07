import { Popover } from "@headlessui/react";
import Image from "next/image";
import { Logo, Logo2 } from "../../../../public";
import React from "react";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  return (
    <>
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? "fixed inset-0 z-40 overflow-y-auto" : "",
            "lg:static bg-primary-grey lg:overflow-y-visible"
          )
        }
      >
        {({ open }) => (
          <>
            <div className="mx-auto h-[3.5rem] lg:h-[5rem] flex justify-between max-w-7xl px-4 sm:px-6">
              <div className="relative flex justify-between ">
                <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                  <div className="flex flex-shrink-0 items-center">
                    <div className="flex w-28 lg:w-full lg:mt-6 mt-12">
                      <div>
                        <Image
                          src={Logo}
                          alt="PANCASAKTI_UNIVERSITY"
                          width={50}
                          className="mr-2"
                        />
                      </div>
                      <div className="h-20 relative top-2">
                        <Image
                          src={Logo2}
                          alt="PANCASAKTI_UNIVERSITY"
                          width={200}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center ">
                <button className="border font-bold uppercase w-14 lg:w-36 shadow-md py-1 text-white rounded-full text-[6px] lg:text-xs border-primary-blue bg-primary-blue hover:bg-blue-800">
                  <p>{`Download`}</p>
                  <p>{`Formulir`}</p>
                </button>
              </div>
            </div>
          </>
        )}
      </Popover>
    </>
  );
}

export default Navbar;
