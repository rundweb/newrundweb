import { BsStars } from "react-icons/bs";

function Home() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen max-w-7xl m-auto p-5 text-center -mt-10 md:-mt-16">
      <h2 className="flex items-center gap-1 border-2 border-emerald-500 py-2 px-4 rounded-full text-sm font-medium text-emerald-900 shadow-md">
        <BsStars /> Generative Intelligence for Analysts
      </h2>
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-emerald-950 text-3xl font-bold md:text-5xl md:w-[860px]">
          Revolutionizing Business Decisions with AI-Powered Analytics
        </h1>
        <p className="font-normal text-emerald-900 sm:w-3/4">
          Harnesses the power of artificial intelligence to transform your
          business data into actionable insights, propelling you to new heights
          of success
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full sm:flex-row items-center justify-center">
        <a
          href=""
          className="w-full md:w-auto text-sm border-2 border-emerald-700  text-emerald-700 font-bold tracking-wide rounded-lg py-[10px] px-8 hover:bg-emerald-700 hover:text-white ease-in-out duration-500"
        >
          Start your free trial
        </a>
        <a
          href=""
          className="w-full md:w-auto text-sm border-2 border-emerald-700  text-white font-bold tracking-wide bg-emerald-700 py-[10px] px-8 rounded-lg hover:bg-white hover:text-emerald-700 ease-in-out duration-500"
        >
          Lets Started
        </a>
      </div>
    </div>
  );
}

export default Home;
