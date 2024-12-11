import { BsStars } from "react-icons/bs";

const HomeComponents = () => {
  return (
    <section className="max-w-screen-xl m-auto overflow-x-hidden flex flex-col items-center justify-center gap-7 mt-20">
      <div className="w-full h-full text-center flex flex-col items-center justify-center gap-5">
        <p className="flex gap-2 items-center justify-center text-sm font-normal text-emerald-950 border-2 border-emerald-100 rounded-full py-2 px-2 shadow-md sm:w-fit sm:px-6 ">
          <BsStars className="text-emerald-600 text-lg" />
          Wujudkan ide menjadi solusi digital
        </p>
        <h1 className="text-emerald-950 font-bold text-4xl sm:max-w-screen-sm ">
          Membangun Solusi Digital yang Elegan dan Fungsional
        </h1>
        <h2 className="text-sm font-normal text-emerald-900 sm:max-w-screen-sm">
          Hai, saya seorang web developer dengan passion untuk menciptakan
          pengalaman digital yang inovatif.
        </h2>
      </div>
      <div className="flex flex-col gap-4 text-center w-full sm:w-auto sm:flex-row">
        <a
          href=""
          className="bg-emerald-600 rounded-md py-2 px-6 text-white font-medium"
        >
          Lihat Portofolio Saya
        </a>
        <a
          href=""
          className="border-2 border-emerald-600 py-2 px-6 rounded-md font-medium text-emerald-600"
        >
          Hubungi Saya Sekarang
        </a>
      </div>
    </section>
  );
};

export default HomeComponents;
