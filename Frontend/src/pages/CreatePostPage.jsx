import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../services/postService';

const CreatePostPage = () => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost({ caption, image });
      setCaption('');
      setImage('');
      setMessage('Post created');
      setTimeout(() => navigate('/home'), 400);
    } catch (error) {
      setMessage('Unable to create post');
    }
  };

  return (
    <div className="glass-panel rounded-[2rem] p-6 bg-white">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Create new post</h1>
          <p className="mt-2 text-sm text-slate-600">Publish a mock update to your premium ConnectSphere feed.</p>
        </div>
        <span className="rounded-full bg-sky-50 px-4 py-2 text-sm text-sky-700">Mock publishing</span>
      </div>
      {message ? <div className="mt-5 rounded-3xl bg-sky-50 px-4 py-3 text-sm text-sky-700">{message}</div> : null}
      <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
        <textarea
          className="min-h-[180px] rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          maxLength={500}
          placeholder="Share what you're thinking..."
          required
        />
        <input
          className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL (optional)"
        />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-sky-500/25 transition hover:from-sky-400 hover:to-blue-500 sm:w-auto" type="submit">
            Publish
          </button>
          <button
            type="button"
            onClick={() => navigate('/home')}
            className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 sm:w-auto"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostPage;
