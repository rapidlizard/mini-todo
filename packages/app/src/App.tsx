import './App.scss';
import { AuthProvider } from './contexts/AuthContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from './routes/Register';
import Root from './routes/Root';
import { getLoggedUser } from './services/AuthClient';
import { User } from './types/User';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getLoggedUser().then((user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ]);

  return (
    <AuthProvider user={user} setUser={setUser}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
}

export default App;
