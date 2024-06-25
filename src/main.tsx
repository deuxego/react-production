import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@/app/app';
import '@/shared/config/i18next';
import { ErrorBoundary } from './app/providers/error-boundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
