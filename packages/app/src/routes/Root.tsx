import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

export default function Root() {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <>
      <h1>Main page</h1>
      {user && <h3>Hello {user.email}</h3>}
      {!user && <button onClick={handleRegisterClick}>Register</button>}
      {!user && <button onClick={handleLoginClick}>Login</button>}
    </>
  );
}
