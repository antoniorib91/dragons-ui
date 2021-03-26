import React, { ReactNode } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuthContext } from '../../contexts/auth-context';

type IProps = {
  path: string,
  children: ReactNode,
};

const PrivateRoute: React.FC<IProps> = (props: IProps) => {
  const { children, path } = props;
  const { isLogged } = useAuthContext();

  return (
    isLogged
      ? (<Route path={path}>{ children }</Route>)
      : (<Redirect to="/login" />)
  );
};

export default PrivateRoute;
