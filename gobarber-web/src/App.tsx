import React, { FC } from 'react';

import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global';

import { AuthProvider } from './context/AuthContext';

const App: FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <GlobalStyle />
  </>
);

export default App;
