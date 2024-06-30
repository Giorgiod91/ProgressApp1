"use client";
import React, { useState } from "react";
import { api } from "~/trpc/react";

type Props = {
  refetchTasks: () => void;
};

const InputFields = ({ refetchTasks }: Props) => {
  const [title, setTitle] = useState("");
  const createTaskMutation = api.task.create.useMutation();

  const handleCreateTask = async () => {
    try {
      await createTaskMutation.mutateAsync({ title });
      setTitle("");
      await refetchTasks();
    } catch (error) {
      // Handle error
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="mb-6 w-full max-w-2xl">
      <h1 className="mb-4 text-center text-3xl font-bold text-gray-800">
        Habit Tracker
      </h1>
      <div className="mb-4 flex items-center justify-center gap-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button onClick={handleCreateTask} className="btn btn-primary">
          Add Task
        </button>
      </div>
    </div>
  );
};

export default InputFields;
