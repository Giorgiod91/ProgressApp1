import React from "react";

function Banner2() {
  return (
    <div className="top-40 flex max-h-[13rem] bg-gradient-to-r from-blue-500 via-blue-300 to-cyan-400">
      <div className="mx-auto flex min-h-[13rem] max-w-3xl flex-col justify-center gap-12 md:flex-row md:items-center md:justify-start">
        <div className="max-w-xl space-y-4 px-12 py-12 text-center text-4xl leading-relaxed text-black md:px-0 md:text-left">
          <span className="h-16 text-4xl font-extrabold tracking-tight  text-white md:-mb-4 lg:text-4xl xl:text-4xl">
            Track, Improve, Succeed
          </span>
        </div>
        <div className="hidden aspect-square bg-neutral max-md:w-full md:order-first md:h-[28rem]"></div>
      </div>
    </div>
  );
}

export default Banner2;
