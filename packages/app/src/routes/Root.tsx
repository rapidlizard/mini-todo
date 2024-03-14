import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useAuthContext } from '../contexts/AuthContext';
import { logoutUser } from '../services/AuthClient';
import './Root.scss';
import Button from '../components/Button';

export default function Root() {
  const navigate = useNavigate();
  const { user, setUser } = useAuthContext();

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

  return (
    <>
      <Header>
        {user && <p>Hello, {user.email}</p>}
        {user && <Button onClick={handleLogoutClick}>Logout</Button>}
        {!user && <Button onClick={handleRegisterClick}>Register</Button>}
        {!user && <Button onClick={handleLoginClick}>Login</Button>}
      </Header>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
