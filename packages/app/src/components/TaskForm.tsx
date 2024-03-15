import { FormEvent, useState } from 'react';
import { createTask } from '../services/TaskClient';
import { useTasksContext } from '../contexts/TasksContext';

const TaskForm = () => {
  const { tasks, setTasks } = useTasksContext();
  const [title, setTitle] = useState('');

  function handleChange(event: FormEvent<HTMLInputElement>) {
    setTitle(event.currentTarget.value);
  }

  const handleSubmit = () => {
    createTask(title).then((res) => setTasks([...tasks, res]));

    setTitle('');
  };

  return (
    <>
      <input type="text" value={title} onChange={handleChange} />
      <button onClick={handleSubmit}>Add!</button>
    </>
  );
};

export default TaskForm;
