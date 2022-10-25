import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ClaseProvider,
  CoursesProvider,
  ModalProvider,
  NotificationProvider,
} from './contex';
import { DashboardApp } from './DashboardApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CoursesProvider>
      <ClaseProvider>
        <ModalProvider>
          <NotificationProvider>
            <DashboardApp />
          </NotificationProvider>
        </ModalProvider>
      </ClaseProvider>
    </CoursesProvider>
  </React.StrictMode>
);
