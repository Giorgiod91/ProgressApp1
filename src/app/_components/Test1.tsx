"use client";
import React, { useState } from "react";
import { api } from "~/trpc/react";
import Card from "./Card";

const TaskComponent = () => {
  const [title, setTitle] = useState("");
  const {
    data: tasks,
    isLoading,
    refetch: refetchTasks,
  } = api.task.getAll.useQuery();
  const createTaskMutation = api.task.create.useMutation();
  const updateTaskMutation = api.task.update.useMutation();

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

  const handleUpdateTask = (taskId: number) => {
    updateTaskMutation.mutate(
      {
        taskId: taskId.toString(),
        completed: true,
      },
      {
        onError: (error) => {
          console.error("Error updating task:", error);
        },
        onSuccess: () => {
          void refetchTasks(); // Using void to suppress the promise warning
        },
      },
    );
  };

  if (isLoading) return <div>Loading... No Access need to be logged in !</div>;

  return (
    <div className="flex max-w-screen-2xl flex-col">
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
            Create Task
          </button>
          <h2>weekly tracker</h2>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {tasks
          ?.filter((task) => !task.completed)
          .map((task) => (
            <div
              key={task.id}
              className="flex flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-lg"
            >
              <Card initialTask={task.title} />
              <button
                className="mt-2 rounded-md border border-gray-400 bg-green-500 px-4 py-2 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                onClick={() => handleUpdateTask(task.id)}
              >
                {task.completed ? "Mark as Incomplete" : "Mark as Complete"}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TaskComponent;
