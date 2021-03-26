import React from 'react';
import { Container } from 'react-grid-system';
import AuthProvider from './providers/auth-provider';
import LoaderProvider from './providers/loader-provider';
import Routes from './router/routes';

import './App.scss';

const App: React.FC = () => (
  <AuthProvider>
    <LoaderProvider>
      <Container>
        <Routes />
      </Container>
    </LoaderProvider>
  </AuthProvider>
);

export default App;
