import { Popover } from "@headlessui/react";
import Image from "next/image";
import { Indonesia, English, Logo, Logo2, LogoNew } from "../../../../public";
import React, { useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { AiOutlineBars } from "react-icons/ai";

const navigation = [
  { name: "Beranda", href: "#", current: true },
  { name: "Tentang Kami", href: "#", current: false },
  { name: "Penerimaan Mahasiswa Baru", href: "#", current: false },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); //state untuk mengendalikan keadaan menu terbuka/tertutup
  const [language, setLanguage] = useState("indonesia"); //state untuk bahasa, defaultnya adalah "indonesia"

  //fungsi untuk mengubah keadaan menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = () => {
    setLanguage(language === "indonesia" ? "english" : "indonesia");
  };

  return (

    <Disclosure as="nav" className="bg-primary-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex gap-x-10 sm:justify-center h-16 items-center lg:justify-between">
              <div className="relative inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <AiOutlineBars
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              {/* div logo */}
              <div className="flex justify-center items-center sm:items-stretch lg:justify-between">
                <div className="items-center h-10 lg:h-10 lg:mt-2">
                  <Image
                    width={45}
                    className="block w-10 relative"
                    src={Logo}
                    alt="PANCASAKTI_UNIVERSITY"
                  />
                </div>
                <div className="w-32 h-12 lg:h-12 lg:mt-2">
                  <Image
                    width={200}
                    className="block h-8 relative top-2"
                    src={Logo2}
                    alt="PANCASAKTI_UNIVERSITY"
                  />
                </div>
              </div>
              {/* div item beranda */}
              <div className="lg:mr-24">
                <div className="hidden sm:flex flex-1 justify-center items-center mt-2">
                  <div className="flex items-center justify-center space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-black font-extrabold"
                            : "text-gray-600 hover:text-black font-bold",
                          "rounded-md pr-3 py-2 text-md font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {/* div switch button language */}
              <div className="absolute flex gap-x-0 inset-y-0 right-0 items-center pr-0 sm:static sm:inset-auto sm:ml-0 sm:pr-0">
                {/* Language */}
                <Menu as="div" className="gap-x-0 relative ml-3">
                  <div className="gap-x-0 mr-8 w-8 h-8 lg:w-full">
                    <Menu.Button className="flex w-7 h-7 rounded-full bg-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-200">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        width={50}
                        className="gap-x-0 h-7 w-7 rounded-full"
                        src={Indonesia}
                        alt=""
                      />
                      <Image
                        width={50}
                        className="gap-x-0 h-7 w-7 rounded-full"
                        src={English}
                        alt=""
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  ></Transition>
                </Menu>
              </div>
              <div className="flex items-center ">
                <button className="border font-bold uppercase w-14 lg:w-36 shadow-md py-1 text-white rounded-full text-[6px] lg:text-xs border-primary-blue bg-primary-blue hover:bg-blue-800">
                  <p>{`Download`}</p>
                  <p>{`Formulir`}</p>
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-400 text-black"
                      : "text-gray-500 hover:bg-gray-400 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
