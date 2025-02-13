import React from "react";

function Motivate1() {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 ">
      <h1 className="border-b-8 border-dashed border-primary p-5 text-5xl font-extrabold tracking-tight text-slate-100  hover:border-red-500 md:-mb-4 lg:text-6xl xl:text-7xl">
        A goal without a plan is just a wish{" "}
      </h1>

      <div className="mx-auto flex max-w-lg flex-col items-center justify-center gap-10 text-center  sm:justify-between lg:items-start lg:gap-14 lg:text-left">
        <ul className="steps steps-vertical ">
          <li className="step step-primary">Register </li>
          <li className="step step-primary">Set Your Goals</li>
          <li className="step">Work Towards Your Goal</li>
          <li className="step">Mark Goals as Complete</li>
        </ul>

        <div></div>
      </div>
      <div className="relative mx-auto w-full max-w-3xl"></div>
    </div>
  );
}

export default Motivate1;
