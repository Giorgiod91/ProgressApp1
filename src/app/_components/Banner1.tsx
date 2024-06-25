"use client";
import React from "react";
import Typewriter from "typewriter-effect";

function Banner1() {
  return (
    <div className="via-magenta-500 max-h[13rem] top-40 flex bg-gradient-to-r from-white to-sky-400">
      <div className="mx-auto flex min-h-[13rem] max-w-3xl flex-col justify-center gap-12 md:flex-row md:items-center md:justify-start">
        <div className="max-w-xl space-y-4 px-12 py-12 text-center text-4xl leading-relaxed text-white md:px-0 md:text-left">
          <span className="h-16 text-4xl font-extrabold tracking-tight md:-mb-4 lg:text-4xl xl:text-4xl">
            <Typewriter
              options={{
                strings: ["Empower Your Progress, Fuel Your Motivation"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <div className="hidden aspect-square bg-neutral max-md:w-full md:order-first md:h-[28rem]"></div>
      </div>
    </div>
  );
}

export default Banner1;
