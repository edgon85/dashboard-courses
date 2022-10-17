import { Route, Routes } from 'react-router-dom';
import { DashboardRoutes } from '../dashboard';

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login y register */}

      {/* Admin page */}
      <Route path="/*" element={<DashboardRoutes />} />
    </Routes>
  );
};
