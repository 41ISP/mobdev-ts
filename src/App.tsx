import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ExpensesPage from './pages/ExpensesPage';
import CategoriesPage from './pages/CategoriesPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<ExpensesPage />} />
        <Route path="categories" element={<CategoriesPage />} />
      </Route>
    </Routes>
  );
}
