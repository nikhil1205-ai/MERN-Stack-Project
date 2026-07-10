import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import BrandLogo from './BrandLogo';

const navItems = [
  { label: 'Home', path: '/home', Icon: HomeOutlinedIcon },
  { label: 'Profile', path: '/profile', Icon: PersonOutlineOutlinedIcon },
  { label: 'Create', path: '/create', Icon: AddBoxOutlinedIcon },
  { label: 'Settings', path: '/settings', Icon: SettingsOutlinedIcon },
];

const Layout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { theme, toggle } = useTheme();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4">
          <Link to="/home" className="inline-flex">
            <BrandLogo className="text-lg font-semibold" />
          </Link>

          <div className="hidden md:flex items-center gap-3">
            <label className="relative block">
              <SearchOutlinedIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                className="w-72 rounded-full border border-slate-200 bg-slate-50 px-12 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                placeholder="Search creators"
              />
            </label>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate('/create')}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-sky-700 transition hover:bg-slate-50"
            >
              <AddBoxOutlinedIcon className="h-5 w-5" />
              Create
            </button>
            <button
              type="button"
              onClick={toggle}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50"
            >
              {theme === 'light' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50"
            >
              <LogoutOutlinedIcon />
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 lg:grid-cols-[260px_1fr_300px]">
        <aside className="hidden lg:block">
          <div className="glass-panel space-y-6 p-6">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-3xl bg-gradient-to-br from-sky-500 to-blue-600 text-xl text-white shadow-xl shadow-sky-500/20">{user?.name?.charAt(0).toUpperCase() || 'U'}</div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-600">Signed in</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{user?.name}</p>
              </div>
            </div>
            <nav className="space-y-2">
              {navItems.map(({ label, path, Icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium transition ${
                      isActive ? 'bg-sky-100 text-sky-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`
                  }
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
        </aside>

        <main className="space-y-6">{children}</main>

        <aside className="hidden xl:block">
          <div className="glass-panel space-y-6 p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Your profile</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{user?.username ? `@${user.username}` : 'No profile'}</p>
              </div>
              <div className="grid h-14 w-14 place-items-center rounded-3xl bg-sky-100 text-xl text-sky-700">{user?.name?.charAt(0).toUpperCase() || 'U'}</div>
            </div>
            <p className="text-sm leading-6 text-slate-600">{user?.bio || 'Share your story and connect with your community.'}</p>
            <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-700">
              <p className="uppercase tracking-[0.3em] text-slate-500">Member since</p>
              <p className="mt-3 text-base font-semibold text-slate-900">{new Date(user?.createdAt || Date.now()).toLocaleDateString()}</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Layout;
