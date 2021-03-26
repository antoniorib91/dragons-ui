import React, { ReactNode, useState } from 'react';
import Loader from '../components/loader';
import { LoaderContext } from '../contexts/loader-context';

type IProps = {
  children: ReactNode,
};

const LoaderProvider: React.FC<IProps> = (props: IProps) => {
  const { children } = props;

  const [loading, setLoading] = useState<boolean>(false);

  const toggleLoader = () => {
    setLoading((prev) => !prev);
  };

  const contextValue = {
    loading,
    setLoading,
    toggleLoader,
  };

  return (
    <LoaderContext.Provider value={contextValue}>
      <Loader loading={loading} />
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;
