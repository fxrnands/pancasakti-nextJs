import React, { useState } from "react";
import { AboutHeader, Header, Rektor } from "../../public";
import Image from "next/image";
import { LogoHeader } from "../../public";
import { useRouter } from "next/router";
import Button from "./components/base/FlyoutButtons";
import { faculty } from "@/utils/constant";
import Link from "next/link";
import FlyingPopups from "./components/base/FlyingPopups";

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
            className="w-full lg:h-[40rem] h-[24rem] object-cover"
            alt=""
          />
          <div className="absolute bottom-[4.5rem] sm:bottom-14 md:bottom-40 lg:bottom-44 px-2 text-white">
            <h1 className="text-center lg:text-4xl font-bold text-xl">
              Sejarah
            </h1>
            <div className="mt-4 lg:mt-12 lg:px-[10rem] px-2 lg:text-xl text-justify">
              <h1 className="text-[10px] font-bold xl:text-base">{`UNIVERSITAS PANCA SAKTI BEKASI (PSUB)`}</h1>
              <p className="mt-2 xl:mt-4 lg:text-base text-[8px]">
                {`Adalah
                Universitas swasta yang secara resmi dikukuhkan pada tanggal 11
                Juni 2020, ditandai dengan ditandatanganinya Surat Keputusan
                Mentri Pendidikan dan Kebudayaan Nomor : 575/M/2020 atas
                penggabungan Sekolah Tinggi Keguruan dan Ilmu Pendidikan (STKIP)
                Panca Sakti di Bekasi, Sekolah Tinggi Ilmu Ekonomi Indonesia
                Raya di Jakarta dan Sekolah Tinggi Manajemen Informatika dan
                Komputer di Cikarang yang saat ini berkembang menjadi
                Universitas Panca Sakti Bekasi yang diselenggarakan oleh Yayasan
                Panca Sakti Bekasi. Sejak 08 Agustus 2009 awal dari pembentukan
                Perguruan Tinggi Panca Sakti dibawah naungan Yayasan Panca Sakti
                Bekasi yang saat ini berkembang menjadi Universitas Panca Sakti
                memiliki 3 Fakultas dan Program Pascasarjana yang terdiri dari
                Fakultas Ilmu Pendidikan, Fakultas Ekonomi & Bisnis serta
                Fakultas sains dan teknologi yang seluruhnya memiliki 9 Jurusan
                serta Program Studi Magister PAUD (S-2)`}
              </p>
              <div className="flex mt-4 lg:mt-8 justify-between lg:text-base text-[8px]">
                <div className="w-[50%] mr-4 lg:mr-8">
                  <p className="text-xs lg:text-base font-bold">{`Visi`}</p>
                  <p>
                    {`Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                    similique qui numquam repellat modi provident error incidunt
                    quisquam labore molestiae.`}
                  </p>
                </div>
                <div className="w-[50%] ">
                  <p className="text-xs lg:text-base font-bold">Misi</p>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    corrupti libero corporis labore delectus illo magnam vel
                    soluta ex tenetur!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="bg-primary-grey lg:mx-12 rounded-md mx-4 pb-8 pt-4 px-4 absolute bottom-[30rem]">
          <h1 className="flex lg:text-xl text-sm justify-center font-bold">
            Pendaftaran Mahasiswa Baru
          </h1>
          <p className="lg:text-sm text-[8px] text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            dolor quam ipsum veritatis corporis delectus aspernatur dolore optio
            voluptas eligendi a quis eaque magni laboriosam fugiat doloremque,
            rerum molestiae quasi omnis repudiandae error consequatur. Dicta
            dignissimos optio vel ad quaerat.
            <Link
              href={"https://wa.me/081260002880"}
              className="text-secondary-blue underline cursor-pointer ml-2"
            >
              Whatsapp 0811112121212
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
