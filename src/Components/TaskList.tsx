import { Task } from "../Types/Types";
import React from "react";
import TaskItem from "./TaskItemComponent";

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask }) => {
  return (
    <div className={"mb-4 pb-8 h-96 max-h-96 overflow-auto"}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={() => onToggleTask(task.id)}
        />
      ))}
      {tasks.length === 0 && (
        <div className={"py-4"}>
          <h3
            className={
              "mb-2 text-lg text-blue-400 py-12 bg-gray-500/10 rounded-xl"
            }
          >
            No tasks
          </h3>
        </div>
      )}
    </div>
  );
};

export default TaskList;
