"use client";
import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

type Props = {
  initialTask: string;
};

function Card({ initialTask = "Task" }: Props) {
  const triggerConfetti = () => {
    void confetti();
  };

  const [task, setTask] = useState(initialTask);
  const [workoutsCompleted, setWorkoutsCompleted] = useState(0);
  const [allWorkoutsCompleted, setAllWorkoutsCompleted] = useState(false);

  const [button1Clicked, setButton1Clicked] = useState(false);
  const [button2Clicked, setButton2Clicked] = useState(false);
  const [button3Clicked, setButton3Clicked] = useState(false);

  const [button1Disabled, setButton1Disabled] = useState(false);
  const [button2Disabled, setButton2Disabled] = useState(false);
  const [button3Disabled, setButton3Disabled] = useState(false);

  const handleClickButton1 = () => {
    setButton1Clicked(true);
    triggerConfetti();
    setWorkoutsCompleted(workoutsCompleted + 33);
    setButton1Disabled(true);
  };

  const handleClickButton2 = () => {
    setButton2Clicked(true);
    triggerConfetti();
    setWorkoutsCompleted(workoutsCompleted + 33);
    setButton2Disabled(true);
  };

  const handleClickButton3 = () => {
    setButton3Clicked(true);
    triggerConfetti();
    setWorkoutsCompleted(workoutsCompleted + 33);
    setButton3Disabled(true);
  };

  useEffect(() => {
    if (workoutsCompleted === 99) {
      setAllWorkoutsCompleted(true);
    }
  }, [workoutsCompleted]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="card card-side bg-base-300 shadow-xl "
    >
      <figure>
        <img
          src={"./logo1.jpg"}
          alt="Movie"
          className="h-64 w-full rounded-lg object-cover object-center p-2 shadow-lg sm:h-80"
        />
      </figure>
      <motion.div variants={item} className="card-body">
        <h2 className="card-title">Track Your Progress</h2>
        <input type="text" value={task} onChange={handleInputChange} />
        <p>Click and mark parts as complete</p>
        <progress
          className="progress progress-error w-56"
          value={workoutsCompleted}
          max="100"
        ></progress>
        {allWorkoutsCompleted && (
          <div className="alert alert-success bg-slate-50">
            <div className="flex-1">
              <label>Weekly Goal Completed ! 😃</label>
            </div>
          </div>
        )}

        <div className="card-actions justify-end space-x-2">
          <button
            onClick={handleClickButton1}
            disabled={button1Disabled}
            className={`h-[80px] w-[300px] bg-[#FFE8C8] font-serif text-2xl shadow-lg transition duration-200 hover:translate-x-3 hover:bg-[#F3F7EC] ${
              button1Clicked
                ? "bg-gradient-to-tr from-red-500 to-pink-500 text-white"
                : "text-black"
            }`}
          >
            {task} 1
          </button>

          <button
            onClick={handleClickButton2}
            disabled={button2Disabled}
            className={`h-[80px] w-[300px] bg-[#FFE8C8] font-serif text-2xl shadow-lg transition duration-200 hover:translate-x-3 hover:bg-[#F3F7EC] ${
              button2Clicked
                ? "bg-gradient-to-tr from-red-500 to-pink-500 text-white"
                : "text-black"
            }`}
          >
            {task} 2
          </button>
          <button
            onClick={handleClickButton3}
            disabled={button3Disabled}
            className={`h-[80px] w-[300px] bg-[#FFE8C8] font-serif text-2xl shadow-lg transition duration-200 hover:translate-x-3 hover:bg-[#F3F7EC] ${
              button3Clicked
                ? "bg-gradient-to-tr from-red-500 to-pink-500 text-white"
                : "text-black"
            }`}
          >
            {task} 3
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Card;
