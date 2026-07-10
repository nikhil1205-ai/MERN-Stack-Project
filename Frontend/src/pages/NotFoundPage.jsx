import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-xl items-center justify-center px-6 py-12">
        <div className="w-full rounded-[2rem] border border-slate-200 bg-white p-12 text-center shadow-[0_40px_80px_rgba(56,189,248,0.12)]">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-600">404 error</p>
          <h1 className="mt-6 text-6xl font-semibold text-slate-900">Page not found</h1>
          <p className="mt-4 text-slate-600">The page you are looking for does not exist or has been moved.</p>
          <Link
            to="/"
            className="mt-8 inline-flex rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-sky-500/20 transition hover:from-sky-400 hover:to-blue-500"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
