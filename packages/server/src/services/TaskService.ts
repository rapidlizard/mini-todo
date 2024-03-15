import Task from "../types/Task";

let tasks: Task[] = [
  {
    id: 1,
    title: 'stretch'
  },
  {
    id: 2,
    title: 'go outside'
  },
  {
    id: 3,
    title: 'touch grass'
  },
];

export function getTasks(): Task[] | [] {
  return tasks;
};

export const createTask = (title: string): Task => {
  const task = {
    id: tasks.length + 1,
    title: title
  }

  tasks.push(task);

  return task;
}