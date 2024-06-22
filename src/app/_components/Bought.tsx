"use client";
import confetti from "canvas-confetti";
import React, { use, useEffect, useState } from "react";
import { api } from "~/trpc/server";
import Card from "./Card";

type Props = {};

function Bought({}) {
  const triggerConfetti = () => {
    confetti();
  };
  const [workoutsCompleted, setWorkoutsCompleted] = useState(0);
  const [button1Clicked, setButton1Clicked] = useState(false);
  const [button2Clicked, setButton2Clicked] = useState(false);
  const [button3Clicked, setButton3Clicked] = useState(false);

  // State to track whether each button is disabled
  const [button1Disabled, setButton1Disabled] = useState(false);
  const [button2Disabled, setButton2Disabled] = useState(false);
  const [button3Disabled, setButton3Disabled] = useState(false);
  const handleClickButton1 = () => {
    setButton1Clicked(true);

    setWorkoutsCompleted(workoutsCompleted + 33);

    setButton1Disabled(true);
  };

  const handleClickButton2 = () => {
    setButton2Clicked(true);

    setWorkoutsCompleted(workoutsCompleted + 33);
    setButton2Disabled(true); // Disable button after it's clicked
  };

  const handleClickButton3 = () => {
    setButton3Clicked(true);

    setWorkoutsCompleted(workoutsCompleted + 33);
    setButton3Disabled(true); // Disable button after it's clicked
  };

  // function to create a Aufgabe in my mongoDB database

  const tasks = ["hund raus", "essen machen", "arbeiten"];
  return (
    <div className="h-screen bg-gray-100">
      <div className="grid-cols-2 space-x-4 p-5 lg:grid xl:grid-cols-3">
        <div className="flex w-1/5 flex-row border">
          <Card initialTask="Task" />
          <Card initialTask="Task" />
          <Card initialTask="Task" />

          <h2 className="border">Summary</h2>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Bought;
