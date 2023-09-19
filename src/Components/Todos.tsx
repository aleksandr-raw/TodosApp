import { Tab, Task } from "../Types/Types";
import { useCallback, useMemo, useState } from "react";
import TaskCreator from "./TaskCreator";
import TaskList from "./TaskList";
import Controls from "./Controls";

const Todos = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>("All");

  const addTask = (description: string) => {
    const newTask: Task = { description, completed: false, id: Date.now() };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  };

  const shownTasks = useMemo(() => {
    switch (activeTab) {
      case "Active":
        return tasks.filter((task) => !task.completed);
      case "Completed":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }, [activeTab, tasks]);

  const tasksLeftCount = useMemo(() => {
    return tasks.filter((task) => !task.completed).length;
  }, [tasks]);

  const clearCompleted = useCallback(() => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  }, [setTasks]);

  return (
    <div className={"p-4 bg-black/50 rounded-xl"}>
      <TaskCreator onAddTask={addTask} />
      <TaskList tasks={shownTasks} onToggleTask={toggleTask} />
      <Controls
        activeTab={activeTab}
        onTabChange={setActiveTab}
        tasksLeftCount={tasksLeftCount}
        clearCompleted={clearCompleted}
      />
    </div>
  );
};

export default Todos;
