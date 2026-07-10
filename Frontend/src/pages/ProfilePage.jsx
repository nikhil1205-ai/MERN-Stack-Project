import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getPosts } from '../services/postService';

const ProfilePage = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getPosts();
      setPosts(data.filter((post) => post.userId === user?._id));
    };
    load();
  }, [user]);

  return (
    <div className="glass-panel rounded-[2rem] p-6 bg-white">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-sky-500 to-blue-600 text-2xl font-semibold text-white">
            {user?.name?.charAt(0) || 'U'}
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">{user?.name}</h2>
            <p className="text-sm text-slate-500">@{user?.username}</p>
          </div>
        </div>
        <span className="rounded-full bg-sky-50 px-4 py-2 text-sm text-sky-700">Joined {new Date(user?.createdAt || Date.now()).toLocaleDateString()}</span>
      </div>

      <p className="mt-4 text-slate-600">{user?.bio || 'No bio yet. Update your profile to make your story shine.'}</p>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-slate-900">Your posts</h3>
        {posts.length === 0 ? (
          <div className="empty-state bg-slate-50 text-slate-600 mt-4">You have not posted anything yet.</div>
        ) : (
          <div className="mt-4 grid gap-4">
            {posts.map((post) => (
              <div key={post._id} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-4 text-slate-700">
                <p>{post.caption}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
