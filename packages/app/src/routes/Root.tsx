import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import { logoutUser } from '../services/AuthClient';

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
      <h1>Main page</h1>
      {user && <h3>Hello {user.email}</h3>}
      {user && <button onClick={handleLogoutClick}>Logout</button>}
      {!user && <button onClick={handleRegisterClick}>Register</button>}
      {!user && <button onClick={handleLoginClick}>Login</button>}
    </>
  );
}
