import React from "react";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import PencilIcon from "../assets/icons/PencilSimple-Regular.svg?react";
import TrashIcon from "../assets/icons/Trash-Regular.svg?react";
import XIcon from "../assets/icons/X-Regular.svg?react";
import CheckIcon from "../assets/icons/Check-Regular.svg?react";
import InputText from "../components/input-text";
import { type Task } from "../models/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/use-task";
import Skeleton from "../components/skeleton";
import { delay } from "../utils/delay";

interface TaskProps {
  task: Task;
  loading?: boolean;
}

export default function TaskItem({ task, loading }: TaskProps) {
  const [isEditing, setIsEditing] = React.useState(task?.state === "creating");

  const [taskTitle, setTaskTitle] = React.useState(task.title || "");

  const [isHandling, setIsHandling] = React.useState(false);

  const { updateTask, updateTaskStatus, deleteTask } = useTask();

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || "");
  }

  async function handleSaveTask(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsHandling(true);
    await delay(1000);
    updateTask(task.id, { title: taskTitle });
    setIsEditing(false);

    setIsHandling(false);
  }

  function handleClickIsEditing() {
    setIsEditing(true);
  }

  function handleExitEditing() {
    if (task.state === "creating") {
      deleteTask(task.id);
    }
    setIsEditing(false);
  }

  function handleChangeChecked(e: React.ChangeEvent<HTMLInputElement>) {
    const concluded = e.target.checked;

    console.log(e.target.value);

    updateTaskStatus(task.id, concluded);
  }

  async function handleDeleteTask() {
    setIsHandling(true);
    await delay(1000);
    deleteTask(task.id);
    setIsHandling(false);
  }

  return (
    <Card size="md" className="flex items-center gap-4">
      {!isEditing ? (
        <>
          <InputCheckbox
            value={task.state || ""}
            checked={task?.concluded}
            onChange={handleChangeChecked}
            loading={loading}
          />
          {!loading ? (
            <Text className={cx("flex-1", { "line-through": task?.concluded })}>
              {task?.title}
            </Text>
          ) : (
            <Skeleton className="h-6 flex-1" />
          )}
          <div className="flex gap-1">
            <ButtonIcon
              icon={TrashIcon}
              variant="tertiary"
              onClick={handleDeleteTask}
              loading={loading}
              handle={isHandling}
            />
            <ButtonIcon
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleClickIsEditing}
              loading={loading}
            />
          </div>
        </>
      ) : (
        <form onSubmit={handleSaveTask} className="flex gap-2 flex-1">
          <InputText
            onChange={handleChangeTaskTitle}
            required
            autoFocus
            className="flex-1"
            value={taskTitle}
          />
          <div className="flex gap-1">
            <ButtonIcon
              type="button"
              variant="tertiary"
              icon={XIcon}
              onClick={handleExitEditing}
            />
            <ButtonIcon handle={isHandling} type="submit" icon={CheckIcon} />
          </div>
        </form>
      )}
    </Card>
  );
}
