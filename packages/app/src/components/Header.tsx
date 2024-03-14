import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../services/AuthClient';
import { useAuthContext } from '../contexts/AuthContext';
import './Header.scss';

const Header = () => {
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
    <div className="header">
      <div>
        <h1>Mini Todo</h1>
        {user && <p>Hello, {user.email}</p>}
      </div>
      <div>
        {user && <button onClick={handleLogoutClick}>Logout</button>}
        {!user && <button onClick={handleRegisterClick}>Register</button>}
        {!user && <button onClick={handleLoginClick}>Login</button>}
      </div>
    </div>
  );
};

export default Header;
