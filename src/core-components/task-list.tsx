import PlusIcon from "../assets/icons/Plus-Regular.svg?react";
import TaskItem from "./task-item";
import Button from "../components/button";
import useTasks from "../hooks/use-tasks";
import useTask from "../hooks/use-task";
import { cx } from "class-variance-authority";
import type { Task } from "../models/task";

export default function TaskList() {
  const { tasks, isLoadingTasks } = useTasks();
  const { prepareTask } = useTask();

  return (
    <>
      <section>
        <Button
          onClick={prepareTask}
          className={cx(" w-full")}
          disabled={
            tasks.some((tasks) => tasks.state === "creating") || isLoadingTasks
          }
          icon={PlusIcon}
        >
          Nova tarefa
        </Button>
      </section>
      <section className="space-y-2">
        {!isLoadingTasks &&
          tasks.map((task) => <TaskItem key={task.id} task={task} />)}
        {isLoadingTasks && (
          <>
            <TaskItem task={{} as Task} loading />
            <TaskItem task={{} as Task} loading />
            <TaskItem task={{} as Task} loading />
          </>
        )}
      </section>
    </>
  );
}
