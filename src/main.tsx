import React from 'react';
import ReactDOM from 'react-dom/client';
import { CoursesProvider, ModalProvider } from './contex';
import { DashboardApp } from './DashboardApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CoursesProvider>
      <ModalProvider>
        <DashboardApp />
      </ModalProvider>
    </CoursesProvider>
  </React.StrictMode>
);
