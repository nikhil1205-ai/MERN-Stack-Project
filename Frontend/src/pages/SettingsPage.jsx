import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const SettingsPage = () => {
  const { user, updateProfile, deleteAccount } = useAuth();
  const [form, setForm] = useState({ name: user?.name || '', username: user?.username || '', bio: user?.bio || '' });
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(form);
      setMessage('Profile updated');
    } catch {
      setMessage('Unable to update profile');
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Delete your account permanently?')) return;
    try {
      await deleteAccount();
      setMessage('Account deleted successfully');
    } catch {
      setMessage('Unable to delete account');
    }
  };

  return (
    <div className="glass-panel rounded-[2rem] p-6 bg-white">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Settings</h1>
          <p className="mt-2 text-sm text-slate-600">Update your profile and manage your mock account.</p>
        </div>
        {message ? <span className="rounded-full bg-sky-50 px-4 py-2 text-sm text-sky-700">{message}</span> : null}
      </div>

      <form className="mt-8 grid gap-4" onSubmit={handleUpdate}>
        <input
          className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full name"
        />
        <input
          className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <textarea
          className="min-h-[140px] rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
          name="bio"
          value={form.bio}
          onChange={handleChange}
          placeholder="Short bio"
        />
        <button className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-sky-500/25 transition hover:from-sky-400 hover:to-blue-500" type="submit">
          Save profile
        </button>
      </form>

      <div className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-slate-900">Security</h2>
        <p className="mt-2 text-sm text-slate-600">This is a frontend-only mock account. Your changes are stored locally.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <input
            className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New password"
          />
          <button className="rounded-full bg-slate-100 px-5 py-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-200" type="button">
            Update password
          </button>
        </div>
      </div>

      <div className="mt-10 border-t border-slate-200 pt-6">
        <button className="inline-flex w-full items-center justify-center rounded-full bg-rose-100 px-6 py-3 text-sm font-semibold text-rose-600 transition hover:bg-rose-200" type="button" onClick={handleDelete}>
          Delete account
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
