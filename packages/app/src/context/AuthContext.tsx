import { ReactNode, createContext, useContext, useState } from "react";
import User from "../types/User";

type AuthContext = {
  user: User | null;
  setUser: (user: User | null) => void;
}

type Props = {
  children?: ReactNode
}
  
const AuthContext = createContext<AuthContext>({} as AuthContext);

export const AuthProvider = ({children}: Props) => {
  const [user, setUser] = useState<User | null>(null)

  return <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context.setUser) {
    throw new Error('useAuthContext must be used inside of the AuthProvider')
  }

  return context;
}