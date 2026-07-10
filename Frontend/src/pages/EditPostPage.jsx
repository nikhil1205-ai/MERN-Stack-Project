import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPosts, updatePost } from '../services/postService';

const EditPostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      try {
        const posts = await getPosts();
        const post = posts.find((item) => item._id === postId);
        if (!post) {
          setError('Post not found');
          return;
        }
        setCaption(post.caption || '');
        setImage(post.image || '');
      } catch (err) {
        setError('Unable to load post');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!caption.trim()) {
      setError('Caption cannot be empty');
      return;
    }

    try {
      await updatePost(postId, { caption, image });
      setMessage('Post updated successfully');
      setTimeout(() => navigate('/home'), 400);
    } catch (err) {
      setError('Unable to update post');
    }
  };

  return (
    <div className="glass-panel rounded-[2rem] p-6 bg-white">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Edit post</h1>
          <p className="mt-2 text-sm text-slate-600">Update the message for your feed entry.</p>
        </div>
        <span className="rounded-full bg-sky-50 px-4 py-2 text-sm text-sky-700">Route: /edit/{postId}</span>
      </div>

      {loading ? (
        <div className="mt-6 rounded-3xl bg-slate-50 px-5 py-4 text-sm text-slate-600">Loading post...</div>
      ) : error ? (
        <div className="mt-6 rounded-3xl bg-rose-50 px-5 py-4 text-sm text-rose-700">
          {error}
          <button
            type="button"
            onClick={() => navigate('/home')}
            className="ml-3 rounded-full bg-white px-4 py-2 text-sm text-slate-900 shadow-sm shadow-slate-200 transition hover:bg-slate-100"
          >
            Back to feed
          </button>
        </div>
      ) : (
        <>
          {message ? <div className="mt-5 rounded-3xl bg-sky-50 px-4 py-3 text-sm text-sky-700">{message}</div> : null}

          <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
            <textarea
              className="min-h-[180px] rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              maxLength={500}
              placeholder="Update your post message"
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
                Save changes
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

          {image ? (
            <div className="mt-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-4">
              <p className="mb-3 text-sm font-medium text-slate-700">Image preview</p>
              <img className="h-72 w-full rounded-[1.5rem] object-cover" src={image} alt="Post preview" />
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default EditPostPage;
