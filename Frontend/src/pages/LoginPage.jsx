import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(form.email, form.password);
      navigate('/home');
    } catch (err) {
      setError(err.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-md items-center px-6 py-12">
        <div className="w-full rounded-[2rem] border border-slate-200 bg-white p-10 shadow-[0_40px_80px_rgba(56,189,248,0.12)]">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-600">Welcome back</p>
            <h1 className="mt-4 text-3xl font-semibold text-slate-900">Sign in to ConnectSphere</h1>
            <p className="mt-3 text-sm text-slate-600">Continue building your mock social feed with premium interface.</p>
          </div>
          {error ? <div className="rounded-3xl bg-rose-100 px-4 py-3 text-sm text-rose-600">{error}</div> : null}
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button className="w-full rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-4 text-sm font-semibold text-white shadow-xl shadow-sky-500/20 transition hover:from-sky-400 hover:to-blue-500" type="submit">
              Log in
            </button>
          </form>
          <div className="mt-8 flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:justify-between">
            <Link className="text-sky-700 transition hover:text-sky-900" to="/register">Create account</Link>
            <Link className="text-sky-700 transition hover:text-sky-900" to="/">Back home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
