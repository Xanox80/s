import React, { ReactNode } from "react";
import { AuthContext, useProvideAuth } from "./UserContext.ts";
import "./StyleContext.css";

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
