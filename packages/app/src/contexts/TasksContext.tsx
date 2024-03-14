import { ReactNode, createContext, useContext } from 'react';
import Task from '../types/Task';

type TasksContext = {
  tasks: Task[] | null;
  setTasks: (tasks: Task[] | null) => void;
};

type Props = TasksContext & {
  children?: ReactNode;
};

const TasksContext = createContext<TasksContext>({} as TasksContext);

export const TasksProvider = (props: Props) => {
  return (
    <TasksContext.Provider
      value={{ tasks: props.tasks, setTasks: props.setTasks }}>
      {props.children}
    </TasksContext.Provider>
  );
};

export const useTasksContext = () => {
  const context = useContext(TasksContext);

  if (!context.setTasks) {
    throw new Error('useTasksContext must be used inside of the TasksProvider');
  }

  return context;
};
