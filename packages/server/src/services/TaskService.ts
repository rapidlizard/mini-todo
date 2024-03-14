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