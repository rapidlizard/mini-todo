import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useAuthContext } from '../contexts/AuthContext';
import { logoutUser } from '../services/AuthClient';
import './Root.scss';

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
        {user && <button onClick={handleLogoutClick}>Logout</button>}
        {!user && <button onClick={handleRegisterClick}>Register</button>}
        {!user && <button onClick={handleLoginClick}>Login</button>}
      </Header>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
