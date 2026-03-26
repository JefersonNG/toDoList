import Badge from "../components/badge";
import Text from "../components/text";
import useTasks from "../hooks/use-tasks";

export default function TaskSummary() {
  const { concludedTaskCount, taskCount, isLoadingTasks } = useTasks();
  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-md-bold">Tarefas Criadas</Text>
        <Badge loading={isLoadingTasks} variant="secondary">
          {taskCount}
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant="body-md-bold">Concluídas</Text>
        <Badge loading={isLoadingTasks} variant="primary">
          {concludedTaskCount} - {taskCount}
        </Badge>
      </div>
    </>
  );
}
