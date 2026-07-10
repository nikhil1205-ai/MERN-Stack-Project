import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost, deletePost, getPosts } from '../services/postService';
import PostCard from '../components/PostCard';
import { useAuth } from '../context/AuthContext';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const data = await getPosts();
      setPosts(data || []);
    } catch (error) {
      setMessage('Unable to load posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await createPost({ caption, image });
      setCaption('');
      setImage('');
      setMessage('Post published');
      fetchPosts();
    } catch (error) {
      setMessage('Unable to create post');
    }
  };

  const handleEdit = (post) => {
    navigate(`/edit/${post._id}`);
  };

  const handleDelete = async (post) => {
    if (!window.confirm('Delete this post?')) return;
    try {
      await deletePost(post._id);
      setMessage('Post deleted');
      fetchPosts();
    } catch (error) {
      setMessage('Unable to delete post');
    }
  };

  return (
    <div className="space-y-6">
      <section className="glass-panel p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-sky-600">Welcome back</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900">Hello, {user?.name || 'friend'} 👋</h1>
          </div>
          <span className="rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700">{posts.length} posts in feed</span>
        </div>
        <p className="mt-4 text-slate-600">Share your latest moments with the people who matter most.</p>
      </section>

      <section className="glass-panel p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Create a post</h2>
            <p className="mt-2 text-sm text-slate-600">Fast mock publishing with local feed state.</p>
          </div>
          {message ? <span className="rounded-full bg-sky-50 px-4 py-2 text-sm text-sky-700">{message}</span> : null}
        </div>
        <form className="mt-6 grid gap-4" onSubmit={handleCreate}>
          <textarea
            className="min-h-[160px] rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            maxLength={500}
            placeholder="Write something inspiring..."
            required
          />
          <input
            className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Optional image URL"
          />
          <button
            type="submit"
            className="inline-flex w-fit items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-sky-500/25 transition hover:from-sky-400 hover:to-blue-500"
          >
            Publish
          </button>
        </form>
      </section>

      <section className="space-y-4">
        {loading ? (
          <div className="empty-state bg-white text-slate-600">Loading posts...</div>
        ) : posts.length === 0 ? (
          <div className="empty-state bg-white text-slate-600">No posts yet. Start the conversation.</div>
        ) : (
          <div className="grid gap-6">{posts.map((post) => <PostCard key={post._id} post={post} onEdit={handleEdit} onDelete={handleDelete} />)}</div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
