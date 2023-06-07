import { Popover } from "@headlessui/react";
import Image from "next/image";
import { Logo, Logo2 } from "../../../../public";
import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Beranda", href: "#", current: true },
  { name: "Tentang Kami", href: "#", current: false },
  { name: "Penerimaan Mahasiswa Baru", href: "#", current: false },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-primary-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-lg p-2 text-gray-600 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 justify-between ml-10 sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    width={50}
                    className="mr-2 block h-10"
                    src={Logo}
                    alt="PANCASAKTI_UNIVERSITY"
                  />
                  <Image
                    width={0}
                    className="block h-9 mr-4 w-auto lg:block"
                    src={Logo2}
                    alt="PANCASAKTI_UNIVERSITY"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-700 text-white"
                            : "text-black hover:bg-gray-700 hover:text-white",
                          "rounded-lg px-3 py-2 text-md font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
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
                      ? "bg-gray-300 text-black"
                      : "text-gray-400 hover:bg-gray-600 hover:text-black",
                    "block rounded-lg px-3 py-2 text-base font-medium"
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

{
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
          <div className="mx-auto h-[3.5rem] lg:h-[5rem] flex justify-between max-w-7xl px-4 sm:px-6 lg:px-8">
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
                <p>Download </p>
                <p>Formulir</p>
              </button>
            </div>
          </div>
        </>
      )}
    </Popover>
  </>;
}
