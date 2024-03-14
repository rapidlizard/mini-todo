import TaskList from '../components/TaskList';
import { useTasksContext } from '../contexts/TasksContext';
import './Tasks.scss';

const Tasks = () => {
  const { tasks } = useTasksContext();

  return (
    <>
      <h3>Task list:</h3>
      <div className="tasks">
        {tasks.length !== 0 ? <TaskList tasks={tasks} /> : <p>List is empty</p>}
      </div>
    </>
  );
};

export default Tasks;
