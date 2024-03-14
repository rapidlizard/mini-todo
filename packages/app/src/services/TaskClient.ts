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