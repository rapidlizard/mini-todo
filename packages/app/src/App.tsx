import './App.scss';
import { useAuthContext } from './contexts/AuthContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from './routes/Register';
import Root from './routes/Root';


function App() {
  const {user, setUser} = useAuthContext()
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />
    },
    {
      path: '/register',
      element: <Register />
    }
  ])

  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
