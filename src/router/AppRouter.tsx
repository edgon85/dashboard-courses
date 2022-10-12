import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {
  ClassroomPage,
  CoursesPage,
  DashboardPage,
  ModulesPage,
} from '../pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/cursos" element={<CoursesPage />} />
      <Route path="/clases" element={<ClassroomPage />} />
      <Route path="/modulos" element={<ModulesPage />} />
      <Route path="/" element={<Navigate to="/cursos" />} />⁄
      <Route path="*" element={<Navigate to="cursos" />} />
      {/* </Route> */}
    </Routes>
  );
};
