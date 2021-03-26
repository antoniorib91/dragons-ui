import {
  createContext, Dispatch, SetStateAction, useContext,
} from 'react';

type IContextProps = {
  isLogged: boolean,
  setIsLogged?: Dispatch<SetStateAction<boolean>>
  user?: Record<string, unknown>,
  setUser: Dispatch<SetStateAction<Record<string, unknown> | undefined>>
};

const defaultContext: IContextProps = {
  user: undefined,
  setUser: () => {},
  isLogged: false,
  setIsLogged: () => {},
};

export const AuthContext = createContext(defaultContext);

export const useAuthContext = (): IContextProps => (
  useContext(AuthContext)
);
