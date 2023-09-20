import { Button } from "antd";
import React from "react";
import { Tab } from "../Types/Types";

interface TabsProps {
  activeTab: Tab;
  onTabChange: (arg: Tab) => void;
}

const tabs: Tab[] = ["All", "Active", "Completed"];

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex flex-wrap justify-center space-x-2">
      {tabs.map((tab) => (
        <Button
          className={"text-white"}
          type={activeTab === tab ? "primary" : "default"}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </Button>
      ))}
    </div>
  );
};
export default Tabs;
