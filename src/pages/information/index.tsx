import React from "react";

const DetailPage = () => {
  return (
    <>
      {/* content */}
      <div className="relative lg:flex grid grid-flow-row auto-rows-max">
        <div className="lg:p-0 bg-gradient-to-b from-yellow-300 to-sky-100 h-[65rem] lg:h-[45rem] lg:w-[50%] p-2 items-center lg:flex justify-center rounded-md">
          <div className="absolute px-2 lg:h-[50rem] lg:w-[40rem]">
            <h1 className="text-lg mt-4 lg:mt-16 lg:text-xl text-gray-800 text-center underline font-bold">
              {"Fakultas Pendidikan Ekonomi"}
            </h1>
            <div className="flex mb-2 justify-center bg-gradient-to-r from-red-700 to-transparent mx-32 mt-2 items-center lg:mx-36 rounded-full">
              <h2 className="text-center lg:text-lg text-primary-white rounded-lg font-bold">
                {"Kurikulum"}
              </h2>
            </div>
            <span className="ml-3 lg:ml-0 font-bold text-gray-700 text-md lg:text-lg">
              {"Semester"}
            </span>
            <div>
              <ul className="px-6 mt-2 ml-4 text-gray-800 lg:px-4 lg:text-md list-decimal">
                <li>
                  {
                    "Pendidikan Agama, Bahasa Inggris Basic, Communication & Editing Video dan Animasi, B. Indonesia, PPKN, Dasar-dasar Pendidikan, Filsafat Ilmu Pendidikan, Pengantar Akuntansi, Pengantar Ekonomi & Bisnis"
                  }
                </li>
                <li className="mt-2">
                  {
                    "Social Media, Perekonomian Indonesia, Statistik Bisnis, Bank & Lembaga Keuangan, PPKN, Pengantar Ekonomi Mikro, Pengantar Manajemen, Digital Business"
                  }
                </li>
                <li className="mt-2">
                  {
                    "Pemasaran & Promosi, Strategi Pembelajaran, Bank & Lembaga Keuangan Lain, Akuntansi Biaya, Akuntansi Keuangan, Kurikulum & Buku Teks Ekonomi, Ekonomi Pendidikan, Teori Ekonomi Makro."
                  }
                </li>
                <li className="mt-2">
                  {
                    "Artificial Intelligent, Perilaku Organisasi, Akuntansi Manajemen, Manajemen SDM, Manajemen Operasional, Ekonomi Syariah, Manajemen Logistik, Sistem Informasi Manajemen."
                  }
                </li>
                <li className="mt-2">
                  {
                    "Public Speaking, Evaluasi Pembelajaran, Perekonomian Internasional, Profesi Keguruan, Metodologi Penelitian, Manajemen Berbasis Sekolah, Pemantapan Kemampuan Mengajar, Bank & Lembaga Keuangan Lain, Ekonomi Pendidikan."
                  }
                </li>
                <li className="mt-2">
                  {
                    "Pendidikan Anti Korupsi, B. Inggris Intermediate, Bisnis Network, Leadership, Service Excellent, Kecerdasan Emosional, Kewirausahaan."
                  }
                </li>
                <li className="mt-2">
                  {
                    "Pendidikan Karakter, B. Inggris Advance, Kreatifitas dan Inovasi, Studi Kelayakan Bisnis, Simulasi Bisnis, PPL, Pengabdian Masyarakat."
                  }
                </li>
                <li className="mt-2">
                  {
                    "Seminar hasil & Publikasi Penelitian Dan Seminar Internasional."
                  }
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-auto py-6 w-full lg:w-[50%] bg-gradient-to-b from-gray-500 from-40% via-yellow-500 rounded-md">
          <div className="flex justify-center bg-gradient-to-r from-red-700 mx-20 lg:mx-48 lg:mt-36 items-center rounded-md">
            <h2 className="text-center text-primary-white rounded-md font-bold">
              {"Kelas dan Jadwal Perkuliahan"}
            </h2>
          </div>
          <div className="py-2 mx-4 lg:mx-24 mt-6 rounded-md bg-yellow-400">
            <h2 className="ml-2 text-center text-gray-500 font-bold">
              Kelas Reguler Pagi
            </h2>
            <h2 className="text-center text-gray-500 rounded-md font-bold">
              {`(Senin - Jum'at) Pukul: 09.00 - 14.30 WIB`}
            </h2>
          </div>
          <div className="py-2 mx-4 lg:mx-24 mt-9 rounded-md bg-yellow-200">
            <h2 className="ml-2 text-center text-gray-500 font-bold">
              Kelas Reguler Sore
            </h2>
            <h2 className="text-center text-gray-500 rounded-md font-bold">
              {`(Senin - Jum'at) Pukul: 18.30 - 20.00 WIB`}
            </h2>
          </div>
          <div className="py-2 mx-4 lg:mx-24 mt-9 rounded-md bg-sky-200">
            <h2 className="ml-2 text-center text-gray-500 font-bold">
              Kelas Reguler Plus
            </h2>
            <h2 className="text-center text-gray-500 rounded-md font-bold">
              (Sabtu & Minggu) Pukul: 09.00 - 17.30 WIB
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
