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
    <div className="flex flex-col justify-between space-y-2 md:flex-row md:items-center">
      <div>
        <Badge
          count={tasksLeftCount}
          style={{ backgroundColor: "rgb(30 90 250)" }}
        />
        left count
      </div>

      <Tabs activeTab={activeTab} onTabChange={onTabChange} />
      <Button
        type={"text"}
        icon={<ClearOutlined />}
        className={"text-white hover:!text-blue-500"}
        onClick={clearCompleted}
      >
        Clear completed
      </Button>
    </div>
  );
};

export default Controls;
