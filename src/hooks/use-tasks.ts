import { useLocalStorage } from "usehooks-ts";
import { TASKS_KEY, type Task } from "../models/task";
import React from "react";
import { delay } from "../utils/delay";

export default function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [isLoadingTasks, setIsLoadingTasks] = React.useState(true);
  const [tasks, setTasks] = React.useState<Task[]>([]);

  async function fetchTask() {
    if (isLoadingTasks) {
      await delay(2000);
      setIsLoadingTasks(false);
    }

    setTasks(tasksData);
  }

  React.useEffect(() => {
    fetchTask();
  }, [tasksData]);

  return {
    tasks,
    taskCount: tasks.length,
    concludedTaskCount: tasks.filter((task) => task.concluded).length,
    isLoadingTasks,
  };
}
