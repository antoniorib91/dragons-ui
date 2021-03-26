import React, { ReactNode } from 'react';
import { Route } from 'react-router-dom';

type IProps = {
  path: string,
  children: ReactNode,
};

const PublicRoute: React.FC<IProps> = (props: IProps) => {
  const { children, path } = props;
  return (
    <>
      <Route path={path}>
        { children }
      </Route>
    </>
  );
};

export default PublicRoute;
