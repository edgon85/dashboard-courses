import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ClaseProvider,
  CoursesProvider,
  ModalProvider,
  NotificationProvider,
} from './contex';
import { ModuloProvider } from './contex';
import { DashboardApp } from './DashboardApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CoursesProvider>
      <ClaseProvider>
        <ModuloProvider>
          <ModalProvider>
            <NotificationProvider>
              <DashboardApp />
            </NotificationProvider>
          </ModalProvider>
        </ModuloProvider>
      </ClaseProvider>
    </CoursesProvider>
  </React.StrictMode>
);
