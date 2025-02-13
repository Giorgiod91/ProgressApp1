import React from "react";
import Card from "./Card";

// TODO: add a little tooltip above the card component with the message Demo to show the visitor that the card is interactive
function LandingPage() {
  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-16 px-6 pb-10 pt-8 sm:px-8 sm:pt-12 lg:flex-row lg:gap-20 lg:pb-20">
      <div className="mx-auto flex max-w-lg flex-col items-center justify-center gap-10 text-center sm:justify-between lg:items-start lg:gap-14 lg:text-left">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-100 md:-mb-4 lg:text-6xl xl:text-7xl">
          Progress Tracker
          <span className="via-magenta-500 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
            Track Progress
          </span>{" "}
          in a{" "}
          <span className="bg-gradient-to-r from-blue-500 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
            Fun Way
          </span>
        </h1>

        <a
          href="#payment"
          className="btn btn-wide flex items-center rounded-md bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-blue-500 hover:to-cyan-400 hover:text-black"
        >
          <img src="./logo2.jpg" className="w-5" alt="applogo" />
          <span className="ml-2">Get Started</span>
        </a>

        <div>
          <p className="text-lg leading-relaxed opacity-80">
            Track your progress and motivate yourself to achieve your goals or
            whatever you aim to achieve.
          </p>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-3xl">
        <Card initialTask="Task" />
      </div>
    </div>
  );
}

export default LandingPage;
