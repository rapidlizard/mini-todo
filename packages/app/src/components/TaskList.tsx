import Task from '../types/Task';
import './TaskList.scss';

type Props = {
  tasks: Task[];
};

const TaskList = (props: Props) => {
  const renderList = () =>
    props.tasks?.map((task) => <p key={task.id}>{task.title}</p>);

  return <div className="task-list">{renderList()}</div>;
};

export default TaskList;
