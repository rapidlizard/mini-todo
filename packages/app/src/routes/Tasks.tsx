import { useTasksContext } from '../contexts/TasksContext';

const Tasks = () => {
  const { tasks } = useTasksContext();

  const renderList = () =>
    tasks?.map((task) => <p key={task.id}>{task.title}</p>);

  return (
    <>
      <h3>Task list:</h3>
      {renderList()}
    </>
  );
};

export default Tasks;
