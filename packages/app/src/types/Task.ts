type Task = {
  id: number;
  title: string;
}

export type TaskPayload = Omit<Task, 'id'>;

export default Task;
