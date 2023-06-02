import { Popover } from "@headlessui/react";
import Image from "next/image";
import { Logo } from "../../../../public";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <>
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? "fixed inset-0 z-40 overflow-y-auto" : "",
            "lg:static shadow-lg bg-primary-grey lg:overflow-y-visible"
          )
        }
      >
        {({ open }) => (
          <>
            <div className="mx-auto h-[4.5rem] flex justify-between max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
                <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                  <div className="flex flex-shrink-0 items-center">
                    <div className="flex">
                      <Image
                        src={Logo}
                        alt="PANCASAKTI_UNIVERSITY"
                        width={50}
                        height={50}
                      />
                      <p className="hidden text-yellow-500 font-bold md:flex ml-2 items-center text-lg">{`PANCA SAKTI UNIVERSITY`}</p>
                    </div>
                  </div>
                </div>
                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                  <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                    <div className="w-full">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center ">
                <button className="border font-bold uppercase w-40 shadow-md py-2 text-white rounded-md text-xs border-primary-blue bg-primary-blue">
                  Download Formulir
                </button>
              </div>
            </div>
          </>
        )}
      </Popover>
    </>
  );
}
