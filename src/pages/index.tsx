import React from "react";
import { AboutHeader, Pmb, Pmb2, Pmb3 } from "../../public";
import Image from "next/image";
import { LogoHeader } from "../../public";
import { useRouter } from "next/router";
import Button from "./components/base/FlyoutButtons";
import { faculty, history, mission, vision } from "@/utils/constant";
import ImageSlider from "./components/base/Slider";
import Slider from "./components/base/GallerySlider";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("http://pmb.panca-sakti.edufecta.com/registrasi?rf=02b85b");
  };

  const handleDetail = () => {
    router.push("/information");
  };

  return (
    <>
      <div className="relative h-[40rem]">
        <ImageSlider />
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
                handleDetail={handleDetail}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="relative mt-8 max-w-full bottom-[48rem]">
        <div className="px-4 bg-primary-grey pt-4 pb-6 lg:pb-8 lg:pt-6">
          <h1 className="font-bold text-lg lg:max-w-7xl lg:mx-auto lg:text-2xl">{`Tentang Kami`}</h1>
          <div className="border-b border-black max-w-7xl lg:ml-[4rem] lg:w-[10rem] w-[7.5rem]" />
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <Image
            src={AboutHeader}
            className="w-full lg:h-[40rem] h-[24rem] object-cover"
            alt=""
          />
          <div className="absolute top-[1rem] sm:top-14 md:bottom-40 lg:top-12 px-2 text-white">
            <h1 className="text-center lg:text-4xl font-bold text-xl">
              {`Sejarah`}
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
            </div>
          </div>
        </div>
      </div>
      <div className=" -mt-[48rem] bottom-[48rem]">
        <div className=" lg:-bottom-[11rem]">
          <div className="bg-primary-grey  py-4 px-4 lg:pt-6 lg:pb-8">
            <div className=" w-[170px]  lg:w-[340px] lg:ml-16">
              <h1 className="lg:text-2xl mb-1 mx-auto text-xs font-bold">
                Pendaftaran Mahasiswa Baru
              </h1>
              <div className="border-b border-b-black" />
            </div>
          </div>
          <div className="grid lg:px-24 lg:mt-8 lg:flex justify-between">
            <div className="w-[20rem] mt-4 lg:mr-16 lg:w-[50%]">
              <Image src={Pmb} width={1000} alt="" />
            </div>
            <div className="lg:w-[50%] mt-4 bg-primary-grey lg:h-[20rem]">
              <Image src={Pmb2} width={1000} alt="" />
            </div>
          </div>
        </div>
        <div className="mt-4 lg:mt-24 flex justify-center">
          <Image src={Pmb3} width={1000} alt="" />
        </div>
      </div>
      <div className="relative mt-2">
        <div className="bg-primary-grey py-4 px-4 lg:pt-6 lg:pb-8">
          <h1 className="lg:text-2xl mb-1 max-w-7xl mx-auto text-sm font-bold">
            {`Gallery Foto & Video`}
          </h1>
        </div>
        <div className="lg:flex grid py-4 items-center lg:justify-center">
          <div className="lg:mr-4 rounded-sm bg-gray-300 lg:px-4 py-4 lg:py-[54px]">
            <Slider />
          </div>
          <div className="lg:mt-0 mt-4">
            <iframe
              className="lg:w-[40rem] h-[15rem] w-full lg:h-[20rem]"
              src="https://www.youtube.com/embed/XxV7VOS1Q24"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
