import { Navigate, Route, Routes } from 'react-router-dom';
import {
  CoursesPage,
  ClassroomPage,
  ModulesPage,
  NewCourse,
  AddClasePage,
  NewModuloPage,
} from '../';

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/cursos" element={<CoursesPage />} />
      <Route path="/cursos/new" element={<NewCourse />} />
      <Route path="/clases" element={<ClassroomPage />} />
      <Route path="/clases/new" element={<AddClasePage />} />
      <Route path="/modulos" element={<ModulesPage />} />
      <Route path="/modulos/new" element={<NewModuloPage />} />
      <Route path="*" element={<Navigate to="/cursos" />} />
    </Routes>
  );
};
