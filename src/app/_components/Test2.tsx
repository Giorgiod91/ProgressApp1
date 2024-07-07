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

  const handleCreateTask = () => {
    const newTask = { id: tasks.length + 1, title, completed: false };
    setTasks([...tasks, newTask]);
    setTitle("");
  };

  const handleUpdateTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className="flex max-w-screen-2xl flex-col overflow-scroll">
      <div className="mb-6 w-full max-w-2xl">
        <h1 className="mb-4 text-center text-3xl font-bold text-gray-800">
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
            className="flex transform items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 text-white shadow-lg transition-transform hover:scale-105 hover:from-blue-600 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
                className="mt-2 flex items-center gap-2 rounded-md border border-gray-400 bg-green-500 px-4 py-2 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
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
