import { Task } from "../Types/Types";
import React from "react";
import { Checkbox } from "antd";

interface TaskItemProps {
  task: Task;
  onToggle: () => void;
}

const TaskItemComponent: React.FC<TaskItemProps> = ({ task, onToggle }) => {
  return (
    <div
      className={`bg-gray-500/10 mb-2 rounded-xl p-2 flex text-lg items-center text-left ${
        task.completed ? "line-through" : ""
      }`}
    >
      <Checkbox
        checked={task.completed}
        onChange={onToggle}
        className={"mr-2"}
      />
      <span className={"first-letter:uppercase"}>{task.description}</span>
    </div>
  );
};

export default TaskItemComponent;
