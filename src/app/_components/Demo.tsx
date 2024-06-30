import React from "react";

function Demo() {
  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-16 space-x-6 px-6 pb-10 pt-24 sm:px-8 sm:pt-28 lg:flex-row lg:gap-20 lg:pb-20">
      <div className="mx-auto flex max-w-lg flex-col items-center justify-center gap-10 text-center sm:justify-between lg:items-start lg:gap-14 lg:text-left">
        <video className="w-full" autoPlay loop muted>
          <source src="../demo2.mp4" type="video/mp4" />
        </video>
        <button className="via-magenta-500 btn btn-wide bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-blue-500 hover:via-blue-300 hover:to-cyan-400 hover:text-black">
          <a
            href="#payment"
            className="btn btn-wide flex items-center bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-blue-500 hover:via-blue-300 hover:to-cyan-400 hover:text-black"
          >
            <img src="./logo2.jpg" className="w-5" alt="applogo" />
            <span className="ml-2">Get Started</span>
          </a>
        </button>

        <div>
          <p className="text-lg leading-relaxed opacity-80">
            {" "}
            Track your progress and motivate yourself to achieve your goals or
            whatever you aim to achieve
          </p>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-3xl">
        {" "}
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-100 md:-mb-4 lg:text-6xl xl:text-7xl">
          Add new tasks and mark them as complete
        </h1>
      </div>
    </div>
  );
}

export default Demo;
