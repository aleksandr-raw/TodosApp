import { Segmented } from "antd";
import React from "react";
import { Tab } from "../Types/Types";

interface TabsProps {
  activeTab: Tab;
  onTabChange: (arg: Tab) => void;
}

const tabs: Tab[] = ["All", "Active", "Completed"];

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="justify-center">
      <Segmented
        className={"text-white bg-gray-600"}
        block={true}
        options={tabs}
        value={activeTab}
        size={"middle"}
        onChange={(tab) => onTabChange(tab as Tab)}
      />
    </div>
  );
};
export default Tabs;
