import React from 'react';

import { Router } from './router/Router';
import { UserProvider } from "./providers/UserProvider";
import './style.css';

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
