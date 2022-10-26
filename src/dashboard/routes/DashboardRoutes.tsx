import { Navigate, Route, Routes } from 'react-router-dom';
import {
  CoursesPage,
  ClassroomPage,
  ModulesPage,
  NewCourse,
  AddClasePage,
} from '../';

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/cursos" element={<CoursesPage />} />
      <Route path="/cursos/new" element={<NewCourse />} />
      <Route path="/clases" element={<ClassroomPage />} />
      <Route path="/modulos" element={<ModulesPage />} />
      <Route path="/clases/new" element={<AddClasePage />} />
      <Route path="*" element={<Navigate to="/cursos" />} />
    </Routes>
  );
};
