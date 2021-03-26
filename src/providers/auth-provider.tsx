import React, { ReactNode, useState } from 'react';
import { AuthContext } from '../contexts/auth-context';

type IProps = {
  children: ReactNode,
};

const AuthProvider: React.FC<IProps> = (props: IProps) => {
  const { children } = props;
  const [user, setUser] = useState<Record<string, unknown> | undefined>();
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const contextValue = {
    isLogged,
    setIsLogged,
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      { children }
    </AuthContext.Provider>
  );
};

export default AuthProvider;
