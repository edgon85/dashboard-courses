import React from 'react';
import ReactDOM from 'react-dom/client';
import { CoursesProvider, ModalProvider, NotificationProvider } from './contex';
import { DashboardApp } from './DashboardApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CoursesProvider>
      <ModalProvider>
        <NotificationProvider>
          <DashboardApp />
        </NotificationProvider>
      </ModalProvider>
    </CoursesProvider>
  </React.StrictMode>
);
