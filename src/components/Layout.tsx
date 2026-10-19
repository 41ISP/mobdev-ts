import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="app">
      <main className="app__main">
        <Outlet />
      </main>
      <nav className="tabbar" aria-label="Навигация">
        <NavLink to="/" end className="tabbar__link">
          Расходы
        </NavLink>
        <NavLink to="/categories" className="tabbar__link">
          Категории
        </NavLink>
      </nav>
    </div>
  );
}
