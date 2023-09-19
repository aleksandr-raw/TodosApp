import React, { useCallback, useState } from "react";
import { Button, Input } from "antd";
import { SendOutlined } from "@ant-design/icons";

interface TaskCreatorProps {
  onAddTask: (task: string) => void;
}

const TaskCreator: React.FC<TaskCreatorProps> = ({ onAddTask }) => {
  const [description, setDescription] = useState<string>(""); //rename

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDescription(e.target.value);
    },
    [setDescription],
  );

  const handleAddTask = () => {
    if (description.trim()) {
      onAddTask(description);
      setDescription("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTask();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center space-x-2 mb-4">
        <Input
          className="w-full"
          type="text"
          size="large"
          placeholder="What needs to be done?"
          value={description}
          onChange={handleInputChange}
        />
        <Button
          type="text"
          size="large"
          className="flex items-center justify-center"
          onClick={handleAddTask}
          disabled={!description.trim()}
        >
          <SendOutlined className="text-white text-xl hover:text-blue-400" />
        </Button>
      </div>
    </form>
  );
};

export default TaskCreator;
