import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { useRouter } from "next/router";

export interface ButtonProps {
  list: string[];
  buttonName: string;
}

export default function Button({ list, buttonName }: ButtonProps) {
  const router = useRouter();
  const handleDetail = () => {
    router.push("/detail");
  };
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex justify-center uppercase outline-none w-[15rem] rounded-[30px] px-2 py-2 items-center text-sm font-bold leading-6 text-primary-blue bg-gradient-to-r to-[#68696E] via-[#68696E] from-primary-grey">
        <span className="text-white" style={{ textShadow: "0 0 10px #000000" }}>
          {buttonName}
        </span>
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2  z-10 mt-1 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-56 bg-gradient-to-r to-[#68696E] via-[#68696E] from-primary-grey max-w-md flex-auto overflow-hidden rounded-[4px] bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-2">
              {list?.map((item, index) => (
                <div
                  key={index}
                  className="group relative p-2 uppercase flex gap-x-6 rounded-[4px] hover:bg-tertiary-grey"
                >
                  <div
                    onClick={handleDetail}
                    style={{ textShadow: "0 0 10px #000000" }}
                    className="font-bold text-xs text-white"
                  >
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
