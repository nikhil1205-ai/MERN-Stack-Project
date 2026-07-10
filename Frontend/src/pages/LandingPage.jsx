import { Link } from 'react-router-dom';
import BrandLogo from '../components/BrandLogo';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const LandingPage = () => {
  const features = [
    {
      icon: <RocketLaunchOutlinedIcon className="h-6 w-6 text-sky-600" />,
      title: 'Launch premium conversations',
      description: 'Craft moments that feel modern, sleek, and social-ready.',
    },
    {
      icon: <PeopleAltOutlinedIcon className="h-6 w-6 text-sky-600" />,
      title: 'Grow your network',
      description: 'Invite friends, founders, and creators into your private feed.',
    },
    {
      icon: <LockOutlinedIcon className="h-6 w-6 text-sky-600" />,
      title: 'Keep it secure',
      description: 'Safe mock data, elegant UI, and a polished frontend-first experience.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/" className="inline-flex">
            <BrandLogo />
          </Link>
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Sign in
            </Link>
            <Link
              to="/register"
              className="rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xl shadow-sky-500/20 transition hover:from-sky-400 hover:to-blue-500"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      <main className="relative overflow-hidden bg-slate-50 pb-24">
        <div className="mx-auto max-w-7xl px-6 pt-20 sm:pt-24 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm text-sky-700 ring-1 ring-sky-200">
                <RocketLaunchOutlinedIcon fontSize="small" />
                Premium frontend social experience
              </p>
              <h1 className="mt-8 text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
                Build richer connections with a polished social feed.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                ConnectSphere is a frontend-only mock social platform with Tailwind CSS, Material UI icons, white background, and blue typography.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-sky-500/20 transition hover:from-sky-400 hover:to-blue-500"
                >
                  Start free demo
                  <ArrowForwardIosOutlinedIcon className="ml-2 text-sm" />
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  Explore preview
                </Link>
              </div>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(96,165,250,0.15)]">
                    <div className="icon-badge mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-panel rounded-[2rem] p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-sky-500">Live metrics</p>
                    <p className="mt-3 text-3xl font-semibold text-slate-900">32k+</p>
                  </div>
                  <AutoStoriesOutlinedIcon className="h-12 w-12 rounded-3xl bg-sky-50 p-3 text-sky-600" />
                </div>
                <p className="mt-5 text-sm leading-6 text-slate-600">Fast, interactive feed creation with beautiful list views and modern brand polish.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="glass-panel rounded-[2rem] p-6">
                  <p className="text-sm text-slate-600">Creators onboarded</p>
                  <p className="mt-4 text-3xl font-semibold text-slate-900">1.2k</p>
                </div>
                <div className="glass-panel rounded-[2rem] p-6">
                  <p className="text-sm text-slate-600">Mock interactions</p>
                  <p className="mt-4 text-3xl font-semibold text-slate-900">8.4k</p>
                </div>
              </div>
              <div className="glass-panel rounded-[2rem] p-6">
                <div className="flex items-center gap-3 text-slate-600">
                  <span className="rounded-2xl bg-sky-50 p-3 text-sky-600">
                    <LockOutlinedIcon />
                  </span>
                  <p className="text-sm leading-6">No backend required. All state lives locally with polished UI and theme persistence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
