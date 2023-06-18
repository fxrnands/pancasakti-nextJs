import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function FlyingPopups() {
  return (
    <>
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-start px-1 py-6 lg:mt-[40rem] justify-end"
      >
        <div className="flex w-full flex-col items-end space-y-4 sm:items-end">
          <div className="pointer-events-auto cursor-pointer w-[11rem] top-[34rem] lg:top-0 relative lg:w-[13.5rem] max-w-sm overflow-hidden rounded-lg hover:bg-green-500 bg-primary-green ">
            <div className="px-4 hover:shadow-lg py-1 lg:py-3">
              <div className="flex items-start">
                <div className="flex-shrink-0 -mr-1.5 ml-1 lg: mt-[4px]">
                  <FaWhatsapp
                    className="lg:h-6 lg:w-6 w-4 h-4 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 lg:mt-1 -mt-0.5 w-0 flex-1 ">
                  <Link
                    href={`https://wa.me/6281260002880`}
                    className="lg:text-base text-[12px] text-white font-bold"
                  >
                    WhatsApp Center
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
