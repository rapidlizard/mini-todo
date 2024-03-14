import { AuthProvider } from './contexts/AuthContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from './routes/Register';
import Root from './routes/Root';
import { getLoggedUser } from './services/AuthClient';
import { User } from './types/User';
import { useEffect, useState } from 'react';
import Login from './routes/Login';
import Tasks from './routes/Tasks';

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
      children: [
        {
          path: '/',
          element: <Tasks />,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/login',
          element: <Login />,
        },
      ],
    },
  ]);

  return (
    <AuthProvider user={user} setUser={setUser}>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
