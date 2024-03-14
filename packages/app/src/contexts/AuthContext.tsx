import { ReactNode, createContext, useContext } from 'react';
import { User } from '../types/User';

type AuthContext = {
  user: User | null;
  setUser: (user: User | null) => void;
};

type Props = AuthContext & {
  children?: ReactNode;
};

const AuthContext = createContext<AuthContext>({} as AuthContext);

export const AuthProvider = (props: Props) => {
  return (
    <AuthContext.Provider value={{ user: props.user, setUser: props.setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context.setUser) {
    throw new Error('useAuthContext must be used inside of the AuthProvider');
  }

  return context;
};
