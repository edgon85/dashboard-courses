import { BrowserRouter } from 'react-router-dom';
import { DashboardPage } from './dashboard/pages';
import { AppRouter } from './router/AppRouter';

export const DashboardApp = () => {
  return (
    <>
      <BrowserRouter>
        <DashboardPage />
      </BrowserRouter>
      {/* <AppRouter /> */}
    </>
  );
};
