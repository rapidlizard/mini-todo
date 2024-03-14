import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useAuthContext } from '../contexts/AuthContext';
import { logoutUser } from '../services/AuthClient';
import './Root.scss';
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import { TasksProvider } from '../contexts/TasksContext';
import Task from '../types/Task';
import { getTasks } from '../services/TaskClient';

export default function Root() {
  const navigate = useNavigate();
  const { user, setUser } = useAuthContext();
  const [tasks, setTasks] = useState<Task[] | []>([]);

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoutClick = async () => {
    await logoutUser();

    setUser(null);
  };

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  return (
    <>
      <Header>
        {user && <p>Hello, {user.email}</p>}
        {user && <Button onClick={handleLogoutClick}>Logout</Button>}
        {!user && <Button onClick={handleRegisterClick}>Register</Button>}
        {!user && <Button onClick={handleLoginClick}>Login</Button>}
      </Header>
      <TasksProvider tasks={tasks} setTasks={setTasks}>
        <div className="container">
          <Outlet />
        </div>
      </TasksProvider>
    </>
  );
}
