"use client";
import React, { useState } from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { FaCheck, FaPlus } from "react-icons/fa";

const Test2 = () => {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState<
    { id: number; title: string; completed: boolean }[]
  >([]);
  const [allThreeComplete, setAllThreeComplete] = useState(false);
  const [completedTasks, setCompletedTasks] = useState(0);
  const handleCreateTask = () => {
    const newTask = { id: tasks.length + 1, title, completed: false };
    setTasks([...tasks, newTask]);
    setTitle("");
  };

  const handleUpdateTask = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };
  //TODO: Add a counter to count the number of completed tasks and sohwcas it in the UI
  return (
    <div className="flex max-w-screen-2xl flex-col rounded-lg  p-6 shadow-md">
      <div className="mx-auto mb-6 w-full max-w-2xl">
        <h1 className="mb-4 text-center text-3xl font-bold text-black">
          Habit Tracker Demo
        </h1>
        <div className="mb-4 flex items-center justify-center gap-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleCreateTask}
            className="btn btn-wide flex items-center rounded-md bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-blue-500 hover:to-cyan-400 hover:text-black"
          >
            <FaPlus />
            Create Task
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {tasks
          .filter((task) => !task.completed)
          .map((task) => (
            <div
              key={task.id}
              className="flex flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-lg"
            >
              <Card initialTask={task.title} />
              <button
                className="mt-2 flex items-center gap-2 rounded-md border border-gray-400 bg-gradient-to-r from-green-500 to-teal-500 text-white hover:from-green-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                onClick={() => handleUpdateTask(task.id)}
              >
                <FaCheck />
                {task.completed ? "Mark as Incomplete" : "Mark as Complete"}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Test2;
