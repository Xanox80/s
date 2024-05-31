import { createContext, useState } from "react";
interface IUser {
  username: string;
  password: string;
}

interface IAuthContextType {
  isAuthenticated: boolean;
  user: IUser | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}
export const AuthContext = createContext<IAuthContextType>({
  isAuthenticated: false,
  user: null,
  login: () => false,
  logout: () => {},
});

export const useProvideAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  const login = (username: string, password: string): boolean => {
    const validUser = { username: "user", password: "pas1word" };

    if (username === validUser.username && password === validUser.password) {
      setUser(validUser);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    user,
    login,
    logout,
  };
};
