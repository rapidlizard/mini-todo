import Task from "../types/Task";
import { API_BASE_URL } from "./constants";

export async function getTasks (): Promise<Task[]> {
  const response = await fetch(API_BASE_URL + '/tasks' , {
    method: 'GET', 
    credentials: 'include'
  });

  const body = await response.json();

  return body as Task[];
}

export const createTask = async (title: string): Promise<Task> => {
  const response = await fetch(API_BASE_URL + '/task', {
      method: 'POST', 
      body: JSON.stringify({title: title}),
      credentials: 'include', 
      headers: {
        "Content-Type": "application/json",
      }
  });

  const body = await response.json();

  return body as Task;
}