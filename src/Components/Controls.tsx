import { Tab } from "../Types/Types";
import React from "react";
import Tabs from "./Tabs";
import { Badge, Button } from "antd";
import { ClearOutlined } from "@ant-design/icons";

interface ControlsProps {
  activeTab: Tab;
  onTabChange: (arg: Tab) => void;
  tasksLeftCount: number;
  clearCompleted: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  activeTab,
  onTabChange,
  tasksLeftCount,
  clearCompleted,
}) => {
  return (
    <div className="flex flex-col justify-between space-y-4">
      <div>
        <Badge count={tasksLeftCount} color="#1e59fa" />
        &nbsp;left count
      </div>
      <Tabs activeTab={activeTab} onTabChange={onTabChange} />
      <div>
        <Button
          type={"text"}
          size={"small"}
          icon={<ClearOutlined className={"text-blue-400"} />}
          className={"text-white hover:!text-blue-500"}
          onClick={clearCompleted}
        >
          Clear completed
        </Button>
      </div>
    </div>
  );
};

export default Controls;
